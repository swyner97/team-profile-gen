const inquirer = require('inquirer');
const fs = require("fs");
const generateHTML = require("./generateHTML")
let Engineer = require('./lib/Engineer');
let Intern = require('./lib/Intern');
let Manager = require('./lib/Manager');


const team = [];

let prompt = () => {


    inquirer.prompt([
        {
            type: "confirm",
            name: "new",
            message: "Would you like to add an employee?",
            choices: ["yes", "no"]
        },
        {
            type: "list",
            name: "role",
            message: "What role would you like to add?",
            choices: ["Intern", "Engineer", "Manager"],
        },
        // ** INTERN QUESTIONS ** //
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
            when: (answers) => answers.role === "Intern",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "What's the intern's identification number?",
            when: (answers) => answers.role === "Intern",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID number!");
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
            when: (answers) => answers.role === "Intern",
            validate: (emailInput) => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                } return false
            }
        },
        {
            type: "input",
            name: "school",
            message: "What school is the intern attending?",
            when: (answers) => answers.role === "Intern",
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                } return false
            }
        },
        // ** ENGINEER QUESTIONS ** //
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
            when: (answers) => answers.role === "Engineer",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "What's the engineer's identification number?",
            when: (answers) => answers.role === "Engineer",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID number!");
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
            when: (answers) => answers.role === "Engineer",
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                } return false
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
            when: (answers) => answers.role === "Engineer",
            validate: (githubInput) => {
                if (githubInput) {
                    return true
                } else {
                    console.log("Please enter a GitHub username!")
                }
            }
        },

        // ** MANAGER QUESTIONS ** //

        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
            when: (answers) => answers.role === "Manager",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        {
            type: "number",
            name: "id",
            message: "What's the manager's identification number?",
            when: (answers) => answers.role === "Manager",
            validate: (idInput) => {
                if (idInput) {
                    return true;
                } else {
                    console.log("Please enter an ID number!");
                    return false;
                }
            }

        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            when: (answers) => answers.role === "Manager",
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                } return false;
            }
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number",
            when: (answers) => answers.role === "Manager",
            validate: (officeInput) => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter an office number!");
                } return false;
            }
        },
        {
            type: "confirm",
            name: "newMem",
            message: "Would you like to add another team member?",
        },

    ])
        .then((answers) => {
            if (answers.role === "Intern") {
                const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                team.push(intern);
            }
            if (answers.role === "Engineer") {
                const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                team.push(engineer);
            }
            if (answers.role === "Manager") {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
                team.push(manager)
            }
            if (answers.newMem === true) {
                return prompt();
            } else console.log(team);
            return team
        })
}

let writeFile = (answers) => {
    fs.writeFile("./dist/index.html", answers, err => {
        if (err) {
            throw err;
        } else {
            console.log("Team Prolfile has been created!")
        }
    })
}


prompt()
    ,then(team => {
        return generateHTML(team);
    })
    .then(answers => {
        return writeFile(answers);
    })
    .catch(err => {
        console.log(err)
    })

    // .catch((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });
