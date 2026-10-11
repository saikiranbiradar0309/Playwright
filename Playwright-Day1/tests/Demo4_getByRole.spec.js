import {test, expect} from '@playwright/test';

test('Locator Get By Role', async ({page})=> {

    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');

    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');

    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');

    await page.getByRole('button', {name: 'login'}).click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});