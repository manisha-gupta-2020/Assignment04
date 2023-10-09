/*
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window.

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
*/
for (i=0; i < 15; i++){
    remain = i % 2; // if remainder is 0 its even
    if (remain == 0){
        console.log(`${i} is even \n`)
    } else if (remain == 1){
            console.log(`${i} is odd \n`)
        }
 }