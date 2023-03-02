//import puppeteer from "puppeteer";
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
