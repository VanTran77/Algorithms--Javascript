// ------------ 3rd Highest Number in Array ----------------//

// ----------------- best method ------------------------- //

const arrayX = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
let newArray = [];

function find3rdMaxNum(arr){
    for(let i=0; i<2; i++){
        arr = arr.slice(); // copy the array
        // splice: remove index; arr.indexOf: return index position; Math.max: get max num in array
        arr.splice(arr.indexOf(Math.max(...arr)),1); 
    }
    newArray = arr;
    return Math.max(...newArray);
}

find3rdMaxNum(arrayX);
// ------------------------------------------------------- //

// ------------------ first method ----------------------- //

// var arrayX = [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31];
// var one = -9999;
// var two = -9999;
// var three = -9999;
// function get3rdNum(arrayX){
//     for(var i=0; i<=arrayX.length; i++){
//         var num = arrayX[i];
//         if(num > three){
//             three = num;
//             if (num >= two) {
//                 three = two;
//                 if (num >= one){
//                     two = one;
//                     one = num;
//                 }else {
//                     two = num;
//                 }
//             }
//         }
//     }
//     // console.log(one, two, three);
//     console.log(`3rd Highest number is: ${three}}`);
// }
// get3rdNum(arrayX);