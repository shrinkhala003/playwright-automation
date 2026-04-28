import { Page, Locator } from "@playwright/test";
import { dashboardSelectors } from "../utils/selectors/dashboardSelectors";

export class DashboardPage {
    readonly page: Page

    readonly dashboardHeading: Locator
    readonly dashboard: Locator
    readonly leaves: Locator
    readonly workFromHome: Locator
    readonly employees: Locator
    readonly projects: Locator
    readonly settings: Locator
    readonly logout: Locator

    constructor(page: Page){
        this.page = page
        this.dashboardHeading = page.getByRole('heading', {name: dashboardSelectors.heading.dashboardHeading})
        this.dashboard = page.getByRole('link', { name: dashboardSelectors.sidebar.dashboard })
        this.leaves = page.getByRole('link', { name: dashboardSelectors.sidebar.leaves })
        this.workFromHome = page.getByRole('link', { name: dashboardSelectors.sidebar.workFromHome })
        this.employees = page.getByRole('link', { name: dashboardSelectors.sidebar.employees })
        this.projects = page.getByRole('link', { name: dashboardSelectors.sidebar.projects })
        this.settings = page.getByRole('link', { name: dashboardSelectors.sidebar.settings })
        this.logout = page.getByRole('link', { name: dashboardSelectors.sidebar.logout })
    }
}