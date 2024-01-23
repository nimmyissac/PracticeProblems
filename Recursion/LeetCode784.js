/*

784. Letter Case Permutation
Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

Return a list of all possible strings we could create. Return the output in any order.

Example 1:
Input: s = "a1b2"
Output: ["a1b2","a1B2","A1b2","A1B2"]

Example 2:
Input: s = "3z4"
Output: ["3z4","3Z4"]

*/


/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
    let result = [];

    let helper = function (partialSn, index) {
        if (index === s.length) {
            result.push(partialSn.join(''));
            return;
        }

        if (isNaN(s[index])) {
            partialSn.push(s[index].toUpperCase());
            helper(partialSn, index + 1);
            partialSn.pop();
            partialSn.push(s[index].toLowerCase());
            helper(partialSn, index + 1);
            partialSn.pop();
        } else {
            partialSn.push(s[index]);
            helper(partialSn, index + 1);
            partialSn.pop();
        }
    }

    helper([], 0);
    return result;
};

console.log(letterCasePermutation("a1b2"));
console.log(letterCasePermutation("3Z4"));

