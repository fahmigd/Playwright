const {test, expect} = require('@playwright/test');

test.only('Browser Context-Validating Error Login', async ({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    // await page.waitForLoadState('networkidle');
    await page.locator(".inventory_item .inventory_item_description a").last().waitFor();
    const titles = await page.locator(".inventory_item .inventory_item_description a").allTextContents();
    console.log(titles);

});