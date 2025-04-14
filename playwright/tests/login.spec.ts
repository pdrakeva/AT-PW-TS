import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

let loginPage;

test.describe("Login Page", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    loginPage = new LoginPage(page);

    await loginPage.goto();
    //await page.goto("https://www.saucedemo.com/");
  });

  test("Login Successfully", async () => {
    await loginPage.login("standard_user", "secret_sauce");
    //await page.locator("#user-name").fill("standard_user");
    //await page.locator("#password").fill("secret_sauce");
    //await page.locator("#login-button").click();

    await expect(loginPage.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html"
    );
  });

  test("Login Error Locked User", async () => {
    await loginPage.login("locked_out_user", "secret_sauce");
    //await page.locator("#user-name").fill("locked_out_user");
    //await page.locator("#password").fill("secret_sauce");
    //await page.locator("#login-button").click();

    await loginPage.loginErrorVisible();
    //const errorMessage = page.locator('[data-test="error"]');
    //await expect(errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Sorry, this user has been locked out."
    );
  });

  test("Login Error", async () => {
    await loginPage.login("invalid_user", "wrong_password");
    //await page.locator("#user-name").fill("invalid_user");
    //await page.locator("#password").fill("wrong_password");
    //await page.locator("#login-button").click();

    await loginPage.loginErrorVisible();
    //const errorMessage = page.locator('[data-test="error"]');
    //await expect(errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      "Username and password do not match"
    );
  });
});
