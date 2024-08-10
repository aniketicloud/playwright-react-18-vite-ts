import { test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('use Red as a default background color', async ({ page }) => {
  await page.waitForSelector('text=#e74c3c');
});

test('use Green as a background color', async ({ page }) => {
  await page.click('text=Green');
  await page.waitForSelector('text=#0ff34c');
});
