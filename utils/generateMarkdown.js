// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licensesAndBadges = {
  "Apache-2.0": "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  
  "MIT": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",

  "GPL-3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
}
 const licenseLinks = {
  "Apache-2.0": "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)",
  
  "MIT": "[MIT License](https://opensource.org/licenses/MIT)",

  "GPL-3.0": "[GPL v3](https://www.gnu.org/licenses/gpl-3.0)",
 }



//Title, Description, Table of Contents, Github username, email address, Installation, Usage, License, Contributing, Tests, and Questions

function renderLicenseBadge(license) {
  if(!license){
    return ""
  }
  return licensesAndBadges[license]
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license){
    return ""
  }
  return licenseLinks[license]
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license){
    return ""
  }
  return `## License
  This repo is licensed under ${renderLicenseLink(license)}.`


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title} ${renderLicenseBadge(data.License)} 

  ${renderLicenseSection(data.License)}`;
}

module.exports = {generateMarkdown, licensesAndBadges};
