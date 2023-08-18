import { expect, test } from '@playwright/test';

test('Can find the different components in the app', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('homePageTitle')).toBeVisible();
  await expect(page.getByTestId('homePageLink')).toBeVisible();
  await expect(page.getByTestId('portfolioPageLink')).toBeVisible();
  await expect(page.getByTestId('contactPageLink')).toBeVisible();

  await page.getByTestId('aboutPageLink').click();
  await page.waitForURL('/about');

  await expect(page.url()).toContain('/about');
  await expect(page.getByTestId('pageTitle')).toHaveText('About');

  await page.getByTestId('portfolioPageLink').click();
  await page.waitForURL('/portfolio');

  await expect(page.url()).toContain('/portfolio');
  await expect(page.getByTestId('pageTitle')).toHaveText('Portfolio');

  await page.getByTestId('contactPageLink').click();
  await page.waitForURL('/contact');

  await expect(page.url()).toContain('/contact');
  await expect(page.getByTestId('pageTitle')).toHaveText('Contact');
});
