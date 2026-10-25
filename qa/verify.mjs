import { chromium } from 'playwright';
import fs from 'node:fs/promises';

const browser = await chromium.launch({
  executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  headless: true,
});

const results = [];
const errors = [];
const check = (condition, label, details = '') => {
  results.push({ label, pass: Boolean(condition), details });
  if (!condition) errors.push(`${label}${details ? `: ${details}` : ''}`);
};

async function revealPage(page) {
  const ids = ['why', 'demo', 'identity', 'asset', 'pricing', 'process', 'faq', 'vision', 'contact'];
  for (const id of ids) {
    await page.locator(`#${id}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(900);
}

async function verifyViewport(width, height, name) {
  const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1 });
  await context.grantPermissions(['clipboard-read', 'clipboard-write'], { origin: 'http://localhost:5173' });
  const page = await context.newPage();
  const consoleErrors = [];
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text());
  });
  page.on('pageerror', (error) => consoleErrors.push(error.message));
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1400);

  const brand = await page.locator('.hero-brand__name').boundingBox();
  const heroCopy = await page.locator('.hero-copy').boundingBox();
  const viewportOverflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
  check(brand && brand.x >= 0 && brand.x + brand.width <= width + 1, `${name} 首屏品牌字标完整`, JSON.stringify(brand));
  check(heroCopy && heroCopy.width >= Math.min(280, width - 40), `${name} 首屏标题未被双列挤压`, JSON.stringify(heroCopy));
  check(viewportOverflow <= 1, `${name} 无横向溢出`, `${viewportOverflow}px`);

  if (name.startsWith('mobile')) {
    await page.screenshot({ path: `qa/${name}-hero.png` });
  }

  if (name === 'desktop') {
    await page.screenshot({ path: 'qa/desktop-hero.png' });
    await revealPage(page);
    await page.screenshot({ path: 'qa/desktop-full.png', fullPage: true });
    await page.locator('#demo').screenshot({ path: 'qa/desktop-demo.png' });
    await page.locator('#pricing').screenshot({ path: 'qa/desktop-pricing.png' });
    await page.locator('#why').screenshot({ path: 'qa/desktop-problem.png' });
    await page.locator('#identity').screenshot({ path: 'qa/desktop-identity.png' });
    await page.locator('#asset').screenshot({ path: 'qa/desktop-asset.png' });
    await page.locator('#contact').screenshot({ path: 'qa/desktop-contact.png' });

    const orbitalFigures = [
      ['首屏', '.hero-brand__orbit'],
      ['资产区', '.asset-orbit svg'],
      ['CTA', '.cta-geometry'],
    ];
    for (const [label, selector] of orbitalFigures) {
      const figure = page.locator(selector);
      check(
        await figure.locator('ellipse').count() === 2
          && await figure.locator('circle').count() === 2
          && await figure.locator('[class$="__crescent"]').count() === 1
          && await figure.locator('[class$="__front"]').count() === 1,
        `${label}保持主副双轨道、单星球、单切面与单卫星`,
      );
    }

    await page.locator('.demo-page-switch button').nth(1).click();
    check(await page.locator('.demo-site--about').count() === 1, '演示切换到关于页');
    await page.locator('.demo-page-switch button').nth(2).click();
    await page.locator('.demo-project-list button').nth(1).click();
    check((await page.locator('.demo-project-detail__title').textContent()) === '公共数据手记', '演示项目切换');
    await page.locator('.evidence-path__item button').nth(2).click();
    check(await page.locator('.demo-project-evidence.is-highlighted').count() === 1, '证据路径联动高亮');
    await page.locator('.demo-device-switch button').nth(1).click();
    check(await page.locator('.demo-stage--mobile').count() === 1, '手机预览切换');
    await page.locator('#demo').screenshot({ path: 'qa/desktop-demo-mobile-preview.png' });

    const bookingLinks = await page.locator('.price-card__button').evaluateAll((links) => links.map((link) => link.href));
    check(bookingLinks.length === 3 && bookingLinks.every((href, index) => decodeURIComponent(href).includes(`V${index + 1}`) && decodeURIComponent(href).includes('预约定制个人网站')), '三档预约邮件带入选中方案', bookingLinks.join('\n'));
    await page.locator('#faq details').nth(1).locator('summary').click();
    check(await page.locator('#faq details').nth(1).getAttribute('open') !== null, 'FAQ 可展开');
    await page.locator('#contact').scrollIntoViewIfNeeded();
    await page.getByRole('button', { name: '复制邮箱' }).click();
    await page.waitForFunction(() => document.querySelector('[role="status"]')?.textContent === '邮箱已复制');
    check((await page.locator('[role="status"]').textContent()) === '邮箱已复制', '邮箱复制反馈');
  } else {
    await revealPage(page);
    await page.screenshot({ path: `qa/${name}-full.png`, fullPage: true });
    await page.locator('#demo').screenshot({ path: `qa/${name}-demo.png` });
    await page.locator('#pricing').screenshot({ path: `qa/${name}-pricing.png` });

    const priceButtonLayout = await page.locator('.price-card').evaluateAll((cards) => cards.map((card) => {
      const cardRect = card.getBoundingClientRect();
      const buttonRect = card.querySelector('.price-card__button').getBoundingClientRect();
      return buttonRect.top >= cardRect.top && buttonRect.bottom <= cardRect.bottom + 1 && buttonRect.left >= cardRect.left && buttonRect.right <= cardRect.right + 1;
    }));
    check(priceButtonLayout.every(Boolean), `${name} 每档预约按钮位于卡片内`, JSON.stringify(priceButtonLayout));

    if (width <= 700) {
      await page.locator('.comparison-mobile-switch button').nth(2).click();
      check((await page.locator('.comparison-mobile__title strong').textContent()).includes('V3'), `${name} 移动比较切换`);
    } else {
      check(await page.locator('.comparison-table').isVisible(), `${name} 桌面比较表可见`);
    }

    if (name === 'mobile390') {
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.locator('.menu-toggle').click();
      await page.waitForTimeout(300);
      check(await page.locator('.menu-toggle').getAttribute('aria-expanded') === 'true', '移动菜单打开');
      await page.keyboard.press('Escape');
      check(await page.locator('.menu-toggle').getAttribute('aria-expanded') === 'false', '移动菜单 Escape 关闭');
      check(await page.locator('.menu-toggle').evaluate((element) => element === document.activeElement), '移动菜单关闭后焦点返回');
    }
  }

  check(consoleErrors.length === 0, `${name} 无控制台错误`, consoleErrors.join('\n'));
  await context.close();
}

await verifyViewport(1440, 1000, 'desktop');
await verifyViewport(768, 1024, 'tablet768');
await verifyViewport(390, 844, 'mobile390');
await verifyViewport(320, 740, 'mobile320');

const reducedContext = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
const reducedPage = await reducedContext.newPage();
await reducedPage.goto('http://localhost:5173', { waitUntil: 'networkidle' });
const reduced = await reducedPage.evaluate(() => ({
  heroOpacity: getComputedStyle(document.querySelector('.hero-enter')).opacity,
  revealOpacity: getComputedStyle(document.querySelector('.reveal')).opacity,
  scrollBehavior: getComputedStyle(document.documentElement).scrollBehavior,
}));
check(reduced.heroOpacity === '1' && reduced.revealOpacity === '1' && reduced.scrollBehavior === 'auto', '减少动态效果模式', JSON.stringify(reduced));
await reducedContext.close();

await fs.writeFile('qa/results.json', JSON.stringify({ results, errors }, null, 2));
console.log(JSON.stringify({ passed: results.filter((item) => item.pass).length, failed: errors.length, errors }, null, 2));
await browser.close();
if (errors.length) process.exitCode = 1;
