
// wor for single indeed.js file
// const scrapeIndeed = require('./scrapers/indeed');

// async function run() {
//   const jobs = await scrapeIndeed();
//   console.log(jobs);
// }

// run();


// const scrapeIndeed = require('./scrapers/indeed');
// const scrapeLinkedIn = require('./scrapers/linkedin');
// const scrapeNaukri = require('./scrapers/naukri');
// const scrapeInstahyre = require('./scrapers/instahyre');

// async function run() {
//   const jobs = [
//     ...(await scrapeIndeed()),
//     ...(await scrapeLinkedIn()),
//     ...(await scrapeNaukri()),
//     ...(await scrapeInstahyre())
//   ];

//   console.log(jobs);
// }

// run();



//


// const indeedJobs = require("./scrapers/indeed");
// const naukriJobs = require("./scrapers/naukri");
// const linkedInJobs = require("./scrapers/linkedin");
// const instahyreJobs = require("./scrapers/instahyre");

// const detectSkills = require("./aiProcessor");

// (async () => {
//   console.log("Searching QA Jobs...\n");

//   const jobs = [
//     ...(await indeedJobs()),
//     ...(await naukriJobs()),
//     ...(await linkedInJobs()),
//     ...(await instahyreJobs()),
//   ];

//   const processed = jobs.map(job => ({
//     ...job,
//     skills: detectSkills(job.description),
//   }));

//   console.log(processed);

//   await saveResults(processed);
// })();



const indeedJobs = require("./scrapers/indeed");
const naukriJobs = require("./scrapers/naukri");
const linkedInJobs = require("./scrapers/linkedin");
const instahyreJobs = require("./scrapers/instahyre");

const { detectSkills, detectExperience } = require("./aiProcessor");
// const detectSkills = require("./aiProcessor");
const saveResults = require("./utils/saveResults");

(async () => {
  console.log("Searching QA Jobs...\n");

  const jobs = [
    ...(await indeedJobs()),
    ...(await naukriJobs()),
    ...(await linkedInJobs()),
    ...(await instahyreJobs()),
  ];

  // const processed = jobs.map(job => ({
  //   ...job,
  //   skills: detectSkills(job.description),
  // }));

  const processed = jobs.map(job => ({
  title: job.title || "Not Available",
  company: job.company || "Not Available",
  experience: job.experience || detectExperience(job.description),
  skills: detectSkills(job.description),
  source: job.source || "Unknown"
}));
  console.log(processed);

  await saveResults(processed);
})();

