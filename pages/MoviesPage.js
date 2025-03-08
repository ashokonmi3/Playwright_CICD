const { expect } = require('@playwright/test');

class MoviesPage {
    constructor(page) {
        this.page = page;
        this.movieYearLink = (year) => this.page.getByRole("link", { name: `${year}` });
        this.firstMovieTitle = this.page.locator("td.film-title").first();
    }

    async navigate() {
        await this.page.goto("https://www.scrapethissite.com/pages/ajax-javascript/", {
            waitUntil: 'domcontentloaded',
        });
    }

    async loadMoviesForYear(year) {
        console.log(`Loading Oscars for ${year}...`);
        await this.movieYearLink(year).click();

        const start = performance.now();
        await this.firstMovieTitle.scrollIntoViewIfNeeded();
        await this.firstMovieTitle.waitFor(); // Wait for movies to load
        const timeTaken = (performance.now() - start) / 1000;
        console.log(`...movies are loaded in ${timeTaken.toFixed(2)}s!`);
    }

    async verifyFirstMovieIsVisible() {
        await expect(this.firstMovieTitle).toBeVisible();
    }
}

module.exports = MoviesPage;
