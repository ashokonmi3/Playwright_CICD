const { test, expect } = require('@playwright/test');
const ExamplePage = require('../pages/ExamplePage');
const globalSetup = require('../utils/fixtures');  // ✅ Import global setup

test.describe('Example Test Suite', () => {
    let browser, context, page;
    let examplePage;


    test.beforeEach(async ({ }) => {
        const setup = await globalSetup();
        browser = setup.browser;
        context = setup.context;
        page = setup.page;
        // playwrightDocsPage = new PlaywrightDocsPage(page);
        examplePage = new ExamplePage(page);

        await examplePage.navigate();
    });

    test('example test', async () => {
        const title = await examplePage.getTitle();
        expect(title).toBe('Example Domain');
    });

    test('example with assertions', async () => {
        await examplePage.verifyTitle('Example Domain');
        await examplePage.verifyHeading('Example Domain');
    });

    test.afterEach(async () => {
        await page.close();
    });
});
