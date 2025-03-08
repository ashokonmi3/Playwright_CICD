const { testSetup } = require('../utils/testSetup');
const MoviesPage = require('../pages/MoviesPage');
const { test, expect } = require('@playwright/test');

test.describe('Custom Wait Tests @regression', () => {
    let moviesPage; testSetup('https://example.com'); // ✅ Apply setup


    test.beforeEach(async ({ page }) => { // ✅ Ensure Playwright passes page
        moviesPage = new MoviesPage(page); // Initialize Example Page Object
    });

    test('should load movie data for 2015 @smoke', async () => {
        await moviesPage.navigate();
        await moviesPage.loadMoviesForYear(2015);
        await moviesPage.verifyFirstMovieIsVisible();
    });
});
