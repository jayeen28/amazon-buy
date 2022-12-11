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
        return await actions[formType?.trim()](page, '[aria-labelledby="shipToThisAddressButton-announce"]');
    }
    catch (e) {
        throw new Error(e);
    }
}