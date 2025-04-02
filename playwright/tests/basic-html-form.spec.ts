import { test, expect } from "@playwright/test";

// Wrap all tests within a describe block to improve structure.
// Add a beforeEach hook to avoid repeating page.goto() in every test.
// Add the web form link as an environment variable and use it in the beforeEach hook (https://testpages.herokuapp.com/styled/basic-html-form-test.html).

test.describe("Playwright home page testing", () => {
  test.beforeEach("Navigate to Home page", async ({ page }) => {
    const url = process.env.URL_HTML_FORM as string;
    await page.goto(url);
  });

  test("Has h1 title", async ({ page }) => {
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Basic HTML Form Example");
  });

  test("Test username field", async ({ page }) => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill("testUser");
    await expect(usernameInput).toHaveValue("testUser");
  });

  // Locate the Password field, fill it with a test value, and validate the input.
  test("Test password field", async ({ page }) => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("testPassword");
    await expect(passwordInput).toHaveValue("testPassword");
  });

  // Locate the TextArea field, fill it with a test value, and validate the input.
  test("Test textarea field", async ({ page }) => {
    const textareaInput = page.locator("xpath=//textarea[@name='comments']");
    await expect(textareaInput).toBeVisible();
    await textareaInput.fill("test area field");
    await expect(textareaInput).toHaveValue("test area field");
  });

  test("Test checkbox selection", async ({ page }) => {
    const checkboxEl = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  // After the checkbox test, add a similar test for Radio Items.
  test("Test radio items selection", async ({ page }) => {
    const radioEl = page.locator("xpath=//input[@value='rd3']");
    await expect(radioEl).toBeVisible();
    await radioEl.check();
    await expect(radioEl).toBeChecked();
  });

  test("Select dropdown option", async ({ page }) => {
    const dropdownEl = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdownEl).toBeVisible();
    await dropdownEl.selectOption("dd2");
    await expect(dropdownEl).toHaveValue("dd2");
  });

  // Finally, submit the form by locating the input with type="submit" and triggering a click action.
  test("Test submit button", async ({ page }) => {
    const submitButton = page.locator("xpath=//input[@value='submit']");
    await expect(submitButton).toBeVisible();
    await submitButton.click();
    
    const title = page.locator("xpath=//h1");
    await expect(title).toHaveText("Processed Form Details");
  });
});
