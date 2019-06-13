/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/height-checker/

 * @author Merchuli

	Problem
	1051. Height Checker

	Students are asked to stand in non-decreasing order of heights for an annual photo.

  Return the minimum number of students not standing in the right positions.  (This is the number of students that must move in order for all students to be standing in non-decreasing order of height.)
	====================================
	Example 1:
  Input: [1,1,4,2,1,3]
  Output: 3
  Explanation: 
  Students with heights 4, 3 and the last 1 are not standing in the right positions.
 */


/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  let sortedHeights = [...heights];
   
  return sortedHeights.sort((a, b) => a - b).reduce((acc, cur, index) => cur !== heights[index] ? acc + 1 : acc, 0);
};

const test = heightChecker([1,1,4,2,1,3]);

// Comment
// Runtime: 64 ms, faster than 42.50% of JavaScript online submissions for Height Checker.
// Memory Usage: 35.1 MB, less than 100.00% of JavaScript online submissions for Height Checker.
