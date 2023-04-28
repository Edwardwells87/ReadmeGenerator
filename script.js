const inquirer = require('inquirer');
//import inquirer from "inquirer";
const fs = require('fs');
function imagePooter(answers) {
  if (answers.screenShot === "") {
    console.log("skippin image")
    return `
    `
  }
  else {
    return `
  
  ![Screenshot of project](./assets/${answers.screenShot})

  `
  }
}


function licenseMaker(answers) {
  if (answers.License == 'GPL 3.0') {
    return `## License
      ![license](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
  } else if (answers.License == "MIT") {
    console.log("License is MIT");
    return `## License
      ![license](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  else if (answers.License == "APACHE 2.0") {
    console.log("License is APACHE 2.0");
    return `## License
      ![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else {
    return ` ## License 
      None`
  }

}


function generateReadme(answers) {
  return `#${answers.title1}


  ## Table of Contents 

 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)


## Description 

-${answers.description1} ${answers.description2} ${answers.description3}



## Installation 

- ${answers.installOne}
- ${answers.installTwo}
- ${answers.installThree}


## Usage 

- ${answers.usageOne}

 `
}


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of the project?',
      name: 'title1',
    },
    {
      type: 'input',
      message: 'Please explain why you built this project.',
      name: 'description1',
    },
    {
      type: 'input',
      message: 'In one or two sentences, please explain your motivation to make this project? ',
      name: 'description2',
    },
    {
      type: 'input',
      message: 'What problem does this project solve?',
      name: 'description3',
    },
    {
      type: 'input',
      message: 'What did you learn in the process of building this project? ',
      name: 'description4',
    },
    {
      type: 'input',
      message: 'we will now go over the steps to install your project. lets break it down in three steps or you will loose the readers interest. Please start by telling me the first step to installing this wonderful thing you made: ',
      name: 'installOne',
    },
    {
      type: 'input',
      message: 'not sure if you remember but this is where you write step two of installing this marvelous piece of technology: ',
      name: 'installTwo',
    },
    {
      type: 'input',
      message: 'ok on to step 3: ',
      name: 'installThree',
    },
    {
      type: 'input',
      message: 'ok great its installed. Can you give me a couple sentences that explain what I do with this thing now that I installed it? (its great BTW) ',
      name: 'usageOne',
    },
    {
      type: 'input',
      message: 'IF you have a screenshot in your assets folder i would love the filename (like screenshot.jpg or something, if not just press enter, ok? )',
      name: 'screenShot',
    },

    {
      type: 'input',
      message: 'Write a brief statement to give credit to anyone who worked on this glorious project with you:',
      name: 'Credits',
    },

    {
      type: 'list',
      name: 'License',
      message: 'Please pick one of the available license options from this list:',
      choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'None']
    }


  ])
  .then((answers) => {
    console.log(answers)
    const imagePooterInner = imagePooter(answers);
    const readmecontent = generateReadme(answers);
    const licenseMakerCont = licenseMaker(answers);
    fs.writeFile('Readme.md', readmecontent + licenseMakerCont + imagePooterInner, (err) =>
      err ? console.log(err) : console.log('Successfully created that readme!! ')
    );
  });
