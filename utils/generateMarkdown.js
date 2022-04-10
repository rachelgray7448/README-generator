// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/badge/license-${license}-red)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return renderLicenseBadge(license);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `

${renderLicenseSection(data.license)}

# ${data.title}

## Table-Of-Contents
*[Description](#description)
*[Installation Instructions](#installation)
*[Usage Instructions](#usage)
*[License Information](#license)
*[Contribution Guidelines](#contribution)
*[Test Instructions](#tests)



## Description:
${data.description}
## Installation:
${data.install}
## Usage:
${data.usage}
## License:
This project is covered by: ${data.license}
## Contribution:
${data.contribution}
## Tests:
${data.tests}
`;
}


module.exports = generateMarkdown;
