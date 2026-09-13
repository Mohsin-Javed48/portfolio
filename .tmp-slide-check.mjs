import { chromium } from "playwright";
const browser = await chromium.launch({ args: ["--no-proxy-server", "--proxy-bypass-list=*", "--proxy-server=direct://"] });
const errors = [];

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

// Desktop screenshot + overflow check
{
  const { context, page } = await ctx(1440, 900);
  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-h-desktop.png" });
  console.log("desktop overflow:", await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth));
  await context.close();
}

// Mobile
{
  const { context, page } = await ctx(390, 844);
  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-h-mobile.png" });
  console.log("mobile overflow:", await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth));
  await context.close();
}

// Tablet
{
  const { context, page } = await ctx(834, 1112);
  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-h-tablet.png" });
  console.log("tablet overflow:", await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth));
  await context.close();
}

// Autoplay + infinite loop test (desktop)
{
  const { context, page } = await ctx(1440, 900);
  const region = page.locator('[aria-label="Project screenshots"]');
  const getLabel = () => region.locator("span.truncate").textContent();

  const t0 = await getLabel();
  console.log("t0:", t0);
  await page.waitForTimeout(2800);
  const t1 = await getLabel();
  console.log("t1 (after ~2.8s, should differ):", t1, t0 !== t1);

  // fast-forward through several autoplay ticks to confirm it wraps at the end (9 slides total)
  await page.waitForTimeout(2500 * 8);
  const t2 = await getLabel();
  console.log("t2 (after 8 more ticks, ~9 total advances = should be back near start):", t2);

  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-h-after-loop.png" });
  await context.close();
}

// Dot click + peek-tile click test
{
  const { context, page } = await ctx(1440, 900);
  const region = page.locator('[aria-label="Project screenshots"]');
  await page.waitForTimeout(300);

  const before = await region.locator("span.truncate").textContent();
  const dots = page.locator('[aria-label="Project screenshots"] + div button, [aria-label="Project screenshots"] button[aria-label^="Show"]');
  const dotCount = await dots.count();
  console.log("dot count:", dotCount);
  if (dotCount >= 4) {
    await dots.nth(3).click();
    await page.waitForTimeout(900);
    const afterDotClick = await region.locator("span.truncate").textContent();
    console.log("after clicking dot #4:", afterDotClick, before !== afterDotClick);
  }

  // click the right-peek tile (should behave like "next")
  await page.waitForTimeout(300);
  const beforePeek = await region.locator("span.truncate").textContent();
  const box = await region.boundingBox();
  await page.mouse.click(box.x + box.width * 0.93, box.y + box.height * 0.4);
  await page.waitForTimeout(900);
  const afterPeek = await region.locator("span.truncate").textContent();
  console.log("after clicking right-peek tile:", beforePeek, "->", afterPeek);

  await page.screenshot({ path: "C:/MOHSIN/portfolio/.tmp-h-after-peek-click.png" });
  await context.close();
}

// Reduced motion: autoplay disabled
{
  const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
  const page = await context.newPage();
  page.on("pageerror", (e) => errors.push(`[reduced-motion pageerror] ${e.stack || e}`));
  await page.goto("http://localhost:3000/", { waitUntil: "load" });
  await page.waitForSelector("h1");
  const region = page.locator('[aria-label="Project screenshots"]');
  const before = await region.locator("span.truncate").textContent();
  await page.waitForTimeout(3200);
  const after = await region.locator("span.truncate").textContent();
  console.log("reduced-motion autoplay disabled (should match):", before === after, before, after);
  await context.close();
}

// Swipe (pan) test on mobile
{
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true });
  const page = await context.newPage();
  await page.goto("http://localhost:3000/", { waitUntil: "load" });
  await page.waitForSelector("h1");
  await page.waitForTimeout(500);
  const region = page.locator('[aria-label="Project screenshots"]');
  await region.scrollIntoViewIfNeeded();
  await page.waitForTimeout(300);
  const before = await region.locator("span.truncate").textContent();
  const box = await region.boundingBox();
  const y = box.y + Math.min(box.height * 0.4, 150);
  await page.mouse.move(box.x + box.width * 0.8, y);
  await page.mouse.down();
  for (let i = 1; i <= 8; i++) {
    await page.mouse.move(box.x + box.width * 0.8 - (box.width * 0.65 * i) / 8, y);
    await page.waitForTimeout(15);
  }
  await page.mouse.up();
  await page.waitForTimeout(900);
  const after = await region.locator("span.truncate").textContent();
  console.log("swipe changed slide:", before !== after, before, "->", after);
  await context.close();
}

console.log("ERRORS:", JSON.stringify(errors, null, 2));
await browser.close();
console.log("done");
