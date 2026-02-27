const { chromium } = require('playwright');

async function scrapeLinkedIn() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.linkedin.com/jobs/search/?keywords=QA%20Tester&location=Pune');

  await page.waitForTimeout(6000);

  const jobs = await page.$$eval('.base-search-card__title', items =>
    items.slice(0, 10).map(job => ({
      title: job.innerText,
      source: 'LinkedIn'
    }))
  );

  await browser.close();
  return jobs;
}

module.exports = scrapeLinkedIn;