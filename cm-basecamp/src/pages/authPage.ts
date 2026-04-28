import { Page, Locator, FrameLocator } from "@playwright/test";
import { authPageSelectors } from "../utils/selectors/authPageSelectors";
import { credentials } from "../testSuites/testData/credentials";
import { UserRole } from "../types/roles";

export class AuthPage {
  readonly page: Page;

  readonly googleIframe: FrameLocator;
  readonly signInWithGoogleButton: Locator;
  readonly welcomeHeading: Locator;
  readonly toastMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.googleIframe = page.frameLocator(
      authPageSelectors.button.googleIframe,
    );
    this.signInWithGoogleButton = this.googleIframe.getByRole("button", {
      name: authPageSelectors.button.signInWithGoogleButton,
    });
    this.welcomeHeading = page.getByText(
      authPageSelectors.heading.welcomeHeading,
      { exact: true },
    );
    this.toastMessage = page.getByText(authPageSelectors.heading.toastMessage);
  }

  async open() {
    await this.page.goto("/login");
  }

  async login(role: UserRole = "normalUser") {
    const roleCredentials = credentials[role];

    const [popup] = await Promise.all([
      this.page.waitForEvent("popup"),
      this.signInWithGoogleButton.click(),
    ]);

    
    await popup
      .getByRole("textbox", { name: /email/i })
      .fill(roleCredentials.email);
    await popup.getByRole("button", { name: /next/i }).click();

    
    await popup
      .getByRole("textbox", { name: /password/i })
      .fill(roleCredentials.password);
    await popup.getByRole("button", { name: /next/i }).click();

    await popup.waitForEvent("close");
  }
}
