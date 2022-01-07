let n = 4;
let n1 = 7;
let n2 = 43;
function sumOddFibs(num){
      let num1 = 1;
      let num2 = 1; 
      let arrayX = [num1, num2];
      while(num1+num2<num){
          let next = num1 + num2;
          num1 = num2;
          num2 = next;
          arrayX.push(next);
      }
      let sum = 0;
      for (let i=0; i<arrayX.length; i++){
        if(arrayX[i]%2 != 0){
          sum += arrayX[i];
        }
      }
      return sum;
  }
  console.log(sumOddFibs(20));