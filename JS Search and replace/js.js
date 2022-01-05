// ----------------- Search and Replace ------------------- //
// Perform a search and replace on the sentence using 
// the arguments provided and return the new sentence.

let myString = "A quick brown fox jumped over the lazy dog";

function myReplace(str, before, after){
  let words = str.split(' ');
  // console.log(words);
  for (let i=0; i<words.length; i++){
    if(words[i] == before){
      words[i] = after;
    }
  };
  return words = words.join(" ");
}

myReplace(myString, "jumped", "leaped");
console.log(myReplace(myString, "jumped", "leaped"));

// ---------- second method ------------ //
// let myString = "A quick brown fox jumped over the lazy dog";
function myReplace(str, before, after) {
  let newStr = "";
  newStr = str.replace(before,after);
  return newStr;
}
myReplace(myString, "jumped", "leaped");
console.log(myReplace(myString, "jumped", "leaped"));
// ------------------------------------- //
