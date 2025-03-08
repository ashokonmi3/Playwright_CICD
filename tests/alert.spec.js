const { test, expect } = require('@playwright/test');
const globalSetup = require('../utils/fixtures');  // ✅ Import global setup
const AlertPage = require('../pages/AlertPage');

test.describe('Alert Handling Tests', () => {
    test('should handle JavaScript alerts', async ({ }) => {
        const { browser, context, page } = await globalSetup(); // ✅ Use reusable setup

        const alertPage = new AlertPage(page);
        await alertPage.navigate();

        page.on('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        });

        await alertPage.triggerAlert();
        await page.waitForTimeout(5000);

        await browser.close(); // ✅ Ensure the browser is closed properly
    });
});
