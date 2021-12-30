// ----------------- Palindrome Checker --------------------- //

// 1. first method
// isPalindrome = (str) => {
//     for(let i=0; i<str.length; i++){
//         console.log(str.substring(i, i+1));
//         console.log(str.substring(str.length -i -1, str.length -i));
//         if (str.substring(i, i+1) !== str.substring(str.length -i -1, str.length -i)){
//             return false;
//         }
//     }
//     return true;
// }

// 2. second method
// isPalindrome = (str) => {
//     for(let i=0; i<str.length; i++){
//         console.log(str[i]);
//         console.log(str[str.length -i -1]);
//         if (str[i] !== str[str.length -i -1]){
//             return false;
//         }
//     }
//     return true;
// }

// 3. third method
// isPalindrome = (str) => {
//     for(let i=0; i<str.length / 2; i++){
//         console.log(str[i]);
//         console.log(str[str.length -i -1]);
//         if (str[i] !== str[str.length -i -1]){
//             return false;
//         }
//     }
//     return true;
// }

// 4. fourth method
isPalindrome = (str) => {
    console.log(str.split('').reverse().join(''));
    return str === str.split('').reverse().join('');
    }
    
console.log(isPalindrome("racecar"));