// const Excel = require("exceljs");

// async function saveResults(jobs) {
//   const workbook = new Excel.Workbook();
//   const sheet = workbook.addWorksheet("QA Jobs");

//   sheet.columns = [
//     { header: "Title", key: "title", width: 30 },
//     { header: "Company", key: "company", width: 25 },
//     { header: "Skills", key: "skills", width: 30 },
//     { header: "Source", key: "source", width: 20 },
//   ];

//   jobs.forEach(job => {
//     sheet.addRow({
//       title: job.title,
//       company: job.company,
//       skills: job.skills.join(", "),
//       source: job.source
//     });
//   });

//   await workbook.xlsx.writeFile("./output/jobs.xlsx");
//   console.log(" Excel file saved in output/jobs.xlsx");
// }

// module.exports = saveResults;

// after installing exceljs below code will help to save searched results.
const Excel = require("exceljs");

async function saveResults(jobs) {
  const workbook = new Excel.Workbook();
  const sheet = workbook.addWorksheet("QA Jobs");

//   sheet.columns = [
//     { header: "Title", key: "title", width: 30 },
//     { header: "Company", key: "company", width: 25 },
//     { header: "Skills", key: "skills", width: 30 },
//     { header: "Source", key: "source", width: 20 },
//   ];
  sheet.columns = [
  { header: "Title", key: "title", width: 30 },
  { header: "Company", key: "company", width: 25 },
  { header: "Experience", key: "experience", width: 18 },
  { header: "Skills", key: "skills", width: 30 },
  { header: "Source", key: "source", width: 20 },
];
//   jobs.forEach(job => {
//     sheet.addRow({
//       title: job.title,
//       company: job.company,
//       skills: job.skills.join(", "),
//       source: job.source
//     });
//   });
jobs.forEach(job => {
  sheet.addRow({
      title: job.title || "Not Available",
    company: job.company || "Not Available",
    experience: job.experience || "Not Mentioned",
    skills: job.skills?.length ? job.skills.join(", ") : "Not Mentioned",
    source: job.source || "Unknown"
  });
});

  await workbook.xlsx.writeFile("./output/jobs.xlsx");
  console.log(" Excel saved!");
}

module.exports = saveResults;