/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let currSum = 0;
    for (let i = 0; i < k; i++) {
        currSum += nums[i];
    }
    let maxSum = currSum;
    for (let i = k; i < nums.length; i++) {
        currSum = currSum - nums[i - k] + nums[i];
        maxSum = Math.max(currSum, maxSum);
    }
    return maxSum / k;

};
let nums = [1, 12, -5, -6, 50, 3];
let k = 4;
console.log(findMaxAverage(nums, k));