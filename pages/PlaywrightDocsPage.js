const { expect } = require('@playwright/test');
class PlaywrightDocsPage {
    constructor(page) {
        this.page = page;
        this.dropdownMenu = page.locator("ul.dropdown__menu");
        this.heading = page.locator("h1.hero__title");
    }

    async navigate() {
        await this.page.goto("https://playwright.dev/");
    }

    async hoverDocsMenu() {
        await this.page.hover('.navbar__link[href="/docs/intro"]'); // Ensures dropdown is visible
    }

    async validateDropdownContainsLanguages() {
        await expect(this.dropdownMenu).toContainText("Node.js");
        console.log("Dropdown menu contains 'Node.js'.");

        // Expect API: Check if the dropdown menu contains the text "Java"
        await expect(this.dropdownMenu).toContainText("Java");
        console.log("Dropdown menu contains 'Java'.");

        // Expect API: Check if the dropdown menu contains the text ".NET"
        await expect(this.dropdownMenu).toContainText(".NET");
        console.log("Dropdown menu contains '.NET'.");
    }

    async validateMainHeading() {
        await expect(this.heading).toHaveText("Playwright enables reliable end-to-end testing for modern web apps.");
    }
}

module.exports = PlaywrightDocsPage;  // ✅ Export for Node.js environment
