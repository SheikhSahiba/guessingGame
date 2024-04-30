#!usr/bin/env node

import inquirer from "inquirer";
//const randomNumber=Math.random();
//console.log(randomNumber);

                //3 steps to generating guessing number 
// 1) computer will generate a random number
// 2) user input for guessing number
// 3)compare user input with computer generatative number and show the result

//const randomnumber = 12;
//const answer= await inquirer.prompt([
 //{
 //name:"userGuessingNumber",
 //type:"number",
 //message:"Please enter guess a number"
 //},
//]);
//console.log(answer);
//if (answer.userGuessingNumber===randomnumber){
 //console.log("Congratulation! You guessed right number.");
//} 
//else{
 //console.log("losser you guessed worng number");
//}
            // Ye Math.random ka method h\

const randomNumber=Math.floor(Math.random()*10+ 1);
   console.log("randomNumber");

const answer= await inquirer.prompt([
{
name:"userGuessingNumber",
type:"number",
message:"Please guess a number between 1-10:",
},
]);
console.log(answer);
if (answer.userGuessingNumber===randomNumber){
console.log("Congratulation! You guessed right number.");
} 
else{
console.log("losser you guessed worng number");
}