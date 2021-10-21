const inquirer = require('inquirer');
const fs = require('fs');

const manager = require('./lib/manager');
const intern = require('./lib/intern');
const engineer = require('./lib/engineer');

const createPage = require('./src/generatepage');

let managerInfo = {};
let internInfo = {};
let engineerInfo = {};

const employee = [];

const managerData= [
    {
        type: 'input',
        name: 'name',
        message: 'What is the full name of your manager?',
        validate: nameField => {
            if (nameField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of your manager?',
        validate: idField => {
            if (idField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your manager?',
        validate: emailField => {
            if (emailField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of your manager?',
        validate: numberField => {
            if (numberField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you want to add another Employee?',
        when: ({ numberField }) => {
            if (numberField) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'list',
        name: 'chooseEmployee',
        message: 'Do you want to add another Employee',
        choices: ['Engineer', 'Intern'],
        when: ({ addEmployee }) => {
            if (addEmployee) {
                return true;
            } else {
                return false;
            }
        } 
    },
]

const internData = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the full name of your intern?',
        validate: nameField => {
            if (nameField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of your intern?',
        validate: idField => {
            if (idField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your intern?',
        validate: emailField => {
            if (emailField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the school your intern attends?',
        validate: schoolField => {
            if (schoolField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you want to add another Employee',
        when: ({ schoolField }) => {
            if (schoolField) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'list',
        name: 'chooseEmployee',
        message: 'Do you want to add another Employee',
        choices: ['Engineer', 'Intern'],
        when: ({ addEmployee }) => {
            if (addEmployee) {
                return true;
            } else {
                return false;
            }
        } 
    },
]

const engineerData = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the full name of your engineer?',
        validate: nameField => {
            if (nameField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of your engineer?',
        validate: idField => {
            if (idField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of your engineer?',
        validate: emailField => {
            if (emailField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github username of your engineer?',
        validate: githubField => {
            if (githubField) {
                return true;
            } else {
                console.log('This field cannot be blank.');
                return false;
            }
        } 
    },
    {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Do you want to add another Employee',
        when: ({ githubField }) => {
            if (githubField) {
                return true;
            } else {
                return false;
            }
        } 
    },
    {
        type: 'list',
        name: 'chooseEmployee',
        message: 'Do you want to add another Employee',
        choices: ['Engineer', 'Intern'],
        when: ({ addEmployee }) => {
            if (addEmployee) {
                return true;
            } else {
                return false;
            }
        } 
    },
]

function internPrompt() {
    return inquirer
    .prompt(internData)
    .then(response => {
        internInfo = response;
        const Intern = new intern(response.name, response.id, response.email, response.school);
        employee.push(Intern);
        console.log(Intern);

        // if (internInfo.addEmployee) {
        //     if (internInfo.chooseEmployee,includes('Engineer')) {
        //         engineerPrompt();
        //         return
        //     } else {
        //         internPrompt();
        //         return
        //     }
        // } else {
        //     fs.writeFile('./dist/index.html', createPage(employee), (err) => {
        //         console.log('Team profile page generated!');
        //         if (err) throw err
        //     })
        // }
        addTeam();
    })
}

function engineerPrompt() {
    return inquirer
    .prompt(engineerData)
    .then(response => {
        engineerInfo = response;
        const Engineer = new engineer(response.name, response.id, response.email, response.github);
        employee.push(Engineer);
        console.log(Engineer);

        // if (engineerInfo.addEmployee) {
        //     if (engineerInfo.chooseEmployee,includes('Intern')) {
        //         internPrompt();
        //         return
        //     } else {
        //         engineerPrompt();
        //         return
        //     }
        // } else {
        //     fs.writeFile('./dist/index.html', createPage(employee), (err) => {
        //         console.log('Team profile page generated!');
        //         if (err) throw err
        //     })
        // }
        addTeam();
    })
}

function managerPrompt() {
    return inquirer
    .prompt(managerData)
    .then(response => {
        managerInfo = response;
        const Manager = new manager(response.name, response.id, response.email, response.officeNumber);
        employee.push(Manager);
        console.log(Manager);

        addTeam();
        // if (managerData.addEmployee) {
        //     console.log("Hey")
        //     if (managerData.chooseEmployee,includes('Intern')) {
        //         internPrompt();
        //         return
        //     } else {
        //         engineerPrompt();
        //         return
        //     }
        // } else {
        //     fs.writeFile('./dist/index.html', createPage(employee), (err) => {
        //         console.log('Team profile page generated!');
        //         if (err) throw err
        //     })
        //}
    })
}

function addTeam() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "addEmployee",
            message: "Would you like to add more team members?"
        }
    ])

        .then(function (data) {

            if(data.addEmployee) {
                addEmployee();
            } else {
                fs.writeFile('./dist/index.html', createPage(employee), (err) => {
                    console.log('Team profile page generated!');
                    if (err) throw err
                })
            }
        });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'chooseEmployee',
            message: 'Do you want to add another Employee',
            choices: ['Engineer', 'Intern']
        }
    ])

        .then(function (data) {

            switch (data.chooseEmployee) {
                case "Engineer":
                    engineerPrompt();
                    
                    break;
                case 'Intern':
                    internPrompt();
                    
                    break;
            }
        });
}

managerPrompt();