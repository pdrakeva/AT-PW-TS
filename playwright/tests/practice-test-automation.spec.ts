import { test, expect, Page } from "@playwright/test";

interface inputData {
    username: string;
    password: string;
  }
  
const inputCorrect: inputData = {
    username: "student",
    password: "Password123"
};

const inputIncorrectUser: inputData = {
    username: "incorrectUser",
    password: "Password123"
};

const inputIncorrectPass: inputData = {
    username: "student",
    password: "incorrectPassword"
};

const fillFields = async (page: Page, inputObj: inputData) => {
  //Locate and fill username field
    await test.step("Enter username", async () => {
        const usernameInput = page.locator("#username");
        await expect(usernameInput).toBeVisible();
        await usernameInput.fill(inputObj.username);
        await expect(usernameInput).toHaveValue(inputObj.username);
    });

  //Locate and fill password field
    await test.step("Enter password", async () => {
        const passwordInput = page.locator("#password");
        await expect(passwordInput).toBeVisible();
        await passwordInput.fill(inputObj.password);
        await expect(passwordInput).toHaveValue(inputObj.password);
    });

  //Click Submit button
    await test.step("Click submit button", async () => {
        const submitButton = page.locator("#submit");
        await expect(submitButton).toBeVisible();
        await submitButton.click()
    });
};

test.describe("Practice test automation page", () => {
  test.beforeEach("Navigate to Login page", async ({ page }) => {
    const url = process.env.HOMEWORK_URL as string;
    await page.goto(url);
  });  

  test("Submit form with correct username and password", async ({ page }) => {
    await fillFields(page, inputCorrect);

    await expect(page).toHaveURL(
        "https://practicetestautomation.com/logged-in-successfully/"
    );
    
    const loggedInHeading = page.locator("h1");
    await expect(loggedInHeading).toHaveText("Logged In Successfully");
    
    const logOutButton = page.getByRole("link", { name: 'Log out' });
    await expect(logOutButton).toBeVisible();      
  });

  test("Submit form with incorrect username", async ({ page }) => {
    await fillFields(page, inputIncorrectUser);
      
    const errorMsg = page.locator("#error");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText("Your username is invalid!");   
  });

  test("Submit form with incorrect password", async ({ page }) => {
    await fillFields(page, inputIncorrectPass);
      
    const errorMsg = page.locator("#error");
    await expect(errorMsg).toBeVisible();
    await expect(errorMsg).toHaveText("Your password is invalid!");   
  });
});

