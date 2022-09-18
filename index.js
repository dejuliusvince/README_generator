const {generateMarkdown, licensesAndBadges} = require("./utils/generateMarkdown"); 
const inquirer = require("inquirer");
const fs = require("fs");

//array of questions for user input
const questions = [
    {
        name: "GitHub",
        type: "input",
        message: "What is your GitHub username?"
    },
    {
        name: "Email",
        type: "input",
        message: "What is your email address?"
    },
    {
        name: "Title",
        type: "input",
        message: "What is the project title?"
    },
    {
        name: "Description",
        type: "editor",
        message: "Please quickly describe your project.",
    },
    {
        name: "Installation",
        type: "editor",
        message: "What steps must a user take to install your application?",
    },
    {
        name: "Usage",
        type: "editor",
        message: "What guidelines shoudl the user follow when using your application?",
    },
    {
        name: "License",
        type: "list",
        message: "Please choose a license to use.",
        choices: Object.keys(licensesAndBadges),
    },
    {
        name: "Contributing",
        type: "editor",
        message: "Please include any guidelines for contribution.",
    },
    {
        name: "Test",
        type: "editor",
        message: "Please describe the procedure for testing the application.",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

async function init() {
    //3 steps: 1. prompt the questions, 2. Format the responses to fit the document style , 3. Writing to the file
   const answers =  await inquirer.prompt(questions);
   const formattedReadMeText = generateMarkdown(answers);
   writeToFile("README.md", formattedReadMeText)
    
}

// Function call to initialize app
init();
