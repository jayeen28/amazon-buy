const { selectors: { addrSelectors }, secrets: { buyerInfo: data } } = require('../../data');

module.exports = async function (page) {
    await Promise.all(addrSelectors.map((s) => page.waitForSelector(s)));
    // country select
    await page.click('#address-ui-widgets-countryCode-dropdown-nativeId');
    await page.type('#address-ui-widgets-countryCode-dropdown-nativeId', data.country, { delay: 90 });
    await page.keyboard.press('Enter');
    //
    await page.click('#address-ui-widgets-enterAddressFullName', { clickCount: 3 });
    await page.keyboard.press('Backspace');
    await page.type('#address-ui-widgets-enterAddressFullName', data.fullName, { delay: 80 });
    await page.type('#address-ui-widgets-enterAddressPhoneNumber', data.phone, { delay: 80 });
    await page.type('#address-ui-widgets-enterAddressLine1', data.address1, { delay: 80 });
    await page.type('#address-ui-widgets-enterAddressLine2', data.address2, { delay: 80 });
    await page.type('#address-ui-widgets-enterAddressCity', data.city, { delay: 80 });
    if (await page.$('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId')) {
        await page.select('#address-ui-widgets-enterAddressStateOrRegion-dropdown-nativeId', data.state.short);
    }
    else await page.type('#address-ui-widgets-enterAddressStateOrRegion', data.state.full, { delay: 80 });
    await page.type('#address-ui-widgets-enterAddressPostalCode', data.zipCode, { delay: 80 });
    return this['Choose a shipping address'](page, '#address-ui-widgets-form-submit-button-announce');
};