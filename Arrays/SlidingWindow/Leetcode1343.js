/*
Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.
*/
/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} threshold
 * @return {number}
 */
var numOfSubarrays = function (arr, k, threshold) {
    let count = 0;
    let requiredSum = threshold * k;
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += arr[i];
    }
    if (currSum >= requiredSum) {
        count++;
    }

    for (let i = k; i < arr.length; i++) {
        currSum += arr[i] - arr[i - k];
        if (currSum >= requiredSum) {
            count++;
        }
    }

    return count;

};

let nums = [11, 13, 17, 23, 29, 31, 7, 5, 2, 3];
let threshold = 5;
let k = 3;
console.log(numOfSubarrays(nums, k, threshold));