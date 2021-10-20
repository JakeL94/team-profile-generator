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

const managerPrompt= [
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
        message: 'Do you want to add another Employee',
        when: ({ confirm }) => {
            if (confirm) {
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
        when: ({ chooseEmployee }) => {
            if (chooseEmployee) {
                return true;
            } else {
                return false;
            }
        } 
    },
]