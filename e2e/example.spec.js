// @ts-check
import {test, expect} from "@playwright/test";
import {getByRole} from "@testing-library/react";

test("has title", async ({page}) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({page}) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", {name: "Get started"}).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", {name: "Installation"})).toBeVisible();
});

test("copyright", async ({page}) => {
  await page.goto("https://playwright.dev/");

  const copyrightDiv = await page.locator("div.footer__copyright");
  await expect(copyrightDiv).toHaveText(/Copyright © 2025 Microsoft/);
});

test("logo quantity", async ({page}) => {
  await page.goto("https://playwright.dev/");

  const logolist = await page.locator('ul[class^="logosList_"]');
  const listitem = await logolist.locator("li");
  await expect(listitem).toHaveCount(9);
});

test("text h2", async ({page}) => {
  await page.goto("https://playwright.dev/docs/intro");

  const text = await page.locator("h2#installing-playwright");
  await expect(text).toHaveText("Installing Playwright");
});

test("navigate", async ({page}) => {
  await page.goto("https://playwright.dev/");

  await page.getByRole("link", {name: "Docs"}).click();

  const text = await page.locator("h2#installing-playwright");
  await expect(text).toHaveText("Installing Playwright");
});
