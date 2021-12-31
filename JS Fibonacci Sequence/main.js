let n = 4;
let n1 = 7;
let n2 = 43;
function nthFibonacci(n){
    if(n <= 2){
      return 1;
    } else{
      let num1 = 1;
      let num2 = 1;
      let next = 2;
      for(let i=3; i<=n; i++){
        next = num1 + num2;
        num1=num2;
        num2=next
      }
      return next;
     
    }
  }
  console.log(nthFibonacci(n));
  console.log(nthFibonacci(n1));
  console.log(nthFibonacci(n2));