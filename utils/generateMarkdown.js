const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
const collectLicense = async (inputs = []) => {
	const licenseQuestions = [
		{
			type: 'input',
			message: 'What is the license name?',
			name: 'licenseName',
		},
		{
			type: 'input',
			message: 'What is the license link?',
			name: 'licenseLink',
		},
		{
			type: 'confirm',
			message: 'Add another license?',
			name: 'addLicense',
			default: false,
		},
	];

	const { addLicense, ...answers } = await inquirer.prompt(licenseQuestions);
	const newLicenses = [...inputs, answers];
	return addLicense
		? collectLicense(newLicenses)
		: console.log(newLicenses, 'false');
};

// If there is no license, return an empty string
function renderLicenseBadge(license) {
	console.log(`look what was passed ${license}`);
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
	if (answers.licenseConfirm === true) {
		collectLicense();
	}
	return `# ${answers.title} 
  
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

  ## Description

  Sample Project

  ## Table of Contents

  * [Installation](#installation)

  * [Usage](#usage)

  * [License](#license)

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

  ## License

  This project is licensed under the MIT license.

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
