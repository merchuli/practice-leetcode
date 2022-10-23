/**
 * @problem license LeetCode
 * @problem Link https://leetcode.com/problems/sample-problem/
 * @author Merchuli
 * 
 * @description
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * @example
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * @example
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * 
 * @example
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 * 
 * Constraints:
 * - 2 <= nums.length <= 104
 * - -109 <= nums[i] <= 109
 * - -109 <= target <= 109
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum1 = function(nums, target) {
  const hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
      if (hashMap.has(nums[i])) {
          return [hashMap.get(nums[i]), i];
      }

      hashMap.set(target - nums[i], i);
  }
};

const testcase1 = { nums: [2,7,11,15], target: 9 };
const testcase2 = { nums: [3,2,4], target: 6 };
const testcase3 = { nums: [3,3], target: 6 };

const ans = twoSum1(testcase1.nums, testcase1.target);
console.log('ans', ans);



/**
 * @runtime 96ms, beats 83.87%. Time complexity is O(n)
 * @memory 42.8MB, beats 41.60%. Space complexity is O(n)
 * @hashtag Hash Table
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum2 = function(nums, target) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    const index = Object.values(hashMap).indexOf(nums[i]);
    if (index !== -1) {
      return [index, i];
    }
  
    hashMap[i] = target - nums[i];
  }
};

// TODO: 使用 Object 反而比較慢，為何？