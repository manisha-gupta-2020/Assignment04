/*
if the random number rounds off to zero it wil be heads
*/
let coinFlip;
let timesPlay = parseInt(prompt("How many times would you like to play coin flip. Enter between 1-10 :"))
 
for (i=0; i<timesPlay; i++){
    randNum = Math.round(Math.random())
     if (randNum == 0){
        console.log(`Result  of coin flip number ${i} is : "Heads" `);
    } else {
    console.log(`Result  of coin flip number ${i} is : "Tails" `);
    }   
}