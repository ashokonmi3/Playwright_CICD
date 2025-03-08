const { expect } = require('@playwright/test');

class ExamplePage {
    constructor(page) {
        this.page = page;
        this.heading = page.locator('h1');
    }

    async navigate() {
        await this.page.goto('https://example.com');
    }

    async getTitle() {
        return await this.page.title();
    }

    async verifyTitle(expectedTitle) {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

    async verifyHeading(expectedHeading) {
        await expect(this.heading).toHaveText(expectedHeading);
    }
}

module.exports = ExamplePage;
