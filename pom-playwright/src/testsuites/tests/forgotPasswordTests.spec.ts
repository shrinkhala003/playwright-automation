import { validEmail } from "../testData/forgotPasswordInput";
import {test, expect} from "../../fixtures/fixtures"

test.describe ("Forgot Password Tests", () => {

    test("TC:001 Verify that valid email gives a confirmation toaster and message", async({page, forgotPasswordPage}) => {

        await page.goto("/forgot-password");

        await forgotPasswordPage.fpToSite(validEmail.email);
        await forgotPasswordPage.clickResetButton()

        await expect(page).toHaveURL("https://practice.qabrains.com/forgot-password?forgot=true")

        const headingText = await forgotPasswordPage.getConfirmationToaster();

        expect(headingText).toBe("Password is reset successfully.")
    })
})