const { chromium, firefox, webkit } = require('@playwright/test');

async function globalSetup() {
    const browserType = process.env.BROWSER || 'chromium';
    const browser = await { chromium, firefox, webkit }[browserType].launch({
        headless: true, // Change to false if you want UI mode
        // slowMo: 500
    });

    const context = await browser.newContext({
        viewport: { width: 3840, height: 2160 }
    });

    const page = await context.newPage();
    return { browser, context, page };
}

module.exports = globalSetup;