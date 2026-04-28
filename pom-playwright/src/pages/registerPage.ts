import { Page } from "@playwright/test";
import { registerPageSelectors } from "../selectors/registerPageSelectors";

export default class RegisterPage {
    private page: Page
    constructor(page: Page) {
        this.page = page;
    }
     async fillName(name:string) {
        const nameField = this.page.locator(registerPageSelectors.nameField);
        await nameField.fill(name)
     }
     async selectCountry(country:string) {
        const countryField = this.page.locator(registerPageSelectors.countryField);
        await countryField.selectOption(country)
     }
     async selectAccountType(accountType:string) {
        const accountField = this.page.locator(registerPageSelectors.accountField);
        await accountField.selectOption(accountType)
     }
     async fillEmail(email:string) {
        const emailField = this.page.locator(registerPageSelectors.emailField);
        await emailField.fill(email)
     }
     async fillPassword(password:string) {
        const passwordField = this.page.locator(registerPageSelectors.passwordField);
        await passwordField.fill(password)
     }
      async fillConfirmPassword(confirmPassword:string) {
        const confirmPasswordField = this.page.locator(registerPageSelectors.confirmPasswordField);
        await confirmPasswordField.fill(confirmPassword)
     }
       async clickSignUpButton() {
        const signUpButton = this.page.locator(registerPageSelectors.signUpButton);
        await signUpButton.click();
    }
     
     async registerToSite(name: string, country: string, account: string, email: string, password: string, confirmPassword: string) {
        await this.fillName(name);
        await this.selectCountry(country);
        await this.selectAccountType(account);
        await this.fillEmail(email);
        await this.fillPassword(password);
        await this.fillConfirmPassword(confirmPassword)
        await this.clickSignUpButton()
     
    }

     async getEmailValidation(){
            const emailValidation = this.page.locator(registerPageSelectors.emailFieldValidation);
            return emailValidation.textContent();
        }

      async getNameValidaiton(){
         const nameValidation = this.page.locator(registerPageSelectors.nameFieldValidation);
         return nameValidation.textContent();
      }

      async getCountryValidation(){
         const countryValidation = this.page.locator(registerPageSelectors.countryFieldValidation);
         return countryValidation.textContent();
      }

      async getAccountValidation(){
         const accountValidaiton = this.page.locator(registerPageSelectors.accountFieldValidation);
         return accountValidaiton.textContent();

      }

      async getPasswordValidation(){
         const passwordValidation = this.page.locator(registerPageSelectors.passwordFieldValidation);
         return passwordValidation.textContent();
      }

      async getConfirmPasswordValidation(){
         const confirmPasswordValidation = this.page.locator(registerPageSelectors.confirmPasswordFieldValidation);
         return confirmPasswordValidation.textContent();
      }









}