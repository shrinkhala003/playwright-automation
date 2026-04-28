import { expect } from '@playwright/test';
import { test as setup } from '../../fixtures/base.fixture';
import { UserRole } from '../../types/roles';
import path from 'path';

// derive role from project name e.g. "setup:admin" → "admin"
setup(`authenticate session`, async ({ authPage, dashboardPage, page }, testInfo) => {

    const role = testInfo.project.name.replace('setup:', '') as UserRole;
    const authFile = path.resolve(__dirname, `../../../auth/${role}.json`);

    await authPage.open();
    await expect(authPage.welcomeHeading).toBeVisible();

    await authPage.login(role);

    await expect(authPage.toastMessage).toBeVisible();
    await expect(dashboardPage.dashboardHeading).toBeVisible();

    await page.context().storageState({ path: authFile });
});

