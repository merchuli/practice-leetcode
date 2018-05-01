/**
 *  @Problem license LeetCode
 *  @Problem Link https://leetcode.com/problems/3sum/description/
 *  @author Merchuli

    Problem
    1. Three Sum

    Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0
    Find all unique triplets in the array which gives the sum of zero.

    Note:
    The solution set must not contain duplicate triplets.

    ====================================
    Example:

    Given array nums = [-1, 0, 1, 2, -1, -4],

    A solution set is:
    [
      [-1, 0, 1],
      [-1, -1, 2]
    ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    /** Solution Idea
     *  1. a + b = (-c)
     *  2. non-positive number + positive number <= positive number
     *  
     *  Get TLE, 311 / 313 test cases passed.
     *  todo, to be optimized
     */
    var ans = [];
    var ansString = [];
    var len = nums.length;
    
    /** check length */
    if (len < 3) {
        return ans;
    }
    
    /** 1. Sorting */
    var sortedNums = nums.sort(function(a, b) {
        return a - b;
    });
    
    /** Record the previous one, avoid duplication */
    var prev = sortedNums[0];
    for (var i = 0; i < len - 2 ; i++) {
        if (sortedNums[i] > 0 ) {
            break;
        }

        /** 確認是否跟前一個相同 */
        if (i !== 0 && sortedNums[i] === prev) {
            continue;
        } else {
            prev = sortedNums[i];
        }

        for (var j = len -1 ; j > i ; j--) {
            if (sortedNums[j] < 0) {
                break;
            }
            
            var target = 0;
            if ((sortedNums[i] + sortedNums[j]) !== 0) {
                /** 原則 1 */
                target = (sortedNums[i] + sortedNums[j]) * (-1);    
            }    
            
            /** 原則 2 判定 */
            if (target > sortedNums[j]) {
                break;
            }
            
            /** find interval */
            var targetIndex = sortedNums.slice(i+1, j).indexOf(target);
            var group = [sortedNums[i], target, sortedNums[j]];
            /** 確認 target 在數字陣列裡 且 該組答案不存在於過去的答案陣列中 */
            if (targetIndex !== -1 && ansString.indexOf(group.toString()) === -1) {
                ans.push(group);
                ansString.push(group.toString());
            }
        }
    }
   
    return ans;
};

var a = new threeSum([-1, 0, 1, 2, -1, -4]);
