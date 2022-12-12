const { selectors: { shippingSelectors, shippingSubmits }, secrets: { buyerInfo: data } } = require('../../data');

module.exports = async function (page) {
    await Promise.all(Object.values(shippingSelectors).map((s) => page.waitForSelector(s)));
    // country select
    await page.click(shippingSelectors.countryDrop);
    await page.type(shippingSelectors.countryDrop, data.country, { delay: 90 });
    await page.keyboard.press('Enter');
    //
    await page.click(shippingSelectors.fullName, { clickCount: 3 });
    await page.keyboard.press('Backspace');
    await page.type(shippingSelectors.fullName, data.fullName, { delay: 80 });
    await page.type(shippingSelectors.phone, data.phone, { delay: 80 });
    await page.type(shippingSelectors.addr1, data.addr1, { delay: 80 });
    await page.type(shippingSelectors.addr2, data.addr2, { delay: 80 });
    await page.type(shippingSelectors.city, data.city, { delay: 80 });
    if (await page.$(shippingSelectors.regDrop)) {
        await page.select(shippingSelectors.regDrop, data.state.short);
    }
    else await page.type(shippingSelectors.regInput, data.state.full, { delay: 80 });
    await page.type(shippingSelectors.postalCode, data.zipCode, { delay: 80 });
    return this['Choose a shipping address'](page, shippingSubmits['1']);
};