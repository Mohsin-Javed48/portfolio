import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-proxy-server", "--proxy-bypass-list=*", "--proxy-server=direct://"] });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await context.newPage();
page.on("console", (m) => console.log("[browser]", m.text()));
page.on("pageerror", (e) => console.log("[pageerror]", e.stack || e));
await page.goto("http://localhost:3000/", { waitUntil: "load" });
await page.waitForSelector("h1");

await page.evaluate(() => {
  window.__tick = 0;
  const id = setInterval(() => {
    window.__tick++;
    console.log("tick", window.__tick);
  }, 2500);
  window.__stopTick = () => clearInterval(id);
});

await page.waitForTimeout(9000);
await page.evaluate(() => window.__stopTick());
await context.close();
await browser.close();
console.log("done");
