class AlertPage {
    constructor(page) {
        this.page = page;
        this.alertButton = page.getByText("Show alert box");
    }

    async navigate() {
        await this.page.goto("https://testpages.eviltester.com/styled/alerts/alert-test.html");
    }

    async triggerAlert() {
        await this.alertButton.scrollIntoViewIfNeeded();
        await this.alertButton.click();
    }
}
module.exports = AlertPage;