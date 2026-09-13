import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-proxy-server", "--proxy-bypass-list=*", "--proxy-server=direct://"] });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
page.on("console", (m) => { if (m.text().includes("[DEBUG]")) console.log(Date.now(), m.text()); });
await page.goto("http://localhost:3000/", { waitUntil: "load" });
await page.waitForSelector("h1");
await page.waitForTimeout(500);

const region = page.locator('[aria-label="Project screenshots"]');
const getLabel = () => region.locator("span.truncate").textContent();

console.log(Date.now(), "t0 START");
const t0 = await getLabel();
console.log(Date.now(), "t0 =", t0);
await page.waitForTimeout(2800);
const t1 = await getLabel();
console.log(Date.now(), "t1 =", t1, "changed:", t0 !== t1);

await context.close();
await browser.close();
console.log("done");
