const { selectors: { paymentSelectors }, secrets: { paymentValues } } = require('../../data');

module.exports = async function (page) {
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
    await page.waitForSelector('#apx-add-credit-card-action-test-id');
    await page.click('#apx-add-credit-card-action-test-id');
    await page.waitForSelector('iframe');
    const frame = await page.frames().find(f => f._name?.startsWith('ApxSecureIframe'));
    if (!frame) console.log('Frame not found');
    // console.log(frame)
    await frame.waitForNavigation({ waitUntil: 'load' });
    for (let v of Object.values(paymentSelectors)) {
        await frame.waitForSelector(v);
    }
    for (let k in paymentSelectors) {
        if (k.startsWith('add')) {
            return await frame.click(paymentSelectors[k]);
        } else await frame[k.startsWith('select') ? 'select' : 'type'](paymentSelectors[k], paymentValues[k]);
    }
};