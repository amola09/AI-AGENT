// const { chromium } = require('playwright');

// async function scrapeIndeed() {
//   const browser = await chromium.launch({ headless: false });
//   const page = await browser.newPage();

//   await page.goto('https://in.indeed.com/jobs?q=QA+Tester&l=Pune');

//   await page.waitForTimeout(5000);

//   const jobs = await page.$$eval('h2.jobTitle', elements =>
//     elements.slice(0, 10).map(el => ({
//       title: el.innerText
//     }))
//   );

//   await browser.close();
//   return jobs;
// }

// module.exports = scrapeIndeed;



// // const keywords = require("../keywords");

// // async function indeedJobs() {
// //   console.log("Searching Indeed...");

// //   // demo output (replace with real scraping)
// //   return [
// //     {
// //       title: "QA Automation Engineer",
// //       company: "ABC Tech",
// //       description: "Looking for Cypress automation tester",
// //       source: "Indeed"
// //     }
// //   ];
// // }

// // module.exports = indeedJobs;

// async function indeedJobs() {
//   return [
//     {
//       title: "QA Automation Engineer",
//       company: "TCS",
//       description: "Looking for Cypress & JavaScript testers. 1-2 years experience.",
//       experience: "1-2 years",
//       source: "Indeed"
//     }
//   ];
// }

// module.exports = indeedJobs;


const { chromium } = require('playwright');

async function indeedJobs() {
  console.log("Scraping Indeed...");

  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://in.indeed.com/jobs?q=QA+Tester&l=Pune', {
    waitUntil: "domcontentloaded"
  });

  // wait for job cards to load
  await page.waitForSelector('.job_seen_beacon', { timeout: 10000 });

  const jobs = await page.$$eval('.job_seen_beacon', cards =>
    cards.slice(0, 10).map(card => {
      const title = card.querySelector('h2.jobTitle')?.innerText || "";
      const company = card.querySelector('.companyName')?.innerText || "";
      const description = card.innerText || "";

      return {
        title: title.trim(),
        company: company.trim(),
        description,
        experience: "",
        source: "Indeed"
      };
    })
  );

  await browser.close();

  console.log(` Indeed jobs found: ${jobs.length}`);

  return jobs;
}

module.exports = indeedJobs;