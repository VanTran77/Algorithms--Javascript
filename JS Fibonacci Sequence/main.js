// Fibonacci Sequence
// Immediately you find the pattern: setting the first two terms to be 1, any other term is the sum of the two previous terms. 1+1=2, 1+2=3, 2+3=5, 3+5=8, 5+8=13 and so on.
// In this way, if n would be equal to 4 your result should be 3; but if n is 7, then the result is 13.

let n = 4;
let n1 = 7;
let n2 = 43;
function FibonacciSeq(n){
    if(n <= 2){
      return 1;
    } else{
      let num1 = 1;
      let num2 = 1;
      let next = 0;
      for(let i=3; i<=n; i++){
        next = num1 + num2;
        num1=num2;
        num2=next
      }
      return next;
     
    }
  }
  console.log(FibonacciSeq(n));
  console.log(FibonacciSeq(n1));
  console.log(FibonacciSeq(n2));