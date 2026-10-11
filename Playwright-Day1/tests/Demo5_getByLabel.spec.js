import {test, expect} from '@playwright/test';

test('Locator Get By Label', async ({page})=>{

    await page.goto('https://www.saucedemo.com/');

    //the HTML also shows aria-label="Username" for the username field
    await page.getByLabel('Username').fill('standard_user');
    await page.getByLabel('Password').fill('secret_sauce');

    await page.getByRole('button', {name: 'login'}).click();

});