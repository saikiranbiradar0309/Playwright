import {test, expect} from '@playwright/test';

test('Browser Navigation', async ({page})=> {

    await page.goto('https://www.facebook.com');

    // Get Title
    await expect(page).toHaveTitle('Facebook');

    // Get URL
    await expect(page).toHaveURL(/facebook\.com/);


    await page.goto('https://www.amazon.in');

    // Go back
    await page.goBack();

    // Go Forward
    await page.goForward();

    // Reload the page
    await page.reload();


    // Close the page
    await page.close();

});