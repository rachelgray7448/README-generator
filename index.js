// TODO: Include packages needed for this application
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the name of your project?',
        validate: projectTitleInput => {
            if(projectTitleInput) {
                return true;
            }
            else {
                console.log('Please enter the name of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a description of your project:',
        validate: projectDescriptionInput => {
            if(projectDescriptionInput) {
                return true;
            }
            else {
                console.log('Please enter a description of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tableContents',
        message: 'Please enter your table of contents:',
        validate: tableInput => {
            if(tableInput) {
                return true;
            }
            else {
                console.log('Please enter your table of contents!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Please provide instructions to install the repo:',
        validate: installInput => {
            if(installInput) {
                return true;
            }
            else {
                console.log('Please enter the instructions to install your repo!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your project:',
        validate: usageInput => {
            if(usageInput) {
                return true;
            }
            else {
                console.log('Please describe how to use your project!');
                return false;
            }
        }

    },
    {
        type: 'list',
        name: 'license',
        message: 'Please identify the type of licensing for your project:',
        choices: ['MIT License', 'GPL 3.0', 'BSD 3', 'Apache 2.0', 'No License'],
        //then what??
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the guidelines for contribution?',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            }
            else {
                console.log('Please describe the guidelines for contribution!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
        validate: testsInput => {
            if(testsInput) {
                return true;
            }
            else {
                console.log('Please provide test instructions!');
                return false;
            }
        }
    }
];



inquirer.prompt(questions).then((answers) => {
    
})
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
