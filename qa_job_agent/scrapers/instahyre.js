const { chromium } = require('playwright');

async function scrapeInstahyre() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://www.instahyre.com/jobs-in-pune/?skills=QA');

  await page.waitForTimeout(6000);

  const jobs = await page.$$eval('h3', items =>
    items.slice(0, 10).map(job => ({
      title: job.innerText,
      source: 'Instahyre'
    }))
  );

  await browser.close();
  return jobs;
}

module.exports = scrapeInstahyre;


// async function instahyreJobs() {
//   console.log("Searching Instahyre...");

//   return [
//     {
//       title: "QA Engineer",
//       company: "StartupHub",
//       description: "Cypress + JavaScript testing",
//       source: "Instahyre"
//     }
//   ];
// }

// module.exports = instahyreJobs;