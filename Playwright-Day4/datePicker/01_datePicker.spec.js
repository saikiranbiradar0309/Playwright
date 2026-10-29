import{test, expect} from '@playwright/test'

test('Date Picker Demo 1', async ({page})=>{

    //Specify the URL of the application
    await page.goto('https://testautomationpractice.blogspot.com/');


    // Here we're directly specifying date
    await page.fill('#datepicker','10/29/2026');


    await page.waitForTimeout(4000);

})