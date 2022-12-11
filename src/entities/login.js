const { selectors: { loginSelectors: { emailInput, continueBtn, passwordInput, submitBtn } }, secrets: { login: { username, password } } } = require('../data');
module.exports = async page => {
    try {
        await page.waitForSelector(emailInput)
        await page.type(emailInput, username, { delay: 80 });
        await page.click(continueBtn);
        await page.waitForSelector(passwordInput);
        await page.type(passwordInput, password, { delay: 80 });
        return await page.click(submitBtn);
    }
    catch (e) {
        throw new Error(e);
    }
};