import {test, expect} from '@playwright/test';

test('Locator Get By Text', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');
    await page.getByRole('button', {name: 'Login'}).click();


    // Get By Text
    await expect(page.getByText('Products', {exact: true})).toBeVisible();

});