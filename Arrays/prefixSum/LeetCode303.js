/**
 * LeetCode303
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.arr = nums;
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            continue;
        }
        nums[i] = nums[i - 1] + nums[i];
    }
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
    if (left === 0) {
        return this.arr[right];
    }
    return this.arr[right] - this.arr[left - 1];
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
let nums = [-2, 0, 3, -5, 2, -1];
var obj = new NumArray(nums)
let left = 2; let right = 5;
var param_1 = obj.sumRange(left, right)

console.log(param_1);