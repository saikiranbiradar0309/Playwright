import {test, expect} from '@playwright/test'

test('Handling Timeout Demo1', async ({page})=>{


    await page.goto('https://playground.bondaracademy.com/pages/iot-dashboard');

    await page.getByText('Formss').click();


    await page.waitForTimeout(5000);


    // Here you will get
    // Test timeout of 30000ms exceeded.
    // because intentionally we added wrong locator here getByText('Formss')
})