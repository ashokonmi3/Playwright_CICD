import { test, expect, chromium } from '@playwright/test';
const AlertPage = require('../pages/AlertPage');  // 
test.describe('Alert Handling Tests', () => {
    test('should handle JavaScript alerts', async ({ }) => {
        // Launch the browser in non-headless mode with a slow motion delay of 500ms
        const browser = await chromium.launch({
            headless: true,
            slowMo: 500 // Slow down actions for better visibility
        });
        const context = await browser.newContext({
            viewport: { width: 3840, height: 2160 }, // Set to your screen resolution
        });
        const page = await context.newPage();

        const alertPage = new AlertPage(page);
        await alertPage.navigate();

        // Register the event listener for dialog events (alerts)
        page.on('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        });

        // Trigger the alert
        await alertPage.triggerAlert();

        // Wait for a few seconds to ensure the alert is handled
        await page.waitForTimeout(5000);

        // Close the browser
        await browser.close();
    });
});