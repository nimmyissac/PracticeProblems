/*
560. Subarray Sum Equals K

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;

    let helper = (index, sum) => {
       
       if(sum === 0){
         count ++;

       }
    }

    return count;
};

var subarraySumBruteForce = function (nums, k) {
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (j = i; j < nums.length; j++) {
            sum += nums[j];
            if (sum > k) {
                break;
            }
            if (sum === k) {
                count++;
            }
        }
    }

    return count;
};

console.log(subarraySum([1, 2, 1, 2, 1], 3))