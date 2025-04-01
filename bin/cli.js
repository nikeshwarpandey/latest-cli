#!/usr/bin/env node

const {program} = require('commander');


  
//command 1: greet
program
    .command('greet <name>')
    .description('Greet a person')
    .action((name) => { 
        console.log(`Hello, ${name}!`);
    })

//command 2: add
program
    .command('add <num1> <num2>')
    .description('Add two numbers')
    .action((num1, num2) => {
        const sum = parseFloat(num1) + parseFloat(num2);
        console.log(`The sum of ${num1} and ${num2} is ${sum}`);
    });

    //Parse the arguments and run the commands
    program.parse(process.argv);
    