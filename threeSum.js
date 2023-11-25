
/*
 Leetcode 15: Medium

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
Notice that the solution set must not contain duplicate triplets.

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */


    var threeSum = function(nums) {
        if(nums.length < 3){
            return [];
        }
    
        nums = nums.sort((a, b) => a - b);
        let result = [];
        for(let i = 0; i< nums.length - 2; i++){
        if(nums[i] > 0){
            return result;
        }
        if(i>0 && nums[i] === nums[i-1]){
            continue;
        }
    
    
         let start = i+1;
         let end = nums.length-1;
         while(start < end){
             if(start[i] > 0){
            return result;
        }
            let currSum = nums[i] + nums[start] + nums[end];
            if(currSum === 0){
                result.push([nums[i], nums[start], nums[end]]);
                while(start < end && nums[start] === nums[start+1]){
                    start++;
                }
                while(start<end && nums[end] === nums[end-1]){
                    end--
                }
                start++;
                end--;
            } else if (currSum<0){
                start++;
            } else {
                end--;
            }
            
         
        }}
        return result;
    }



