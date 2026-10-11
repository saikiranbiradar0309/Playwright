import { test, expect } from '@playwright/test';

test('First Playwright Test', async ({page}) => {

    await page.goto('https://www.facebook.com');

    await expect(page).toHaveTitle('Facebook');

});