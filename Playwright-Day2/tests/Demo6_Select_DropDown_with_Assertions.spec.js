import {test, expect} from '@playwright/test';

test('Select Dropdown with Assertions', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    // 1. Check Number of options in dropdown           Approach 1
    //const options = page.locator('#country option');
    //await expect(options).toHaveCount(10);


    // 2. Check Number of options in dropdown           Approach 2
    //const options = await page.$$('#country option');         // It will capture in the form of Array
    //console.log("Number of Options: ", options.length);
    //await expect(options.length).toBe(10);



    // 3. Check presence of value in the dropdown       Approach 1
    //const content = await page.locator('#country').textContent();
    //console.log(content);
    //expect(content.includes('India')).toBeTruthy();
    //expect(content.includes('XYZ')).toBeTruthy();           // It will fail Because XYZ is not in country




    // 4. Check presence of value in the dropdown       Approach 2.  Looping
    const options = await page.$$('#country option');
    let status = false;


    for(const option of options)
    {
        //console.log(await option.textContent());   Approach 3

        // Approach 4
        let value = await option.textContent();

        if(value.includes('France'))
        {
            status=true;
            break;
        }
    }


    expect(status).toBeTruthy();

});