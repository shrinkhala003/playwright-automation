import { Page } from "@playwright/test";
import { dashboardPageSelectors } from "../selectors/dashboardPageSelectors";

export default class DashboardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async getSuccessHeading(){
    const headingText = this.page.locator(dashboardPageSelectors.headerSucces);
    return headingText.textContent();
  }

  async getassertSuccessMessage() {
    const message = this.page.locator(
      dashboardPageSelectors.successMessage
    );
    return message.textContent();
  }

  async getassertSuccessToaster() {
    const toaster = this.page.locator(
      dashboardPageSelectors.successToaster
    );
    return toaster.textContent();
  }
}