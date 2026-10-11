import {test, expect} from '@playwright/test';

test ('locator test by alt text', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByRole('textbox', {name: 'Username'}).fill('standard_user');
    await page.getByRole('textbox', {name: 'Password'}).fill('secret_sauce');

    await page.getByRole('button', {name: 'Login'}).click();


    // Get By Alt Text
    await page.getByAltText('Sauce Labs Bike Light').click();

}); 