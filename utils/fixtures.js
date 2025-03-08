const { chromium, firefox, webkit } = require('playwright');

async function globalSetup() {
    const browserType = process.env.BROWSER || 'all'; // Default to 'all' if not provided

    let browsers = [];

    if (browserType === 'all') {
        browsers = [chromium, firefox, webkit];
    } else if (['chromium', 'firefox', 'webkit'].includes(browserType)) {
        browsers = [browserType === 'chromium' ? chromium :
            browserType === 'firefox' ? firefox : webkit];
    } else {
        throw new Error(`Invalid browser type: ${browserType}`);
    }

    const browserContexts = [];

    for (const browser of browsers) {
        const launchedBrowser = await browser.launch({ headless: true });
        const context = await launchedBrowser.newContext({
            viewport: { width: 1920, height: 1080 }
        });
        const page = await context.newPage();

        browserContexts.push({ browser: launchedBrowser, context, page });
    }

    return browserContexts;
}

module.exports = globalSetup;
