import {test, expect} from '@playwright/test'

test('Without Select', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    const options = await page.$$('#country option')

    for(const option of options)
    {
        let value = await option.textContent();

        if(value.includes('India'))
        {
            await page.selectOption("#country", value);
            break;
        }
    }

});