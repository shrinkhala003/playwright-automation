import { test, expect } from '../../fixtures/base.fixture';

test.describe('Authentication Tests', () => {
  
  test("TC-LOG-001 - Verify user can successfully log in with google login", async({
    authPage,
    dashboardPage}) => {
    await authPage.open()
    await expect(authPage.welcomeHeading).toBeVisible();
    await authPage.login();
    await expect(authPage.toastMessage).toBeVisible();
    await expect(dashboardPage.dashboardHeading).toBeVisible();
  })
});
