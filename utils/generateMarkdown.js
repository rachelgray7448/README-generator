function renderLicenseBadge(license) {
  return `
  ![badge](https://img.shields.io/badge/license-${license}-red)
  `
}

function renderLicenseSection(license) {
  return renderLicenseBadge(license);
}

// Function to generate markdown for README
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
*[Questions?](#questions)

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
## Questions:
View my GitHub at [${data.github}](https://github.com/${data.github}), or email me at [${data.email}](mailto:${data.email})
`;
}


module.exports = generateMarkdown;
