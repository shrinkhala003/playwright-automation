import { Page } from '@playwright/test';

export async function clickByText(
    page: Page,
    containerSelector: string,
    text: string
) {
    await page.locator(containerSelector, { hasText: text }).click();
}