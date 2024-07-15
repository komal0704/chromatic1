// Button.test.js
import puppeteer from 'puppeteer';
import { toMatchImageSnapshot } from 'jest-image-snapshot';

expect.extend({ toMatchImageSnapshot });
const storybookUrl = 'http://localhost:6006'
test('Button component matches snapshot', async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Serve the bundled file using a local file server
  await page.goto(`${storybookUrl}/?path=/story/example-button--primary`, {
    waitUntil: 'networkidle0', // Ensure the page has fully loaded
  });
  // Capture a screenshot of the button
   // Adjust the selector if necessary
   const screenshot = await page.screenshot();

  await browser.close();

  expect(screenshot).toMatchImageSnapshot();
});
