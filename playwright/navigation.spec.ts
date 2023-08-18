import { expect, test } from '@playwright/test';

test('Can find the different components in the app', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('homePageTitle')).toBeVisible();
  await expect(page.getByTestId('homePageLink')).toBeVisible();
  await expect(page.getByTestId('portfolioPageLink')).toBeVisible();
  await expect(page.getByTestId('contactPageLink')).toBeVisible();

  await Promise.all([
    page.getByTestId('aboutPageLink').click(),
    page.waitForNavigation(),
  ]);
  await expect(page.url()).toContain('/about');
  await expect(page.getByTestId('pageTitle')).toHaveText('About');

  await Promise.all([
    page.getByTestId('portfolioPageLink').click(),
    page.waitForNavigation(),
  ]);
  await expect(page.url()).toContain('/portfolio');
  await expect(page.getByTestId('pageTitle')).toHaveText('Portfolio');

  await Promise.all([
    page.getByTestId('contactPageLink').click(),
    page.waitForNavigation(),
  ]);
  await expect(page.url()).toContain('/contact');
  await expect(page.getByTestId('pageTitle')).toHaveText('Contact');
});
