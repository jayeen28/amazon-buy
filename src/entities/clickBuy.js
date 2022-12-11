const { selectors: { buySelector } } = require("../data");

module.exports = async page => {
    try {
        return await page.click(buySelector);
    }
    catch (e) {
        throw new Error(e);
    }
};