// Function to generate the license badge based on the provided license
function renderLicenseBadge(license) {
  if (license) {
    return `![License](https://img.shields.io/badge/license-${license}-green.svg)`;
  }
  return '';
}

// Function to generate the license link based on the provided license
function renderLicenseLink(license) {
  if (license) {
    return `[License](https://opensource.org/licenses/${license})`;
  }
  return '';
}

// Function to generate the license section of the README
function renderLicenseSection(license) {
  if (license) {
    return `## License

This project is licensed under the ${license} License. To learn more, see the [License](https://opensource.org/licenses/${license}).`;
  }
  return '';
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

${licenseLink ? '- [License](#license)\n' : ''}  
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

${licenseSection}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, feel free to reach out via the following platforms:

- Email: ${data.email}
- GitHub: [${data.github}](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;

