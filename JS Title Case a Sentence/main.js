// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str){
    let strLowerCase = str.toLowerCase();
    let arrayX = strLowerCase.split(' ');
    let newStr = '';
    for (let index = 0; index<arrayX.length; index++){
        newWord = arrayX[index];
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        newStr += newWord + ' ';
    }
    return newStr;
};
console.log(titleCase("I'm a little tea pot")); 
console.log(titleCase('sHoRt AnD sToUt'));


// let titleCase="I'm a little tea pot"
// function capitalize(cap){
//   let lower = cap.toLowerCase();
//   let newTitleCase = lower.split (" ")

//   for(let i =0 ; i<newTitleCase.length; i++){
//   const word= newTitleCase[i]
//   const newWord= word.charAt(0).toUpperCase()+ word.slice(1)
//   newTitleCase[i]=newWord
//   }
//   return newTitleCase.join(" "); // convert array to string
// }

// console.log(capitalize(titleCase))