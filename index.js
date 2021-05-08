// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
	{
		type: 'input',
		message: 'What is your README Title?',
		name: 'name',
	},
	{
		type: 'password',
		message: 'What is your password?',
		name: 'password',
	},
	{
		type: 'password',
		message: 'Re-enter password to confirm:',
		name: 'confirm',
	},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	fs.writeFile(fileName, data, (err) => {
		err ? console.error(err) : console.log('Success!');
	});
}

// TODO: Create a function to initialize app
function init() {
	inquirer.prompt([questions[0], questions[1], questions[2]]).then((data) => {
		const filename = `README.md`;

		fs.writeFile(filename, `# ${data.name}`, (err) => {
			err ? console.log(err) : console.log('Success!');
		});
	});
}

// Function call to initialize app
init();
