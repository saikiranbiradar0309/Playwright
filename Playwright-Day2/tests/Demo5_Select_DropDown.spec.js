import {test, expect} from '@playwright/test';

test('Select Dropdown', async ({page})=>{

    page.goto('https://testautomationpractice.blogspot.com/');


    // 1. Select By Label 
    //await page.locator('#country').selectOption({label: 'India'});



    // 2. Select By Visible Text
    //await page.locator('#country').selectOption('Japan');


    // 3. Select By Value
    //await page.locator('#country').selectOption({value: 'canada'});


    // 4. Select By Index
    //await page.locator('#country').selectOption({index: 3})


    // Shortcut
    // Without page.locator
    await page.selectOption("#country", "France");


    // Added wait just to check with it selected correct
    await page.waitForTimeout(5000);        // Not a correct way use Assertions instead

});