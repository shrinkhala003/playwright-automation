import { Page } from "@playwright/test";
import { forgotPasswordPageSelectors } from "../selectors/forgotPasswordPageSelectors";

export default class ForgotPasswordPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email:string) {
        const emailField = this.page.locator(forgotPasswordPageSelectors.emailField);
        await emailField.fill(email)
    }

    async clickResetButton() {
        const ResetButton = this.page.locator(forgotPasswordPageSelectors.resetPasswordButton);
        await ResetButton.click();
    }

    async fpToSite( email: string){
        await this.fillEmail(email);
        // await this.clickResetButton();
    }

    async getConfirmationToaster(){
        const confirmToaster = this.page.locator(forgotPasswordPageSelectors.confirmationToaster);
        return confirmToaster.textContent();
    }



}