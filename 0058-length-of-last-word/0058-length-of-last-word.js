/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let split=s.trim().split(' ');
    let lastword=split[split.length -1];
    return lastword.length;
};