// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt( [
    {
        type: "input",
        name: "Title",
        message: "What is the name of your project?"
    },
    {
        type: "input",
        name: "Project Description",
        message: "Write a description of your project"
    },
    {
        type: "input",
        name: "Installation information",
        message: "What information is needed to install the project?"
    },
    {
        type: "input",
        name: "Usage",
        message: "How may the project be used?"
    },
    {
        type: "input",
        name: "Contributing",
        message: "Add information regarding contributing to the project"
    },
    {
        type: "input",
        name: "Tests",
        message: "How can tests be ran on the project?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "GPLv2", "Apache", "none"]
    },

]);
};

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}
questions() 
// .then(answers => console.log(answers))
    .then(answers => {
        return generateMarkdown(answers);
    })
.then
    fs.writeFile("readMe", answers, err => {
        if (err) {
          console.error(err)
          return
        }
      })
// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
