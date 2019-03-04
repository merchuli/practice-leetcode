/**
 *  @Problem license LeetCode
 *  @author Merchuli

	Problem
	1. Two Sum

	Given an array of integers, return indices of the two numbers such that they add up to a specific target.
	You may assume that each input would have exactly one solution, and you may not use the same element twice.

	====================================
	Example:

	Given nums = [2, 7, 11, 15], target = 9,

	Because nums[0] + nums[1] = 2 + 7 = 9,
	return [0, 1].
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var i = 0;
    var j = 1;
    
    while(i < (nums.length -1)) {
       if (nums[i] + nums[j] !== target) {
           if (j !== nums.length) {
               j++;
           } else {
               i++;
               j = i + 1;
           }
       } else {
           break;
       }
    }
    return [i, j];
};

var a = new twoSum([2, 7, 11, 15], 9);