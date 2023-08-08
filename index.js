// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// An array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
  },
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How to use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How to run tests for your project?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing README file:', err);
    } else {
      console.log('README.md file has been successfully generated!');
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  });

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

// Links to data within the markdown file
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
}

// Function call to initialize app again
init();