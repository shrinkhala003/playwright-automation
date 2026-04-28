import { validLogin, invalidLogin} from "../testData/loginInput";
import { test, expect } from "../../fixtures/fixtures";

test.describe ("Login Tests", () => {
    test.beforeEach(async({page}) => {
        await page.goto("/");
       
    }) 

    test("TC:001 Verify that users can Login with Valid Credentials", async({page, loginPage,dashboardPage}) => {
        await loginPage.loginToSite(validLogin.email, validLogin.password);
        await expect(page).toHaveURL("https://practice.qabrains.com/?logged=true");
        const actualHeadingText = await dashboardPage.getSuccessHeading();
        expect(actualHeadingText?.toLowerCase()).toBe("login successful");
    })

    test("TC:002 Verify that Email is a required field", async({page, loginPage}) => {

        await loginPage.fillPassword(validLogin.password);
        await loginPage.clickLoginButton();
        const errorMessage = await loginPage.getEmailErrorMsg();
        expect(errorMessage).toBe('Email is a required field')
    })

    test("TC:003 Verify that Password is a required field", async({page, loginPage}) => {

        await loginPage.fillEmail(validLogin.email);
        await loginPage.clickLoginButton();
        const msgError = await loginPage.getPasswordErrorMsg();
        expect(msgError).toBe('Password is a required field')

    })

    test("TC: 004 Verify that wrong credentials gives an error toaster", async({page, loginPage}) =>{

        await loginPage.fillEmail(invalidLogin.email);
        await loginPage.fillPassword(invalidLogin.password);
        await loginPage.clickLoginButton();
        const toasterError = await loginPage.getErrorToaster();
        expect (toasterError).toBe('Your email and password both are invalid!')

    })

    test("TC: 005 Verify that valid email and invalid password gives an error toaster", async({page, loginPage}) => {
    
        await loginPage.fillEmail(validLogin.email);
        await loginPage.fillPassword(invalidLogin.password);
        await loginPage.clickLoginButton();
        const passwordToaster = await loginPage.getErrorToaster();
        expect (passwordToaster).toBe('Your password is invalid!')
    })

    test("TC: 006 Verify that invalid email and valid password gives an error toaster", async({page, loginPage}) => {

        await loginPage.fillEmail(invalidLogin.email);
        await loginPage.fillPassword(validLogin.password);
        await loginPage.clickLoginButton();
        const emailToaster = await loginPage.getErrorToaster();
        expect (emailToaster).toBe('Your email is invalid!')
    })


})