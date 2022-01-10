// ------------- Sum All Odd Fibonacci ------------------- //

let n = 10;
let n1 = 20;
let n2 = 43;
function sumOddFibs(num){
      let num1 = 1;
      let num2 = 1; 
      let arrayX = [num1, num2];
      while(num1+num2<num){
          let next = num1 + num2;
          num1 = num2;
          num2 = next;
          if (next %2 != 0){
          arrayX.push(next);
           }
      }
      console.log(arrayX);
      let sumOddArr = arrayX.reduce((a,b) => a+b )
     
      console.log(sumOddArr);

      return sumOddArr;
  }
  console.log(sumOddFibs(n));

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