const puppeteer = require('puppeteer');
const entities = require('./entities');
const sleep = require('./utils/sleep');

const targets = ['https://www.amazon.com/dp/B09SVQY3PF'];
const steps = ['clickBuy', 'login', 'submitInfos'];

const main = async () => {
    try {
        const browser = await puppeteer.launch({ args: ['--no-sandbox', '--enable-automation', '--disable-infobars'], devtools: false, headless: false });
        const page = await browser.newPage();
        await page.setViewport({ width: 1500, height: 720 });
        await page.goto(targets[0]);
        for (let step of steps) {
            await entities[step](page);
        };
        console.log('done')
        return browser.close();
    }
    catch (e) {
        console.log(e);
    }
};

const test = async () => {
    for (let i = 0; i < 100; i++) {
        await main();
        console.log('count=>', i);
        await sleep(20000);
    }
};
// test();
main();

