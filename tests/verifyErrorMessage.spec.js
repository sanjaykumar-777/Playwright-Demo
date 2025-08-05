const {test,expect} = require('@playwright/test');

test.use({viewport: { width: 1280, height: 720 }});  // Set a default viewport for tests

test("Verify Error Message", async function({page}) {
    //login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('textbox', {name: 'Username'}).pressSequentially('Admin',{delay : 100}); // to press sequentially
    await page.getByRole('textbox', { name: 'Password' }).pressSequentially('admin12', {delay:100});
    await page.getByRole('button', { name: 'Login' }).click();
    
    //verify error message
    const errMessage = await page.getByRole('alert').textContent();
    expect(errMessage.includes("Invalid")).toBeTruthy();
    expect(errMessage === "Invalid credentials").toBeTruthy();
    
    console.log("Error Message:", errMessage);
    await page.close(); // close the page after test completion

}
)
    