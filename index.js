const puppeteer = require('puppeteer');

(async () => {
  for(let i = 0;i < process.argv.length; i++){
    console.log("argv[" + i + "] = " + process.argv[i]);
  }
  const url = process.argv[2];
  const count = Number(process.argv[3]) || 1;
  console.log('Info:');
  console.log('count', count);
  console.log('url', url);
  for (let i = 0; i < count; i++) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    await page.click('button[aria-label="heart"]')
    console.log(i, 'clicked');

    await browser.close();
  }
})();
