const {test, expect} = require('@playwright/test');

test.only('Browser Context Playwright Test', async ({browser})=>
{
    //chrome - plugins / cookies
    const context = await browser.newContext();
    const page = await context.newPage();

    const userName = page.locator("#username");
    const passWord = page.locator("[type='password']");
    const signIn = page.locator("#signInBtn");
    const toast = page.locator("[style*='block']");
    const cardTitles = page.locator(".card-body a");


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");  
    
    //get title - assertion
    console.log(await page.title());

    //css
    await userName.fill("learning");
    await passWord.fill("fahmi");
    await signIn.click();
    console.log(await toast.textContent());
    await expect (toast).toContainText("Incorrect username/password.");

    //type - fill
    await userName.fill("");
    await userName.fill("rahulshettyacademy");
    await passWord.fill("");
    await passWord.fill("learning");
    await signIn.click();
    console.log(await cardTitles.first().textContent());
    console.log(await cardTitles.nth(1).textContent());

    const allTitles = await cardTitles.allTextContents();
    console.log(allTitles);

});

test('Page Playwright Test', async ({page})=>
{
    //go to google page
    await page.goto("https://www.google.com/");
    
    //get title - assertion
    console.log(await page.title());
    await expect(page).toHaveTitle("Google")


});