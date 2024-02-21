var readmeText;
const fs = require('fs');
const inquirer = require('inquirer');

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
    var licenseBadge;
    var licenseUrl;
    switch (answers.license) {
        case 'Apache 2.0': 
            licenseBadge = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; 
            licenseUrl = '[an Apache 2.0 license](https://opensource.org/licenses/Apache-2.0).'
            break;
        case 'Creative Commons Attribution 4.0': 
            licenseBadge = '[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)';
            licenseUrl = '[a Creative Commons Attribution 4.0 license](https://creativecommons.org/licenses/by/4.0/).'
            break;
        case 'MIT': 
            licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
            licenseUrl = '[an Mit license](https://opensource.org/licenses/MIT).'
            break;
        case 'Mozilla Public': 
            licenseBadge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)';
            licenseUrl = '[a Mozilla Public license](https://opensource.org/licenses/MPL-2.0)'
            break;
    }
//README formatting
    readmeText = 
`# ${answers.title}

${licenseBadge}

## Description
${answers.description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This repository is licensed under ${licenseUrl}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
My GitHub Profile: [${answers.username}](https://github.com/${answers.username})

[Contact me via email](mailto:${answers.email}) with any additional questions.`;
    var stream = fs.createWriteStream('Sample/README.md', {flags: 'a'});
    stream.write(readmeText, function(){});}
    )