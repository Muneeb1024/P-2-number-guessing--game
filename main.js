#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcome to Codewithmuneeb-CLI-NUMBER-GUESSING-GAME\n");
const randomNumber = Math.floor(Math.random() * 4 + 1);
const ans = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number (Number Limit From 1 to 5):",
    }
]);
if (ans.userGuessedNumber === randomNumber) {
    console.log("Congratulation! your guess number is correct");
}
else {
    console.log("Sorry! Your guess number is wrong");
}
