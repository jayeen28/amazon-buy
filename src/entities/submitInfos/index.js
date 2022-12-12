const { selectors: { shippingSubmits } } = require('../../data');

const actions = {
    'Enter a new shipping address': require('./enterShipping'),
    'Choose a shipping address': require('./chooseShipping'),
    'Enter card': require('./enterCard')
};

module.exports = async page => {
    try {
        await page.waitForNavigation();
        const formType = (await page.evaluate(() => document.querySelector('[role="form"]').querySelector('h3').innerText))?.trim();
        console.log(formType)
        return await actions[formType?.trim()](page, shippingSubmits['2']);
    }
    catch (e) {
        console.log(e)
        throw new Error(e);
    }
}