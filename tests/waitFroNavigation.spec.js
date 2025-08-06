const {test,expect} = require('@playwright/test');

test("Wait for navigation", async function ({page}) {
    //login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Best way to wait for that navigation to complete in Playwright?
    // promise.all - all the actions inside the array will be executed in parallel at the same time
    await Promise.all([
        page.waitForURL(/requestPasswordResetCode/),
        await page.getByText('Forgot your password?').click(),
        
    ]);
    console.log("Navigated to :" + page.url());
    await page.close(); // close the page after test completion
})