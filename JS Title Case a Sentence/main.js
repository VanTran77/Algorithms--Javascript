// Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
function titleCase(str){
    let words = str.split(' ');
    let newStr = "";
    for (let i = 0; i<words.length; i++){
        newWord = words[i];
        newWord = newWord.toLowerCase();
        newWord = newWord.charAt(0).toUpperCase() + newWord.slice(1);
        newStr += newWord + ' ';
    }
    console.log(newStr);
};
titleCase("I'm a little tea pot");
titleCase("sHoRt AnD sToUt")
// titleCase("i'm a little tea pot");
// titleCase("sHoRt AnD sToUt");

