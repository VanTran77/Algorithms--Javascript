// 6. Communist Censorship:
//Give array of strings X = ['Man', 'I','Love','The','Matrix','Program']
// Output output would be ['Man', 'I','Love','The','Matrix','*******']
// -------------- method 1 ---------------- //
// let arrayX = ['Man', 'I','Love','The','Matrix','Program'];
// arrayX.splice(5,1,'*******');
// console.log(arrayX);
// --------------- method 2 --------------- //
var arrayX = ['Man', 'I','Love','The','Matrix','Program'];
var wordReplace = "Program";
function replace(w, arr){
    let x = "";
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === w){
            for (let j = 0; j <  arr[i].length; j++) {
                x += "*";
                console.log("*");
            }
            arr[i]=x;
            console.log(x);
        }
    }
}
replace(wordReplace, arrayX)
console.log(arrayX);

// ------------------------------------------------------------------------ //
// 5. Remove the Negative
// let arrX = [2, 4, 6, -3, 7, 23, -45, 9];
// function removeNeg(arrX){
//     for(let i = 0; i < arrX.length ; i++){
//         if(arrX[i]<0){
//             arrX.splice(i,1);
//         }
//     }
//     console.log(arrX);
// }
// removeNeg(arrX);
// --------------------------------------------------------------------------//

// 4. Fibonacci: For a fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000
// Ex: 0 1 1 2 3 5 8 13 21 ....
// function printNums(num){
//     let num1 = 0;
//     let num2 = 1; 
//     let arrayX = [num1, num2];
//     while(num1+num2<num){
//         let next = num1 + num2;
//         num1 = num2;
//         num2 = next;
//         arrayX.push(next);
//     }
//     console.log(arrayX);
// }
// printNums(1000000);

// 3. FizzBuzz: 
// function printNums(numMin, numMax){
//     let arrayX = [];
//     for(let i=numMin; i<=numMax; i++){
//         if(i%3 === 0 && i%5 === 0){
//             arrayX.push('FizzBuzz');
//         } 
//         else if(i%3 === 0 && i%5 != 0){
//             arrayX.push('Fizz');
//             }
//         else if(i%5 === 0 && i%3 != 0){
//                 arrayX.push('Buzz');
//             }
//         else {
//          arrayX.push(i);}
//     }
//     console.log(arrayX);
// }
// printNums(1, 135);

//2. Shift the value
// let arrX = [2, 4, 6, -3, 7, 23, 3];
// function shiftEleOfArr(arrX){
//     let shiftValueOfArr = [];
//     for(let i = arrX.length-1; i >=0 ; i--){
//         shiftValueOfArr.push(arrX[i]);
//     }
//     console.log('Shift the value is:', shiftValueOfArr);
// }
// shiftEleOfArr(arrX);

//1. Addition: the values between 200 and 2700 (inclusively) that are divisible by 3 or 5 , but not both 3 and 5
// function printNums(numMin, numMax){
//     let sum = 0;
//     for(var i=numMin; i<=numMax; i++){
//         if(i%3 === 0 && i%5 !== 0){
//            sum += i; 
//         }else
//         if (i%5 === 0 && i%3 !== 0){
//             sum += i; 
//         }
//     }
//     console.log(sum);
// }
// printNums(1, 20)