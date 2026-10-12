import {test, expect} from '@playwright/test';

test('Select Tag', async ({page})=>{

    await page.goto('https://the-internet.herokuapp.com/dropdown');

    const dropdown = page.locator('#dropdown');


    //Select By Visible Label
    //await dropdown.selectOption({label: 'Option 2'});


    //Select By value Attribute
    //await dropdown.selectOption({value: '1'});


    // Select By Index
    await dropdown.selectOption({ index: 1});

});