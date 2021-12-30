var str = "May the force be with you";
var str1 = "The quick brown fox jumped over the lazy dog";
var maxC = 0;
function findLongestWord(s){
    let words = s.split(' ');
    for(let i=0; i<words.length; i++ ){
        if ( maxC < words[i].length){
            maxC = words[i].length;
        }
    }
    return maxC;
}
findLongestWord(str);
console.log(`The longest Word in a String: ${maxC}`);