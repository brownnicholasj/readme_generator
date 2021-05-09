const licensepkg = require('../package.json');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
	return license ? `![License: ${license}]` : ``;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
	return license
		? `(https://img.shields.io/badge/License-${license}-blue)`
		: ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, toc) {
	if (license !== undefined) {
		if (toc === false) {
			return `## License\nThis project is licensed under the ${license} license.`;
		} else {
			return `* [License](#license)`;
		}
	} else {
		return ``;
	}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
	return `# ${answers.title}

  ${renderLicenseBadge(licensepkg.license)}${renderLicenseLink(
		licensepkg.license
	)}

  ## Description

  Sample Project

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  ${renderLicenseSection(licensepkg.license, true)}

  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  '''
  npm i
  '''

  ## Usage

  This is just a sample. Nothing works. Nothing exists. There is no cake.

  ${renderLicenseSection(licensepkg.license, false)}

  ## Contributing

  Feel free to send me money.

  ## Tests

  To run tests, run the following command:

  '''
  npm test
  '''

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at myemail@gmail.com. You can find more of my work at [mygit](https://github.com/mygit/).

  `;
}

module.exports = generateMarkdown;

// const collectLicense = async (inputs = []) => {
// 	const licenseQuestions = [
// 		{
// 			type: 'input',
// 			message: 'What is the license name?',
// 			name: 'licenseName',
// 		},
// 		{
// 			type: 'input',
// 			message: 'What is the license link?',
// 			name: 'licenseLink',
// 		},
// 		{
// 			type: 'confirm',
// 			message: 'Add another license?',
// 			name: 'addLicense',
// 			default: false,
// 		},
// 	];

// 	const { addLicense, ...answers } = await inquirer.prompt(licenseQuestions);
// 	const newLicenses = [...inputs, answers];
// 	return addLicense
// 		? collectLicense(newLicenses)
// 		: renderLicenseBadge(newLicenses);
// };
