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
				'Do you have licenses? (if "yes", you will provide addition info later',
			name: 'licenseConfirm',
		},
		// ])
		// .then((answers) => {
		// 	if (answers.licenseConfirm === true) {
		// 		inquirer.prompt([
		// 			{
		// 				type: 'number',
		// 				message: 'How many licenses do you want to list?',
		// 				name: 'licenseNum',
		// 			},
		// 		]);
		// 		for (let i = 0; i < answers.licenseNum; i++) {
		// 			inquirer.prompt([
		// 				{
		// 					type: 'input',
		// 					message: 'input message here',
		// 					name: `license${i}`,
		// 				},
		// 			]);
		// 		}
		// 	}
		// })
		{
			type: 'input',
			message: `Description will have 3 sections \n1 what does your app do\n2 what technologies used\n3 some challenges you faced and future features\n\nWhat does your application do?`,
			name: 'desc1',
		},
		{
			type: 'input',
			message: 'What technologies were used?',
			name: 'desc2',
		},
		{
			type: `input`,
			message: `Some of the challenges you faced and features you hope to implement in the future.`,
			name: `desc3`,
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
