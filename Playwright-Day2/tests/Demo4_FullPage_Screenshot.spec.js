import {test, expcet} from '@playwright/test'
import path from 'path';


test('Full Page Screenshot', async({page}, testInfo) =>{

    await page.goto('https://www.facebook.com');

    const screenshotPath = testInfo.outputPath('facebook.png');

    await page.screenshot({path: screenshotPath, fullPage: true})

});