const { chromium } = require('@playwright/test');

async function globalSetup() {
    const browser = await chromium.launch({
        headless: false, // Change to true for headless execution
        slowMo: 500
    });

    const context = await browser.newContext({
        viewport: { width: 3840, height: 2160 }
    });

    const page = await context.newPage();
    return { browser, context, page };
}

module.exports = globalSetup;