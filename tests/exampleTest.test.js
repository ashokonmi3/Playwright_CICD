const { test, expect } = require('@playwright/test');
const { testSetup } = require('../utils/testSetup'); // ✅ Correct Import
const ExamplePage = require('../pages/ExamplePage'); // Import relevant POM

test.describe('Example Test Suite', () => {
    testSetup('https://example.com'); // ✅ Apply setup

    let examplePage;

    test.beforeEach(async ({ page }) => { // ✅ Ensure Playwright passes page
        examplePage = new ExamplePage(page); // Initialize Example Page Object
    });

    test('example test', async ({ page }) => { // ✅ Pass page properly
        const title = await page.title(); // Use Playwright API directly
        expect(title).toBe('Example Domain');
    });

    test('example with assertions', async ({ page }) => { // ✅ Pass page properly
        await expect(page.locator('h1')).toHaveText('Example Domain');
    });
});
