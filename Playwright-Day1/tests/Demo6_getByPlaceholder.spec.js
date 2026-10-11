import {test, expect} from '@playwright/test';

test('Locator Get By Placeholder', async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name').fill('Saikiran');
    await page.getByPlaceholder('Last Name').fill('Biradar');
    await page.getByPlaceholder('name@example.com').fill('sai@gmail.com');


    await page.getByRole('button', {name: 'Submit'});

});