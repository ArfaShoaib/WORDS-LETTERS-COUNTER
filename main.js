#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlackBright("\n \tWELCOME TO WORDS AND LETTERS COUNTER\n"));
let userInput = await inquirer.prompt([
    {
        name: "para",
        type: "input",
        message: chalk.redBright("ENTER THE PARAGRAPH TO COUNT WORDS"),
    },
]);
const paragraphIn = userInput.para;
// for counting letters
const letterWithoutSpace = paragraphIn.replace(/\s/g, "");
const lettercounted = letterWithoutSpace.length;
console.log(lettercounted);
// for couting words
const wordspara = paragraphIn.split(" ");
const wordsCounted = wordspara.length;
console.log(wordsCounted);
console.log(`Your Paragraph Has ${chalk.bgGreenBright(lettercounted)} Letters & ${chalk.bgGreenBright(wordsCounted)} Words`);
