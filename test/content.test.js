const { openBrowser, goto, $, closeBrowser, deleteCookies } = require("taiko");

describe("Lorem Ipsum Plc - Page Content", () => {
  beforeAll(async () => {
    await openBrowser();
  });

  beforeEach(async () => {
    await deleteCookies();
    await goto("localhost:3000");
  });

  test("should display the nav bar", async () => {
    await $(`.nav-container`).exists();
    await $(`#home-link`).exists();
    await $(`#login-link`).exists();
  });

  test("should display the header", async () => {
    await $(`.header-section`).exists();
    await $(`#company-name`).exists();
  });

  test("should display the intro", async () => {
    await $(`#intro`).exists();
    await $(`#intro-heading`).exists();
  });

  test("should display the products", async () => {
    await $(`#products`).exists();
    await $(`#products-heading`).exists();
  });

  test("should display the testimonials", async () => {
    await $(`#testimonials`).exists();
    await $(`#testimonials-heading`).exists();
  });

  test("should display the contact info", async () => {
    await $(`#contact`).exists();
    await $(`#contact-heading`).exists();
  });

  afterAll(async () => {
    await closeBrowser();
  });
});
