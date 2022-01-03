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
        console.log(n, '1');
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