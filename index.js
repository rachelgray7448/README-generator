const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
        name: 'description',
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
        choices: [{name:'MIT License', value: 'MIT'}, {name: 'GPL 3.0', value: 'GPL3.0'}, {name: 'BSD 3', value: 'BSD3'}, {name: 'Apache 2.0', value: 'Apache2.0'}, {name: 'No License', value: ''}],
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
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide your GitHub username:',
        validate: githubInput => {
            if(githubInput) {
                return true;
            }
            else {
                console.log('Please enter your GitHub username!')
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email:',
        validate: emailInput => {
            if(emailInput) {
                return true;
            }
            else {
                console.log('Please enter your email!')
                return false;
            }
        }
    }
];

//Write file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("README has been created successfully!")
        }
    })

}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(generateMarkdown(answers));
        writeToFile('./test.md', generateMarkdown(answers));
    })
}


init();


