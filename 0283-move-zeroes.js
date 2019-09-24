/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/move-zeroes/

 * @author Merchuli

	Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

	====================================
	Example 1:
  	Input: [0,1,0,3,12]
	Output: [1,3,12,0,0]

	Note:
	1. You must do this in-place without making a copy of the array.
	2. Minimize the total number of operations.
 */


/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    /** Find the first number which is nonZero */
    let zeroIndex = null;
    for (let cur = 0; cur < nums.length ; cur++) {
        if (nums[cur] !== 0 && zeroIndex !== null) {
            /** Swap */
            let temp = nums[zeroIndex];
            nums[zeroIndex] = nums[cur];
            nums[cur] = temp;

            zeroIndex++;
        }
        
        if (zeroIndex === null && nums[cur] === 0) {
            zeroIndex = cur;
        }
    }

    return nums;
};

const testcase1 = [0,1,0,3,12];
const testcase2 = [1,2];
const testcase3 = [3,0,9,1,0];
const testcase4 = [0,0,0,1];

const testcase = testcase1;
moveZeroes(testcase);

// Comment
// * Runtime: 48 ms, faster than 99.78% of JavaScript online submissions for Move Zeroes.
// Memory Usage: 35.9 MB, less than 36.17% of JavaScript online submissions for Move Zeroes.
