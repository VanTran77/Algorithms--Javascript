// --------------------- Magic Squares -------------------------------- //
//A 3x3 magic square is a 3x3 grid of the numbers 1-9 such that each row, 
//column, and major diagonal adds up to 15.

let array1 = [8, 1, 6, 3, 5, 7, 4, 9, 2];
let array2 = [2, 7, 6, 9, 5, 1, 4, 3, 8];
let array3 = [3, 5, 7, 8, 1, 6, 4, 9, 2];
let array4 = [8, 1, 6, 7, 5, 3, 4, 9, 2];

function magicSquares(arr){
  if ((arr[0]+arr[1]+arr[2])/3== arr[4] 
  && (arr[3]+arr[4]+arr[5])/3==arr[4] 
  && (arr[6]+arr[7]+arr[8])/3==arr[4]
  && (arr[0]+arr[3]+arr[6])/3==arr[4] 
  && (arr[1]+arr[4]+arr[7])/3==arr[4] 
  && (arr[2]+arr[5]+arr[8])/3==arr[4]) {  
  return true; }
  else return false;
}

console.log(magicSquares(array1)); 
console.log(magicSquares(array2));
console.log(magicSquares(array3));
console.log(magicSquares(array4));