import {test, expect} from '@playwright/test';

test('Common Actions', async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form');

    // Fill Action
    await page.getByPlaceholder('First Name').fill('Saikiran');
    await page.getByPlaceholder('Last Name').fill('Biradar');
    await page.getByPlaceholder('name@example.com').fill('sai@gmail.com');

    // Check Action
    await page.getByRole('radio', {name: 'Male', exact: true}).check();


    await page.getByRole('textbox', {name: 'Mobile Number'}).fill('9123431234');


    // Check Action
    await page.getByLabel('Reading').check();

    // Uncheck
    await page.getByLabel('Reading').uncheck();

    // Check Action
    await page.getByLabel('Music').check();


    await page.getByPlaceholder('Current Address').fill('BTM Layout Bengaluru');


    // Click Action
    await page.getByRole('button', {name: 'Submit'}).click();


    // Get By Text
    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();


});