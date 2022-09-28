const inquirer = require('inquirer');

let internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
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
            type: "input",
            name: "email",
            message: "What is the intern's email?",
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
            validate: (schoolInput) => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter an email!")
                } return false
            }
        }
    ])
};

let engineerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
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
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
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
            message: "What is their Github's username?",
            // ! validate: (git) 
        }
    ])
};

let managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "office",
            message: "What is the manager's office number?"
        }
    ])
}


let employeePrompt = () => {
    inquirer.prompt([
        {
            type: "checkbox",
            name: "role",
            message: "What role would you like to add?",
            choices: ["Intern", "Engineer", "Manager"]
        }
    ])
        .then((answers) => {

            if (answers.role === "Intern") {
                internPrompt();
            }
            if (answers.role === "Engineer") {
                engineerPrompt();
            }
            if (answers.role === "Manager") {
                managerPrompt();
            }
        })
};



inquirer.prompt([
    /* Pass your questions in here */
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
        when: (answers) => answers.new === true,
    },


])
    .then((answers) => {
        if (answers.role === "Intern") {
            internPrompt();
        }
        if (answers.role === "Engineer") {
            engineerPrompt();
        }
        if (answers.role === "Manager") {
            managerPrompt();
        }
        if (answers.new === "no") {
            console.log('Team Profile Created');
        }
    })
    // .catch((error) => {
    //     if (error.isTtyError) {
    //         // Prompt couldn't be rendered in the current environment
    //     } else {
    //         // Something else went wrong
    //     }
    // });
