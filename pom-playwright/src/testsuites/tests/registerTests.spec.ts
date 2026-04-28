import {validUser, differentPassword} from "../testData/registerInput";
import { test, expect } from "../../fixtures/fixtures"


test.describe ("Register Tests", () => {
    test.beforeEach(async({page}) => {
        await page.goto("/registration");
    

    })
    test("TC:001 Verify that users can Register with Valid Credentials", async({page, registerPage, dashboardPage}) => {

        await registerPage.registerToSite(validUser.name, validUser.country, validUser.account, validUser.email, validUser.password, validUser.confirmPassword)

        await expect(page).toHaveURL("https://practice.qabrains.com/registration?registered=true");

        const actualHeadingText = await dashboardPage.getSuccessHeading();

       expect(actualHeadingText?.toLowerCase()).toBe("registration successful");

       const actualSuccessMessage = await dashboardPage.getassertSuccessMessage();

       expect(actualSuccessMessage?.toLowerCase()).toBe("congratulations. you have successfully logged in. when you are done click logout below.")

       const actualSuccessToaster = await dashboardPage.getassertSuccessToaster();

       expect(actualSuccessToaster?.toUpperCase()).toBe("REGISTRATION SUCCESSFUL");
    });

    test("TC:002 Verify field validaiton in every missing field", async({registerPage}) => {

        await registerPage.clickSignUpButton();

        const actualEmailValidation = await registerPage.getEmailValidation();

        expect(actualEmailValidation).toBe('Email is a required field');

        const actualNameValidation = await registerPage.getNameValidaiton();

        expect(actualNameValidation).toBe('Name is a required field');

        const actualCountryValidation = await registerPage.getCountryValidation();

        expect(actualCountryValidation).toBe('Country is a required field');

        const actualAccountValidation = await registerPage.getAccountValidation();

        expect(actualAccountValidation).toBe('Account is a required field');

        const actualPasswordValidation = await registerPage.getPasswordValidation();

        expect(actualPasswordValidation).toBe('Password is a required field');

        const actualConfirmPasswordValidation = await registerPage.getConfirmPasswordValidation();

        expect(actualConfirmPasswordValidation).toBe('Confirm Password is required');




        // await page.waitForTimeout(10000)
        
       
        // const  = await registerPage.
    });

    test("TC:003 Verify that password and confirm password should be the same", async({registerPage}) => {

         await registerPage.registerToSite(differentPassword.name, differentPassword.country, differentPassword.account, differentPassword.email, differentPassword.password, differentPassword.confirmPassword)

        const confirmPasswordValidation = await registerPage.getConfirmPasswordValidation();
        expect(confirmPasswordValidation).toBe('Passwords must match')
    });



    })


