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
			type: 'input',
			message: 'Give use case example for your application.',
			name: 'usageText',
			when: (answers) => answers.usageConfirm === true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Contributors" section to highlight others who have help with the development?',
			name: 'contConfirm',
			default: true,
		},
		{
			type: 'input',
			message: 'List the contributors to your application.',
			name: 'contList',
			when: (answers) => answers.contConfirm === true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Test" section to give users practical test cases?',
			name: 'testConfirm',
			default: true,
		},
		{
			type: 'list',
			message: 'What type of test case do you have?',
			choices: ['npm test file', 'type test cases here'],
			name: 'testChoice',
			when: (answers) => answers.testConfirm === true,
		},
		{
			type: 'input',
			message: 'Explain test case 1 (max 5)',
			name: 'test1',
			when: (answers) => answers.testChoice === 'type test cases here',
		},
		{
			type: 'confirm',
			message: 'Another test case?',
			name: 'test2Confirm',
			when: (answers) => answers.testChoice === 'type test cases here',
		},
		{
			type: 'input',
			message: 'Explain test case 2 (max 5)',
			name: 'test2',
			when: (answers) => answers.test2Confirm === true,
		},
		{
			type: 'confirm',
			message: 'Another test case?',
			name: 'test3Confirm',
			when: (answers) => answers.test2Confirm === true,
		},
		{
			type: 'input',
			message: 'Explain test case 3 (max 5)',
			name: 'test3',
			when: (answers) => answers.test3Confirm === true,
		},
		{
			type: 'confirm',
			message: 'Another test case?',
			name: 'test4Confirm',
			when: (answers) => answers.test3Confirm === true,
		},
		{
			type: 'input',
			message: 'Explain test case 4 (max 5)',
			name: 'test4',
			when: (answers) => answers.test4Confirm === true,
		},
		{
			type: 'confirm',
			message: 'Another test case?',
			name: 'test5Confirm',
			when: (answers) => answers.test4Confirm === true,
		},
		{
			type: 'input',
			message: 'Explain test case 5 (final test case)',
			name: 'test5',
			when: (answers) => answers.test5Confirm === true,
		},
		{
			type: 'confirm',
			message:
				'Do you want a "Questions" section to give users contact methods to ask questions?',
			name: 'questConfirm',
			default: true,
		},
		{
			type: 'input',
			message: 'What is the email you would like to use for contacting you?',
			name: 'questEmail',
			when: (answers) => answers.questConfirm === true,
		},
		{
			type: 'input',
			message: 'What is your github user name?',
			name: 'questGit',
			when: (answers) => answers.questConfirm === true,
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
