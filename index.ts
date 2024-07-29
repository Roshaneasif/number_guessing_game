import PromptSync from "prompt-sync";
const prompt = PromptSync();
// console.log(typeof userNumber);
let min = 0;
let max = 100;
let userNumber;
let attempts = 0;
const computerNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(computerNumber);

while(userNumber!==computerNumber)
{
     userNumber = parseInt(prompt("Guess a number between '1' to '100: "));
      attempts++
     if(userNumber===computerNumber){
        console.log(`congratulations! you won the game in ${attempts} attemts`)
        break;
     }
     else if (userNumber<computerNumber){
        console.log("too low");
     }
     else if(userNumber>computerNumber){
        console.log("too high");
     }
     else
     {
        console.log("please enter a valid number");
     }
    }