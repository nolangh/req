const puppeteer = require("puppeteer");
const getUrl = async () => window.location.href;
const pageUrl = getUrl;

async function scrape(pageUrl) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto(pageUrl);
}

scrape();
