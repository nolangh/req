/** This is for chrome exstentions from puppeteers website
import puppeteer from 'puppeteer';
import path from 'path';

(async () => {
  const pathToExtension = path.join(process.cwd(), 'my-extension');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  const backgroundPageTarget = await browser.waitForTarget(
    target => target.type() === 'background_page'
  );
  const backgroundPage = await backgroundPageTarget.page();
  // Test the background page as you would any other page.
  await browser.close();
})();
*/

import puppeteer from "puppeteer";
//const puppeteer = require("puppeteer");
const button = document.getElementById("testbutton");

async function testFunction() {
	console.log(currentUrl);
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(currentUrl);
	return currentUrl;
}

const currentUrl = () => {
	const url = window.location.href;
	console.log(url);
	return url;
};

function test() {
	let why = "please just show up";
	console.log(why);
}

button.addEventListener("click", test);
window.addEventListener("load", currentUrl);
