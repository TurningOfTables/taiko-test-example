const {
  openBrowser,
  into,
  goto,
  click,
  write,
  button,
  $,
  closeBrowser,
  deleteCookies,
} = require("taiko");

describe("Lorem Ipsum Plc - Login", () => {
  beforeAll(async () => {
    await openBrowser();
  });

  beforeEach(async () => {
    await deleteCookies();
    await goto("localhost:3000");
  });

  test("should open the login form correctly", async () => {
    await click("Log in");
    await $(`#login-popup`).exists();
  });

  // I couldn't immediately find a good way to assert that the login-popup did _not_ exist after closing
  test("should close the login form correctly", async () => {
    await click("Log in");
    await !$(`#login-popup`).exists();
    await click("X");
  });

  test("should log in with valid details", async () => {
    await click("Log in");
    await write("User42", into("Username"));
    await write("guest", into("Password"));
    await click(button("Log in"));
    await $(`.form-success-container`).exists();
  });

  test("should not log in with invalid details", async () => {
    await click("Log in");
    await write("User42", into("Username"));
    await write("foo", into("Password"));
    await click(button("Log in"));
    await $(`.form-failure-container`).exists();
  });

  afterAll(async () => {
    await closeBrowser();
  });
});
