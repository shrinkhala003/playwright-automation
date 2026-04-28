import { Page } from "@playwright/test";
import { loginPageSelectors } from "../selectors/loginPageSelectors";

export default class LoginPage{
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async fillEmail(email:string) {
        const emailField = this.page.locator(loginPageSelectors.emailField);
        await emailField.fill(email) 
    }
    async fillPassword(password:string) {
        const passwordField = this.page.locator(loginPageSelectors.passwordField);
        await passwordField.fill(password)
    }
    async clickLoginButton() {
        const loginButotn = this.page.locator(loginPageSelectors.logInButton);
        await loginButotn.click();
    }
    async loginToSite(email: string, password: string) {
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.clickLoginButton();
    }
     
    async getEmailErrorMsg(){
        const errorMsg = this.page.locator(loginPageSelectors.emailError);
        return errorMsg.textContent();

    }

    async getPasswordErrorMsg(){
        const msgError = this.page.locator(loginPageSelectors.passwordError);
        return msgError.textContent();
    }

    async getErrorToaster(){
        const toasterError = this.page.locator(loginPageSelectors.errorToastMsg);
        return toasterError.textContent();
    }



}