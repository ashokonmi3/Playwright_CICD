const { test, expect } = require('@playwright/test');
const PlaywrightDocsPage = require('../pages/PlaywrightDocsPage');
const globalSetup = require('../utils/fixtures');  // ✅ Import global setup

test.describe('Playwright Documentation Tests', () => {
    let browser, context, page;
    let playwrightDocsPage;


    test.beforeEach(async ({ page }) => {
        const setup = await globalSetup();
        browser = setup.browser;
        context = setup.context;
        page = setup.page;
        playwrightDocsPage = new PlaywrightDocsPage(page);
        await page.goto("https://playwright.dev/");

    });

    test('Validate Dropdown Menu Contains Programming Languages', async ({ page }) => {
        // await playwrightDocsPage.hoverDocsMenu();
        await playwrightDocsPage.validateDropdownContainsLanguages();
    });

    test('Validate Main Heading Text', async ({ page }) => {
        await playwrightDocsPage.validateMainHeading();
    });
});
