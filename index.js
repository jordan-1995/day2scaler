/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let cleanString = s.toLowerCase();
    let finalString = cleanString.replace(/[^a-z0-9]/g, "")
    let reversedString = finalString.split("").reverse().join("");
    if (finalString == reversedString){
        return true;
    } else if(finalString != reversedString){
        return false;
    } else if(finalString==null){
        return true;
    }
};
