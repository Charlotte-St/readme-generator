var readmeText;
const fs = require('fs');
const inquirer = require('inquirer');
var licenseBadge; 

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description for this project?',
        name: 'description'
    }, {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation'
    }, {
        type: 'input',
        message: 'What is the usage information for this project?',
        name: 'usage'
    }, {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution'
    }, {
        type: 'input',
        message: 'What are the test instructions for this project?',
        name: 'test'
    }, {
        type: 'list',
        message: 'What is the license for this project?',
        choices: ['Apache 2.0', new inquirer.Separator(), 'Creative Commons Attribution 4.0', new inquirer.Separator(), 'MIT', new inquirer.Separator(), 'Mozilla Public'],
        name: 'license',
        default: 'MIT'
    }, {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    }, {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
]).then( answers => {
    readmeText = `
    #${answers.title}

    ##Description
    ${answers.description}

    ##Table of Contents
    *[Installation](#Installation)
    *[Usage](#Usage)
    *[License](#License)
    *[Contributing](#Contributing)
    *[Questions](#Questions)

    ##Installation
    ${answers.installation}

    ##Usage
    ${answers.usage}

    ##License
    ${answers.license}
    ##Contributing
    ${answers.contributing}

    ##Tests
    ${answers.tests}

    ##Questions
    My GitHub Profile: [${answers.username}](https://github.com/${answers.username})
    [Contact me via email](mailto:${answers.email}) with any additional questions.
    `;
    console.log(readmeText);
    var stream = fs.createWriteStream('Sample/README.md', {flags: 'a'});
    stream.write(readmeText, function(){});}
    )