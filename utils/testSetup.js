const { test } = require('@playwright/test');
const globalSetup = require('./fixtures');

async function testSetup(url) {
    test.beforeEach(async ({ page }) => { // ✅ Use page from Playwright's context
        await page.goto(url); // Navigate to the provided URL
    });
}

// ✅ Export properly
module.exports = { testSetup };
