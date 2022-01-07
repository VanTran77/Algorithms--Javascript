// ----------------- return a number -------------------- //

var str = "May the force be with you";
var str1 = "The quick brown fox jumped over the lazy dog";
var max = 0;
function findLongestWord(s){
    let arrayX = s.split(' ');
    for(let index=0; index<arrayX[index].length; index++){
        if ( max < arrayX[index].length){
            max = arrayX[index].length;
        }
    }
    return max;
}
findLongestWord(str);
console.log(`The longest Word in a String: ${max}`);

// ----------------- return a string -------------------- //

// var str = "May the force be with you";
// var str1 = "The quick brown fox jumped over the lazy dog";
// var max = "";
// function findLongestWord(s){
//     let arrayX = s.split(' ');
//     for(let index=0; index<arrayX.length; index++ ){
//         if ( max.length < arrayX[index].length){
//             max = arrayX[index];
//         }
//     }
//     return max;
// }
// findLongestWord(str);
// console.log(`The longest Word in a String: ${max}`);