import {test, expect} from '@playwright/test';

test('Multiple Tabs Inside One Context', async ({browser})=> {

    const context = await browser.newContext();

    const page1 = await context.newPage();
    const page2 = await context.newPage();

    await page1.goto('https://www.facebook.com');
    await expect(page1).toHaveTitle('Facebook');
    await expect(page1).toHaveURL(/facebook\.com/);

    await page2.goto('https://www.instagram.com');
    await expect(page2).toHaveTitle('Instagram');
    await expect(page2).toHaveURL(/instagram\.com/);


});