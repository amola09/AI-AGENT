const { chromium } = require('playwright');

async function scrapeNaukri() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.naukri.com/qa-tester-jobs-in-pune');

  await page.waitForTimeout(6000);

  const jobs = await page.$$eval('.title', items =>
    items.slice(0, 10).map(job => ({
      title: job.innerText,
      source: 'Naukri'
    }))
  );

  await browser.close();
  return jobs;
}

module.exports = scrapeNaukri;

// async function naukriJobs() {
//   console.log("Searching Naukri...");

//   return [
//     {
//       title: "Automation Tester",
//       company: "XYZ Pvt Ltd",
//       description: "Experience with Playwright & Selenium",
//       source: "Naukri"
//     }
//   ];
// }

// module.exports = naukriJobs;