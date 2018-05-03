/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/single-number/description/

 * @author Merchuli

    Problem
    136. Single Number

    Given a non-empty array of integers, every element appears twice except for one. Find that single one.

    Note:

    Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

    ====================================
    Example 1:

    Input: [2,2,1]
    Output: 1


    Example 2:

    Input: [4,1,2,1,2]
    Output: 4
     */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    var len = nums.length;
    for (var i = 0; i < len; i++) {
        var current = nums[i];
        nums[i] = '';
        if (nums.indexOf(current) === -1) {
            return current;
        } else {
            nums[i] = current;
        }
    }
};

var a = new singleNumber([4,1,2,1,2]);

/** 
 * better solution, for the reason that every elements appears "twice" except for one
 * 使用到 XOR 技巧，只要非答案的 element 出現次數是偶數都可以用這個方法
 */
// var singleNumber = function(nums) {
//     return nums.reduce((a,b)=>a^b);
// };

