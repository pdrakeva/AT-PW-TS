import { test, expect, Page } from "@playwright/test";
import path from "path";

interface Results {
  username: string;
  password: string;
  comments: string;
  dropdownValue: string;
}

const results: Results = {
  username: "testUser",
  password: "testPassword",
  comments: "test area field",
  dropdownValue: "dd2",
};

const fillFields = async (page: Page, resultsObj: Results) => {
  //Locate and fill username field
  await test.step("Enter username", async () => {
    const usernameInput = page.locator("xpath=//input[@name='username']");
    await expect(usernameInput).toBeVisible();
    await usernameInput.fill(resultsObj.username);
    await expect(usernameInput).toHaveValue(resultsObj.username);
  });

  //Locate and fill password field
  await test.step("Enter password", async () => {
    const passwordInput = page.locator("xpath=//input[@name='password']");
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill(resultsObj.password);
    await expect(passwordInput).toHaveValue(resultsObj.password);
  });

  //Locate and fill comments field
  await test.step("Fill comments field", async () => {
    const textareaInput = page.locator("xpath=//textarea[@name='comments']");
    await expect(textareaInput).toBeVisible();
    await textareaInput.fill(resultsObj.comments);
    await expect(textareaInput).toHaveValue(resultsObj.comments);
  });

  //Locate and check the checkbox
  await test.step("Select checkbox value", async () => {
    const checkboxEl = page.locator("xpath=//input[@value='cb2']");
    await expect(checkboxEl).toBeVisible();
    await checkboxEl.check();
    await expect(checkboxEl).toBeChecked();
  });

  //Locate and check the radio buttons
  await test.step("Select radio button value", async () => {
    const radioEl = page.locator("xpath=//input[@value='rd3']");
    await expect(radioEl).toBeVisible();
    await radioEl.check();
    await expect(radioEl).toBeChecked();
  });

  //Locate and select an option from dropdown
  await test.step("Select dropdown value", async () => {
    const dropdownEl = page.locator("xpath=//select[@name='dropdown']");
    await expect(dropdownEl).toBeVisible();
    await dropdownEl.selectOption(resultsObj.dropdownValue);
    await expect(dropdownEl).toHaveValue(resultsObj.dropdownValue);
  });

  //Locate upload button and upload a file
  await test.step("Upload file", async () => {
    const uploadBtn = page.locator('xpath=//input[@type="file"]');
    const filePath = path.resolve(__dirname, "./test.txt");
    await expect(uploadBtn).toBeVisible();
    await uploadBtn.setInputFiles(filePath);
  });
};

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

  test("Reset form", async ({ page }) => {
    const cancelBtn = page.locator("xpath=//input[@type='reset']");
    await expect(cancelBtn).toBeVisible();

    await fillFields(page, results);

    await cancelBtn.click();

    await expect(page.locator("xpath=//input[@name='username']")).toHaveValue(
      ""
    );
    await expect(page.locator("xpath=//input[@value='cb3']")).toBeChecked();
  });

  test("Submit form", async ({ page }) => {
    const submitBtn = page.locator("xpath=//input[@type='submit']");
    await expect(submitBtn).toBeVisible();

    await fillFields(page, results);

    await submitBtn.click();
    await expect(page).toHaveURL(
      "https://testpages.herokuapp.com/styled/the_form_processor.php"
    );

    const usernameVal = page.locator("xpath=//li[@id='_valueusername']");
    await expect(usernameVal).toHaveText(results.username);

    const dropdownVal = page.locator("xpath=//li[@id='_valuedropdown']");
    await expect(dropdownVal).toHaveText(results.dropdownValue);
  });
});
