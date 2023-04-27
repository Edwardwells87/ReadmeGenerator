const inquirer = require('inquirer');
//import inquirer from "inquirer";
const fs = require('fs');
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
      name: 'InstallTwo',
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
      message: 'please type a number for the corresponding license type: 1 Proprietary, 2 Open Source, 3 Freeware, 4. Shareware, ',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
    }


  ])
  .then((answers) => {
    console.log(answers)

  })
      // var htmlContent = writeInitial(answers);
      // fs.writeFile('Read?e.md', htmlContent, (error, data) =>
      //   error ? console.error(error) : console.log(data)
      // )
      .catch ((error) => {
  console.error(error);
});


function getBadges(license){
  if (license !== 'None'){
    return `![license](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`
  } 
}

    // writeHtml(answers){\
function addTitleName(answers){
 
` # <${title1}>

`}
function addBodyAndStuff(){
`## Description 

-${description1,description2,description3}

## Table of Contents 

 - [Installation](#installation)
 - [Usage](#usage)
 - [Credits](#credits)
 - [License](#license)


## Installation 

- ${installOne}
- ${installTwo}
- ${installThree}

## Usage 

- ${usageOne}`

}

function screenShotOpt(screenShot) { 
  
 ` ![screenshot of ${title1}] (assets/${screenShot})
`}

if (screenShot === null){
  console.log('screenshot was skipped')
  else {
    screenShotOpt(screenShot)
}
}


  //   # <Your-Project-Title>

// ## Description

// Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:

// - What was your motivation?
// - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
// - What problem does it solve?
// - What did you learn?




// What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.

// ## Usage

// Provide instructions and examples for use. Include screenshots as needed.

// To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

//     ```md
//     ![alt text](assets/images/screenshot.png)
//     ```

// ## Credits

// List your collaborators, if any, with links to their GitHub profiles.

// If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

// If you followed tutorials, include links to those here as well.

// ## License

// The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

// ---

// 🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.

// ## Badges

// ![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

// Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.

// ## Features

// If your project has a lot of features, list them here.

// ## How to Contribute

// If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.

// ## Tests

// Go the extra mile and write tests for your application. Then provide examples on how to run them here.

// //function to create the file 

