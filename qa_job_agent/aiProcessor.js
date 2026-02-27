// function detectSkills(description = "") {
//   const skills = [];

//   if (/playwright/i.test(description)) skills.push("Playwright");
//   if (/cypress/i.test(description)) skills.push("Cypress");
//   if (/selenium/i.test(description)) skills.push("Selenium");
//   if (/javascript/i.test(description)) skills.push("JavaScript");

//   return skills;
// }

// module.exports = detectSkills;


// to auto detect experience

function detectSkills(description = "") {
  const skills = [];

  if (/playwright/i.test(description)) skills.push("Playwright");
  if (/cypress/i.test(description)) skills.push("Cypress");
  if (/selenium/i.test(description)) skills.push("Selenium");
  if (/javascript/i.test(description)) skills.push("JavaScript");

  return skills;
}

function detectExperience(description = "") {
  const match = description.match(/(\d+[\+\-–]?\d*)\s*(years|yrs)/i);
  return match ? match[0] : "Not Mentioned";
}

module.exports = { detectSkills, detectExperience };

