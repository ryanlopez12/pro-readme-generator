const inquirer = require("inquirer")
const fs = require('fs');
const generatePage = require('./src/template-readme.js');
const { writeFile } = require('./utils/generate-readme');

const promptUser = () => {
    console.log(`
    =============================
    Professional Readme Generator
    =============================
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of your project? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }    
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the intended usage of this application? (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter intended usage of application!');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node',],
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Who else contributed to this application? (Required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true;
                } else {
                    console.log('Please enter any contributers or type "N/A".');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests did you run to build this application?',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('You need to enter tests ran or enter "N/A" if none were applied.');
                    return false;
                }
            }
            type: 'input',
            name: 'email',
            message: 'Please provide your email for questions about your application.(Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter a valid email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide your GitHub username for questions about your application.(Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter a valid GitHub username!');
                    return false;
                }
            }
        },
    ])
  
        }

        
   
    
        
    
    
        
    
promptUser()
.then(promptReadme => {
return generatePage(promptReadme);
})
.then(readmeMD => {
    return writeFile(readmeMD);
})
.catch(err => {
    console.log(err);
});