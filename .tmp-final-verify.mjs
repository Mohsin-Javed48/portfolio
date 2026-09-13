import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-proxy-server", "--proxy-bypass-list=*", "--proxy-server=direct://"] });
const errors = [];

function getActiveSrc(page) {
  return page.evaluate(() => {
    const region = document.querySelector('[aria-label="Project screenshots"]');
    const regionRect = region.getBoundingClientRect();
    const centerX = regionRect.left + regionRect.width / 2;
    const imgs = Array.from(region.querySelectorAll("img"));
    let best = null;
    let bestDist = Infinity;
    for (const img of imgs) {
      const r = img.getBoundingClientRect();
      const dist = Math.abs(r.left + r.width / 2 - centerX);
      if (dist < bestDist) {
        bestDist = dist;
        best = img;
      }
    }
    return best ? new URL(best.src).searchParams.get("url") : null;
  });
}

async function ctx(width, height, extra = {}) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2, hasTouch: width < 900, ...extra });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(`[${width}px pageerror] ${e.stack || e}`));
  page.on("console", (m) => { if (m.type() === "error" && !m.text().includes("webpack-hmr")) errors.push(`[${width}px console] ${m.text()}`); });
  await page.goto("http://localhost:3000/", { waitUntil: "load" });
  await page.waitForSelector("h1");
  await page.waitForTimeout(500);
  return { context, page };
}

// Desktop screenshot + overflow
{
  const { context, page } = await ctx(1440, 900);
  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-v-desktop.png" });
  console.log("desktop overflow:", await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth));
  await context.close();
}

// Autoplay progression across many ticks using image src as ground truth
{
  const { context, page } = await ctx(1440, 900);
  const seen = [];
  for (let i = 0; i < 11; i++) {
    seen.push(await getActiveSrc(page));
    await page.waitForTimeout(2500);
  }
  console.log("src sequence over 11 ticks:\n", seen.join("\n "));
  const uniqueCount = new Set(seen).size;
  console.log("unique slides seen:", uniqueCount, "(should reach all 9 and loop back)");
  console.log("loops back to first after 9 (seen[0] === seen[9]):", seen[0] === seen[9]);
  await context.close();
}

// Reduced motion: should never advance
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "load" });
  await page.waitForSelector("h1");
  const before = await getActiveSrc(page);
  await page.waitForTimeout(3200);
  const after = await getActiveSrc(page);
  console.log("reduced-motion: no advance (should be true):", before === after);
  await context.close();
}

// Peek-tile click + dot click, using src as signal
{
  const { context, page } = await ctx(1440, 900);
  const before = await getActiveSrc(page);
  const region = page.locator('[aria-label="Project screenshots"]');
  const box = await region.boundingBox();
  await page.mouse.click(box.x + box.width * 0.94, box.y + box.height * 0.4);
  await page.waitForTimeout(900);
  const afterPeekClick = await getActiveSrc(page);
  console.log("peek-click advanced:", before !== afterPeekClick, before, "->", afterPeekClick);

  const dots = page.locator('[aria-label="Project screenshots"] button[aria-label^="Show"]');
  await dots.nth(6).click();
  await page.waitForTimeout(900);
  const afterDot = await getActiveSrc(page);
  console.log("dot#7 click landed on xpos-3-menu:", afterDot);
  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-v-after-dot.png" });
  await context.close();
}

console.log("ERRORS:", JSON.stringify(errors, null, 2));
await browser.close();
console.log("done");
