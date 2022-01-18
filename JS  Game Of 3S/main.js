// ---------------------- Game of 3s --------------------------------- //
// We want to play a "Game of 3s". Here's how you play it:
// First, you pick a random number. Then, repeatedly do the following:
// If the number is divisible by 3, divide it by 3.
// If it's not, either add 1 or subtract 1 (to make it divisible by 3), then divide it by 3.
// The game stops when you reach "1".

function gamesOf3S(num){
    var n = num;
    while (n != 1){
        let x = n%3;
        if( x == 1 ){
            console.log(n, '-1');
            n = n -1;
        } else if ( x == 2){
        console.log(n, '+1');
        n = n +1;
        }
        else if ( x == 0){
         console.log(n, '0');
        }
        n = n/3;  
    }
    console.log(n);
}

gamesOf3S(100);

// --------------------------------------------------------- /

function gameOfThree(num) {
    //creat a variable and put user input in it 
    let number = num;
    //creat a variable for store number Modulus 3 | we only have three out put for it 
    // 0 , 1 , 2
    let numberModulus = number % 3;
    //creat a loop and when we reach to 1 we are going outside of loop 
    while (number != 1) {
        //when numberModulus is equal 0
        if (numberModulus === 0) {
            console.log(number, '0');
            number = number / 3;
            numberModulus = number % 3;
        //when numberModulus is equal  1
        } else if (numberModulus === 1) {
            console.log(number, '-1')
            number = (number - 1) / 3;
            numberModulus = number % 3;
        //when numberModulus is equal 2
        } else if (numberModulus === 2) {
            console.log(number, '+1');
            number = (number + 1) / 3;
            numberModulus = number % 3;

        }
    }
    console.log(numberModulus);
}

gameOfThree(100);