import {test, expect} from '@playwright/test'
import path from 'path';

test('Viewport Screenshot', async ({page}, testInfo) =>{

    await page.goto('https://www.amazon.in');

    await expect(page).toHaveTitle('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
    
    // As Screenshot is taking loading lets ass wait method
    const waitUntil = page.locator("//div[@class='nav-logo-base nav-sprite']")
    await expect(waitUntil).toBeVisible();

    const screenshotPath = testInfo.outputPath('amazon.png');

    await page.screenshot({path: screenshotPath})
});