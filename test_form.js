const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  try {
    await page.goto('http://localhost:3000/#contact', { waitUntil: 'networkidle' });
    
    // Scroll to the contact section
    await page.evaluate(() => document.querySelector('#contact').scrollIntoView());
    await page.waitForTimeout(1000);

    const labels = await page.locator('.project-type-label-container').all();
    if (labels.length !== 5) {
      throw new Error(`Expected 5 labels, found ${labels.length}`);
    }

    console.log("Found 5 project type options. Testing clicks...");

    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const text = await label.innerText();
      console.log(`Clicking option ${i + 1}: ${text.split('\\n')[0]}`);
      
      await label.click();
      await page.waitForTimeout(200); // Wait for React state to update

      // Verify input is checked
      const input = label.locator('input[type="radio"]');
      const isChecked = await input.isChecked();
      if (!isChecked) {
        throw new Error(`Option ${i + 1} did not become checked after click!`);
      }
      
      // Verify is-selected class
      const className = await label.getAttribute('class');
      if (!className.includes('is-selected')) {
        throw new Error(`Option ${i + 1} did not get 'is-selected' class!`);
      }

      console.log(`✓ Verified option ${i + 1} is checked and styled.`);
    }

    console.log("\\nSUCCESS! All 5 options are perfectly clickable and update the state.");
  } catch (error) {
    console.error("Test failed:", error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
})();
