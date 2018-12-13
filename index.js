const puppeteer = require('puppeteer');
var querystring = require('querystring');
var arg = "";
process.argv.forEach(function (val, index, array) {

  if(index==2) {

    arg=val;
  console.log(val);
  }
});

if(arg.length < 1) {
arg = querystring;

}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();


  await page.goto('file:///Users/mz/Desktop/master%20Template/HTML/TaxGuard_v4.html?id='+arg, {waitUntil: 'networkidle2'});
  await page.pdf({path: 'hn.pdf', format: 'A4'});

  await browser.close();
})();
