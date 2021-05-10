const inquirer = require('inquirer');

const descSection = '';

const descQuestions = () => {
	console.log('Description will have 3 sections:');
	console.log('1 what does your app do');
	console.log('2 what technologies used');
	console.log('3 some challenges you faced and future features');

	return inquirer.prompt([
		{
			type: 'input',
			message: `What does your application do?`,
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

function generateDescription(boolean) {
	if (boolean === true) {
		descQuestions().then((answers) => {
			descSection = `## Description
			things to respond:
			* ${answers.desc1}
			* ${answers.desc2}
			* ${answers.desc3}`;
		});
	}
}

module.exports = generateDescription();
module.exports = descSection;
