const { test, expect } = require('@playwright/test');
const { testSetup } = require('../utils/testSetup');  // ✅ Use centralized test setup
const AlertPage = require('../pages/AlertPage');

test.describe('Alert Handling Tests', () => {
    testSetup('https://testpages.eviltester.com/styled/alerts/alert-test.html'); // ✅ Pass specific URL for alerts

    let alertPage;

    test.beforeEach(async ({ page }) => {
        alertPage = new AlertPage(page); // ✅ Initialize AlertPage with the test's page instance
    });

    test('should handle JavaScript alerts', async ({ page }) => {
        page.on('dialog', async dialog => {
            console.log(`Alert message: ${dialog.message()}`);
            await dialog.accept();
        });

        await alertPage.triggerAlert();
        await page.waitForTimeout(5000); // ✅ Ensure the test waits for the alert handling
    });
});
