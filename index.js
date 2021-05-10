// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const readmeQuestions = () => {
	return inquirer.prompt([
		{
			type: 'input',
			message: 'What is your README Title?',
			name: 'title',
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Description" section that describes your application?',
			name: 'descConfirm',
			default: true,
		},
		{
			type: 'input',
			message: `What does your application do?`,
			name: 'desc1',
			when: (answers) => answers.descConfirm === true,
		},
		{
			type: 'input',
			message: 'What technologies were used?',
			name: 'desc2',
			when: (answers) => answers.descConfirm === true,
		},
		{
			type: `input`,
			message: `Some of the challenges you faced and features you hope to implement in the future.`,
			name: `desc3`,
			when: (answers) => answers.descConfirm === true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Table of Contents" section that links your README to those sections?',
			name: 'tocConfirm',
			default: true,
		},
		{
			type: 'confirm',
			message:
				'Do you want an "Installation" section to give directions on how to install?',
			name: 'installConfirm',
			default: true,
		},
		{
			type: 'confirm',
			message:
				'Do you want an "Usage" section to describe practical way to utilize your app?',
			name: 'usageConfirm',
			default: true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Contributors" section to highlight others who have help with the development?',
			name: 'contConfirm',
			default: true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Test" section to give users practical test cases?',
			name: 'testConfirm',
			default: true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Questions" section to give users contact methods to ask questions?',
			name: 'questConfirm',
			default: true,
		},
	]);
};

// TODO: Create a function to write README file
const writeFileAsync = util.promisify(fs.writeFile);

// TODO: Create a function to initialize app
const init = () => {
	readmeQuestions()
		.then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
		.then(() => console.log('Successfully wrote to README.md'))
		.catch((err) => console.error(err));
};

// Function call to initialize app
init();
