const { openBrowser, goto, $, closeBrowser } = require('taiko');
(async () => {
    try {
        await openBrowser();
        await goto("localhost:3000");
        await $(`.nav-container`).exists();
        await $(`#home-link`).exists();
        await $(`#login-link`).exists();
    } catch (error) {
        console.error(error);
    } finally {
        await closeBrowser();
    }
})();
