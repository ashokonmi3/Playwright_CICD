const { test, expect } = require('@playwright/test');
const { testSetup } = require('../utils/testSetup');  // ✅ Centralized setup
const PlaywrightDocsPage = require('../pages/PlaywrightDocsPage');

test.describe('Playwright Documentation Tests', () => {
    testSetup('https://playwright.dev/'); // ✅ Pass Playwright Docs URL

    let playwrightDocsPage;

    test.beforeEach(async ({ page }) => {
        playwrightDocsPage = new PlaywrightDocsPage(page); // ✅ Initialize page object
    });

    test('Validate Dropdown Menu Contains Programming Languages', async ({ page }) => {
        await playwrightDocsPage.validateDropdownContainsLanguages();
    });

    test('Validate Main Heading Text', async ({ page }) => {
        await playwrightDocsPage.validateMainHeading();
    });
});
