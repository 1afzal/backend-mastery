import { parse } from "path";
import { stdin } from "process"
import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdin
})

console.log("input a number between 1 - 10\n");
const secretNumber = Math.floor(Math.random()* 100 + 1)
let attemps = 0;
console.log(secretNumber)

function askQuestion(){
    let flag = false;
   
    const input = rl.question("Enter your guess: \n",(input)=>{
        const guess = parseInt(input)
        attemps++;
        if(guess === isNaN || guess < 1 || guess > 100){
            console.log("invalid number\n");
            askQuestion()
            return;
        }
        if(guess === secretNumber){
            console.log(`conrats youve guessed it right in ${attemps} attemps\n` )
            rl.close()
            return
        
        }
        if(guess > secretNumber){
            console.log("go lower\n");
            askQuestion()
        }
        else{
            console.log("go higher\n");
            askQuestion()
        }
   
    })
}
 
askQuestion()