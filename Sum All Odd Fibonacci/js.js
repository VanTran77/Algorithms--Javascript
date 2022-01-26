// ------------- Sum All Odd Fibonacci ------------------- //
// Given a positive integer num, return the sum of all odd Fibonacci numbers 
// that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers. 
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers 
// less than 10 are 1, 1, 3, and 5.

// ---------------- stand-up class ----------------------- //
function sumFibs(num) {
  let fibonacciArray = []
  for (let i = 0; i < num; i++) {
      if (i < 2) {
          fibonacciArray[i] = 1;
      } else {
          fibonacciArray[i] = fibonacciArray[i - 1] + fibonacciArray[i - 2];
      }
  }
  var sumOddFibonacci = 0;
  var sumEvenFibonacci = 0;

  for (let i = 0; i < fibonacciArray.length; i++) {
      if(fibonacciArray[i] <= num){
          if (fibonacciArray[i] % 2 === 0) {
              sumEvenFibonacci += fibonacciArray[i]
          } else if (fibonacciArray[i] % 2 === 1) {
              sumOddFibonacci += fibonacciArray[i]
          }
      }
  }
  console.log(`sum odd => ${sumOddFibonacci}`)
  console.log(`sum even => ${sumEvenFibonacci}`)

}
sumFibs(20);


// -------------------------------------------------------- //
// let n = 10;
// let n1 = 20;
// let n2 = 43;
// function sumOddFibs(num){
//       let num1 = 1;
//       let num2 = 1; 
//       let arrayX = [num1, num2];
//       while(num1+num2<num){
//           let next = num1 + num2;
//           num1 = num2;
//           num2 = next;
//           if (next %2 != 0){
//           arrayX.push(next);
//            }
//       }
//       console.log(arrayX);
//       let sumOddArr = arrayX.reduce((a,b) => a+b )
     
//       console.log(sumOddArr);

//       return sumOddArr;
//   }
//   console.log(sumOddFibs(n));

  // ------------- second method ------------------- //

// let n = 4;
// let n1 = 7;
// let n2 = 43;
// function sumOddFibs(num){
//       let num1 = 1;
//       let num2 = 1; 
//       let arrayX = [num1, num2];
//       while(num1+num2<num){
//           let next = num1 + num2;
//           num1 = num2;
//           num2 = next;
//           if (next %2 != 0){
//             arrayX.push(next);
//           }
//       }
//       console.log(arrayX);
//       let sum = 0;
//       for (let i=0; i<arrayX.length; i++){
//         if(arrayX[i]%2 != 0){
//           sum += arrayX[i];
//         }
//       }
//       return sum;
//   }
//   console.log(sumOddFibs(44));