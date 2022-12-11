module.exports = async function (page, useAddrSel) {
    await page.click(useAddrSel);
    return this['Enter card'](page);
};