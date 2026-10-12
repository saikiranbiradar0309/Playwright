import {test, expect} from '@playwright/test'

test('User Registration', async ({page})=>{

    await page.goto('https://copyright.gov.in/UserRegistration/frmNewUser.aspx');

    const title = page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlTitle']");

    await title.selectOption({value: '28'});

    await page.locator('#ctl00_ContentPlaceHolder1_txtFName').fill('Sai');

    await page.locator("//input[@name='ctl00$ContentPlaceHolder1$txtAddress']").fill('BTM Layout');

    await page.locator("//input[@id='ctl00_ContentPlaceHolder1_txtCity']").fill('Bengaluru');

    const country = page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlCountry']");

    country.selectOption({value: '80'});


    const state = page.locator("//select[@name='ctl00$ContentPlaceHolder1$ddlState']");
    state.selectOption({value: '26'});




});