/*  
Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. For numbers which are multiples of both 3 and 5 print "Marco! Polo!". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
*/

for (i=1 ; i <= 100; i++){
    marcoRem3 = i % 3; // check if number is divisible by 3
    marcoRem5 = i % 5; // check if number is divisible by 5

    if (marcoRem3 == 0 && (! marcoRem5 == 0)){  // multiple of 3 but not 5
        console.log(`Marco! \n`)
    } else if ((! marcoRem3 == 0) && marcoRem5 == 0){  // multiple of 5 but not 3
            console.log(`Polo! \n`)
    }else if ( marcoRem3 == 0 && marcoRem5 == 0){  // multiple of 3 and 5
        console.log(`Marco! Polo!. \n`) 
    } else {
        console.log(`${i} \n`) // print the number
    }
 }