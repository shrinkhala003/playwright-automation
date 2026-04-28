import { test as base, Browser } from '@playwright/test';
import { AuthPage } from '../pages/authPage';
import { DashboardPage } from '../pages/dashboardPage';

type Fixtures = {
    authPage: AuthPage
    dashboardPage: DashboardPage
    // role-specific authenticated pages
    normalUserPage: DashboardPage
    adminPage: DashboardPage
    superAdminPage: DashboardPage
    supervisorPage: DashboardPage
}

export const test = base.extend<Fixtures>({
    authPage: async ({ page }, use) => {
        await use(new AuthPage(page))
    },

    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page))
    },

    normalUserPage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: './auth/normalUser.json' })
        const page = await context.newPage()
        await use(new DashboardPage(page))
        await context.close()
    },

    adminPage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: './auth/admin.json' })
        const page = await context.newPage()
        await use(new DashboardPage(page))
        await context.close()
    },

    superAdminPage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: './auth/superAdmin.json' })
        const page = await context.newPage()
        await use(new DashboardPage(page))
        await context.close()
    },

    supervisorPage: async ({ browser }, use) => {
        const context = await browser.newContext({ storageState: './auth/supervisor.json' })
        const page = await context.newPage()
        await use(new DashboardPage(page))
        await context.close()
    },
})

export const expect = test.expect