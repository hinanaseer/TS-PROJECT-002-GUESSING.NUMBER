// guessing game code
import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        Message: "Please enter your guess number between 1 and 10",
    }
]);
const userGuess = answers.userGuess;
console.log("Your guess: ", userGuess);
console.log("System generated number: ", systemGeneratedNo);
if (userGuess === systemGeneratedNo) {
    console.log("Congratulations! You guessed the number correctly!");
}
else {
    console.log("Sorry, your guess is incorrect. Please try again.");
}
