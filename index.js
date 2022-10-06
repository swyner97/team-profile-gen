const inquirer = require('inquirer');
const fs = require("fs");
const path = require('path');
const generateHTML = require("./src/generateHTML");
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'team.html');

const team = [];
const idArr = [];

let prompt = () => {
    let appMenu = () => {
        let addManager = () => {
            console.log('Start building your team.');
            inquirer.prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What is the manager's name?",
                    validate: (answer) => {
                        if (answer !== '') {
                            return true;
                        } else {
                            console.log("Please enter a name!");
                        };
                    }
                },
                {
                    type: "input",
                    name: "id",
                    message: "What's the manager's identification number?",
                    validate: (answer) => {
                        const ok = answer.match(/^[1-9]\d*$/)
                        if (ok) {
                            return true;
                        } else {
                            console.log("Please enter a positive number greater than 0!");
                        };
                    }
                },
                {
                    type: "input",
                    name: "email",
                    message: "What is the manager's email?",
                    validate: (answer) => {
                        const ok = answer.match(/\S+@\S+\.\S+/) // regx or regular expression, sets values to specific params
                        if (ok) {
                            return true;
                        } else {
                            console.log("Please enter a valid email address!");
                        };
                    }
                },
                {
                    type: "input",
                    name: "office",
                    message: "What is the manager's office number",
                    validate: (answer) => {
                        const ok = answer.match(/^[1-9]\d*$/)
                        if (ok) {
                            return true;
                        } else {
                            console.log("Please enter a positive number greater than 0!");
                        };
                    }
                }
            ])
                .then((answers) => {
                    const manager = new Manager(
                        answers.name,
                        answers.id,
                        answers.email,
                        answers.office
                    );
                    team.push(manager);
                    idArr.push(answers.id);
                    createTeam();
                });



            let addEngineer = () => {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the engineer's name?",
                        validate: (answer) => {
                            if (answer) {
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
                        validate: (answer) => {
                            if (answer) {
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
                        validate: (answer) => {
                            if (answer) {
                                return true;
                            } else {
                                console.log("Please enter an email!")
                            }
                        }
                    },
                    {
                        type: "input",
                        name: "github",
                        message: "What is the engineer's Github username?",
                        validate: (answer) => {
                            if (answer) {
                                return true
                            } else {
                                console.log("Please enter a GitHub username!")
                            }
                        }
                    }
                ])
                    .then((answers) => {
                        const engineer = new Engineer(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.github
                        );
                        team.push(engineer);
                        idArr.push(answers.id);
                        createTeam();
                    });
            }

            let addIntern = () => {
                inquirer.prompt([
                    {
                        type: "input",
                        name: "name",
                        message: "What is the intern's name?",
                        validate: (answer) => {
                            if (answer) {
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
                        validate: (answer) => {
                            if (answer) {
                                return true;
                            } else {
                                console.log("Please enter an ID number!");
                            };
                        }

                    },
                    {
                        type: "input",
                        name: "email",
                        message: "What is the intern's email?",
                        validate: (answer) => {
                            if (answer) {
                                return true;
                            } else {
                                console.log("Please enter an email!");

                            };
                        }
                    },
                    {
                        type: "input",
                        name: "school",
                        message: "What school is the intern attending?",
                        validate: (answer) => {
                            if (answer) {
                                return true;
                            } else {
                                console.log("Please enter an email!")

                            };
                        }
                    }
                ])
                    .then((answers) => {
                        const intern = new Intern(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.school
                        );
                        team.push(intern);
                        idArr.push(answers.id);
                        createTeam();
                    });
            };

            let createTeam = () => {
                // inquirer.prompt
                // list for member choice "which type of team member would you like to add?"
                inquirer.prompt([
                    {
                        type: "list",
                        name: 'new',
                        message: "Would you like to add another role?",
                        choices: ['Manager', 'Engineer', 'Intern', 'No, build my team!']
                    }
                ]) // .then take user choice user switch case to add engineer/intern/manager call function to inquire questions for each role
                    .then((userChoice) => {
                        switch (userChoice.new) {
                            case 'Engineer':
                                addEngineer();
                                break;
                            case 'Intern':
                                addIntern();
                                break;
                            default:  // if no more team members build team
                                buildTeam();
                        };
                    });

                let buildTeam = () => {
                    if (!fs.existsSync(DIST_DIR)) {
                        fs.mkdirSync(DIST_DIR);
                    }
                    fs.writeFileSync(distPath, generateHTML(team), 'utf-8');
                };
            };
        };

        addManager();
    };

    appMenu();
};

prompt();
