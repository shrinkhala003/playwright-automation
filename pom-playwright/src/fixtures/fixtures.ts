import { test as baseTest } from "@playwright/test"; //rename test to base
import LoginPage from "../pages/loginPage";
import DashboardPage from "../pages/dashboardPage";
import RegisterPage from "../pages/registerPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage";


type pages = {
    loginPage: LoginPage; //fixtures and their types
    dashboardPage: DashboardPage;
    registerPage: RegisterPage;
    forgotPasswordPage: ForgotPasswordPage;
};

export const testPages = baseTest.extend<pages>({
//Taking Playwright’s default test ,Extending it,Adding our own fixtures
    loginPage: async ({ page }, use ) => { //use is used to pass the fixture to the test.
        const loginPage = new LoginPage(page);
    await use(loginPage); //Here is the loginPage object. Give it to the test.
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },

  forgotPasswordPage: async ({ page }, use) => {
    const forgotPasswordPage = new ForgotPasswordPage(page);
    await use(forgotPasswordPage);
  }
});

export const test = testPages;
export const expect = testPages.expect;
