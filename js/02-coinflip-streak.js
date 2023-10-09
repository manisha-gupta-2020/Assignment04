/*
if the random number rounds off to zero it wil be heads
 create a “coin flip streak game”. The point of this simple game is to see what kind of Heads streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game).
*/
let coinFlip, HeadStreak = 0, i = 0;
// let timesPlay = parseInt(prompt("How many times would you like to play coin flip. Enter between 1-10 :"))


do {
    coinFlip = Math.round(Math.random())
    i += 1;
    // console.log(`random number is: ${coinFlip}`)
    if (coinFlip == 0){
        console.log(`Result  of coin flip number ${i} is : "Heads" `);
        HeadStreak += 1;
        // continue;
    } else {
    console.log(`Result  of coin flip number ${i} is : "Tails" `);
    // break;
    }  
} while (coinFlip == 0);

console.log(`Head streak count is : ${HeadStreak} `);