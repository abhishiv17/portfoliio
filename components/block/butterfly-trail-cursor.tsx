// @ts-nocheck
'use client'
/* eslint-disable react-hooks/immutability -- Three.js scene objects are mutable render resources owned by this component. */

import { Component, useEffect, useMemo, useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { useReducedMotion } from 'motion/react'
import { cn } from '@/lib/utils'

const BUTTERFLY_LIFETIME = 2
const FADE_DURATION = 0.5
const MAX_BUTTERFLIES = 200
const SPAWN_THROTTLE = 120
const FLAP_AMPLITUDE = 1.15 // radians each wing swings around the body axis

// The original ObsidianUI model/texture were removed from their CDN, so the butterfly
// is now built procedurally: two wing shapes hinged on a body, plus a canvas matcap.

function createMatcapTexture() {
  const size = 256
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  // Base: warm coral that matches the site accent, darkening towards the rim
  const base = ctx.createRadialGradient(size * 0.5, size * 0.5, 0, size * 0.5, size * 0.5, size * 0.5)
  base.addColorStop(0, '#ffb39f')
  base.addColorStop(0.55, '#ef6b55')
  base.addColorStop(0.85, '#8a2e3f')
  base.addColorStop(1, '#2a1030')
  ctx.fillStyle = base
  ctx.fillRect(0, 0, size, size)

  // Soft specular highlight, upper-left
  const spec = ctx.createRadialGradient(size * 0.36, size * 0.32, 0, size * 0.36, size * 0.32, size * 0.3)
  spec.addColorStop(0, 'rgba(255,255,255,0.95)')
  spec.addColorStop(0.35, 'rgba(255,240,230,0.35)')
  spec.addColorStop(1, 'rgba(255,255,255,0)')
  ctx.fillStyle = spec
  ctx.fillRect(0, 0, size, size)

  // Iridescent violet rim light, lower-right
  const rim = ctx.createRadialGradient(size * 0.72, size * 0.74, 0, size * 0.72, size * 0.74, size * 0.28)
  rim.addColorStop(0, 'rgba(160,120,255,0.55)')
  rim.addColorStop(1, 'rgba(160,120,255,0)')
  ctx.fillStyle = rim
  ctx.fillRect(0, 0, size, size)

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  return texture
}

// Right wing in the XY plane, hinged along the Y axis at x = 0 (forewing up, hindwing down)
function createWingGeometry() {
  const shape = new THREE.Shape()
  shape.moveTo(0, 0.02)
  shape.bezierCurveTo(0.06, 0.2, 0.3, 0.34, 0.42, 0.28)
  shape.bezierCurveTo(0.5, 0.22, 0.44, 0.06, 0.3, 0.02)
  shape.bezierCurveTo(0.4, -0.04, 0.38, -0.22, 0.24, -0.28)
  shape.bezierCurveTo(0.14, -0.32, 0.04, -0.2, 0, -0.06)
  shape.lineTo(0, 0.02)
  return new THREE.ShapeGeometry(shape, 12)
}

function createBodyGeometry() {
  return new THREE.CapsuleGeometry(0.018, 0.22, 4, 8)
}

function ButterflyPool({ matcapMaterial, wingGeometry, bodyGeometry, motionEnabled }) {
  const poolRef = useRef([])
  const lastSpawnTime = useRef(0)
  const { gl, viewport, clock } = useThree()

  const poolGroup = useMemo(() => new THREE.Group(), [])

  useEffect(() => {
    const group = poolGroup

    for (let index = 0;index < MAX_BUTTERFLIES;index += 1) {
      const instanceMaterial = matcapMaterial.clone()
      instanceMaterial.transparent = true
      instanceMaterial.opacity = 1

      const butterfly = new THREE.Group()
      butterfly.add(new THREE.Mesh(bodyGeometry, instanceMaterial))

      const rightWing = new THREE.Group()
      rightWing.add(new THREE.Mesh(wingGeometry, instanceMaterial))
      const leftWing = new THREE.Group()
      const leftMesh = new THREE.Mesh(wingGeometry, instanceMaterial)
      leftMesh.scale.x = -1
      leftWing.add(leftMesh)
      butterfly.add(rightWing, leftWing)

      butterfly.scale.setScalar(0.55)
      butterfly.visible = false
      butterfly.userData = {
        active: false,
        direction: new THREE.Vector3(),
        createdAt: 0,
        initialRotation: new THREE.Euler(),
        material: instanceMaterial,
        rightWing,
        leftWing,
        flapPhase: 0,
        flapSpeed: 1,
      }

      group.add(butterfly)
      poolRef.current.push(butterfly)
    }

    const pool = poolRef.current
    return () => {
      for (const butterfly of pool) { butterfly.userData.material.dispose(); group.remove(butterfly) }
      poolRef.current = []
    }
  }, [bodyGeometry, matcapMaterial, poolGroup, wingGeometry])

  useFrame((state, delta) => {
    if (!motionEnabled) return
    const now = state.clock.elapsedTime

    for (const butterfly of poolRef.current) {
      const data = butterfly.userData
      if (!data.active) continue

      const age = now - data.createdAt
      const fadeStart = BUTTERFLY_LIFETIME - FADE_DURATION
      let flapScale = 1

      if (age > fadeStart) {
        const opacity = Math.max(0, 1 - (age - fadeStart) / FADE_DURATION)
        data.material.opacity = opacity
        flapScale = opacity
      }

      if (age > BUTTERFLY_LIFETIME) {
        butterfly.visible = false
        data.active = false
        data.material.opacity = 1
        continue
      }

      butterfly.position.x += data.direction.x * delta * 2
      butterfly.position.y += data.direction.y * delta * 2
      butterfly.position.z += data.direction.z * delta * 0.5
      butterfly.rotation.x = data.initialRotation.x + Math.sin(now * 3 + butterfly.position.x) * 0.1
      butterfly.rotation.y = data.initialRotation.y
      butterfly.rotation.z = data.initialRotation.z

      data.flapPhase += delta * data.flapSpeed * (0.4 + 0.6 * flapScale)
      const flap = Math.sin(data.flapPhase) * FLAP_AMPLITUDE
      data.rightWing.rotation.y = flap
      data.leftWing.rotation.y = -flap
    }
  })

  useEffect(() => {
    if (!motionEnabled) return
    const handleMouseMove = (event) => {
      const now = Date.now()
      if (now - lastSpawnTime.current < SPAWN_THROTTLE) return
      lastSpawnTime.current = now

      const x = (event.clientX / window.innerWidth - 0.5) * viewport.width
      const y = (0.5 - event.clientY / window.innerHeight) * viewport.height
      const count = 3 + Math.floor(Math.random() * 3)
      const createdAt = clock.elapsedTime

      let spawned = 0
      for (const butterfly of poolRef.current) {
        if (spawned >= count) break
        const data = butterfly.userData
        if (data.active) continue

        const angle = Math.random() * Math.PI * 2
        butterfly.position.set(
          x + (Math.random() - 0.5) * 1.5,
          y + (Math.random() - 0.5) * 1.5,
          (Math.random() - 0.5) * 0.5
        )
        data.direction.set(
          Math.cos(angle) * 0.75,
          0.3 + Math.random() * 0.5,
          (Math.random() - 0.5) * 0.3
        )
        // Keep wings mostly facing the camera so they read clearly
        data.initialRotation.set(
          (Math.random() - 0.5) * Math.PI * 0.3,
          (Math.random() - 0.5) * Math.PI * 0.6,
          (Math.random() - 0.5) * Math.PI * 0.5
        )
        butterfly.rotation.copy(data.initialRotation)
        data.createdAt = createdAt
        data.active = true
        data.material.opacity = 1
        data.flapPhase = Math.random() * Math.PI * 2
        data.flapSpeed = 16 + Math.random() * 8
        butterfly.visible = true
        spawned += 1
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [clock, gl, motionEnabled, viewport])

  return <primitive object={poolGroup} />
}

function ButterflyTrail({ motionEnabled }) {
  const matcapTexture = useMemo(() => createMatcapTexture(), [])
  const wingGeometry = useMemo(() => createWingGeometry(), [])
  const bodyGeometry = useMemo(() => createBodyGeometry(), [])

  const matcapMaterial = useMemo(
    () =>
      new THREE.MeshMatcapMaterial({
        matcap: matcapTexture,
        side: THREE.DoubleSide,
      }),
    [matcapTexture]
  )

  useEffect(() => () => {
    matcapMaterial.dispose()
    matcapTexture.dispose()
    wingGeometry.dispose()
    bodyGeometry.dispose()
  }, [bodyGeometry, matcapMaterial, matcapTexture, wingGeometry])

  return <ButterflyPool matcapMaterial={matcapMaterial} wingGeometry={wingGeometry} bodyGeometry={bodyGeometry} motionEnabled={motionEnabled} />
}

// If WebGL setup fails for any reason, drop the effect instead of crashing the page.
class ButterflyErrorBoundary extends Component {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  componentDidCatch(error) {
    console.warn('ButterflyTrailCursor disabled:', error)
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

/** @param {{ className?: string, height?: import("react").CSSProperties["height"], style?: import("react").CSSProperties, text?: string }} props */
export function ButterflyTrailCursor({ className, style } = {}) {
  const motionEnabled = !useReducedMotion()
  // The trail follows the mouse, so skip the WebGL scene entirely on touch devices.
  const [finePointer, setFinePointer] = useState(false)
  useEffect(() => {
    setFinePointer(window.matchMedia('(pointer: fine)').matches)
  }, [])

  if (!finePointer) return null

  return (
    <ButterflyErrorBoundary>
      <div className={cn("fixed inset-0 z-50 pointer-events-none w-full h-full overflow-hidden", className)} style={{ ...style }}>
        <Canvas style={{ pointerEvents: 'none' }} frameloop={motionEnabled ? "always" : "demand"} camera={{ position: [0, 0, 5], fov: 75 }} gl={{ antialias: false, powerPreference: 'high-performance', alpha: true }} dpr={[1, 1]} performance={{ min: 0.5 }}>
          <ButterflyTrail motionEnabled={motionEnabled} />
        </Canvas>
      </div>
    </ButterflyErrorBoundary>
  )
}
