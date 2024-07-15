import { Builder } from 'selenium-webdriver';
import 'chromedriver';
import { promises as fs } from 'fs';

async function takeScreenshot() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.example.com');
    let screenshot = await driver.takeScreenshot();
    await fs.writeFile('screenshot.png', screenshot, 'base64');
    console.log('Screenshot saved as screenshot.png');
  } finally {
    await driver.quit();
  }
}

takeScreenshot();