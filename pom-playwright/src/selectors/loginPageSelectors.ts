export const loginPageSelectors={
    emailField:'#email',
    passwordField:'#password',
    logInButton:"button[type='submit']",
    emailError:'//input[@id="email"]/../following-sibling::p',
    passwordError:'//input[@id="password"]/../following-sibling::p',
    errorToastMsg:'span[class="title text-black text-md"]'
    

}