class AlertPage {
    constructor(page) {
        this.page = page;
        this.alertButton = page.getByText("Show alert box");
    }



    async triggerAlert() {
        //   await this.alertButton.scrollIntoViewIfNeeded();
        await this.alertButton.click();
    }
}
module.exports = AlertPage;