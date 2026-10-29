import{test, expect} from '@playwright/test'

test('Date Picker with Logic Demo2', async ({page})=>{


    await page.goto('https://testautomationpractice.blogspot.com/');

    // First we need to define which date, month and year we want to define
    const year = "2025";
    const month = "September";
    const date = "13";


    // Second we need to click on date(calendar) element and then it opens calendar
    await page.click('#datepicker')


    // Third we need to capture actual date and month and year which shows when we open 
    // a calendar and then we need to compare it with our expected(the one which we defined
    // above). if it doesnot match then we need to click forward or backward

    // Here we use while loop
    // As soon as the actual and expected dates match then we exit from the loop


    while(true)
    {
        // capture current month and year
        const currentYear =  await page.locator('.ui-datepicker-year').textContent()  // For class selector we define with .
        const currentMonth = await page.locator('.ui-datepicker-month').textContent()


        // Now compare the capture year and month with our expected(defined) month and year
        if(currentYear == year && currentMonth == month)
        {
            // If both are equal it will break the loop
                        break;
        }

        // But if they are not equal then click on forward or backward as per requirement
        await page.locator('[title="Prev"]').click();
    }


    // Like here the calendar will move to expected date 

    // Now we need to select the date

    // Here we have 2 diff approaches

    // a. We can capture all the dates using array, then we repeat one by one
    //      and whichever is matching we will click on it

    /*
    //First click on a date and then Find a locator which is common in all the dates
    const dates = await page.$$("//td[@data-handler='selectDay']");


    // date selection using loop
    for(const dt of dates)
    {
        if(await dt.textContent()==date)
        {
            await dt.click();
            break;
        }
    }

    */


    // b. And another is we can directlty write a xpath locator and we directly
    //      Select the date

    // Click on any date and you can see there is a class attribute and find the text
    // which contains ur date 

    // Here we need to parameterize the date instead of 13 i write something like
    // ${date} and instead of using double qoutes use tilt
    await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();

    await page.waitForTimeout(4000);
})