/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/hamming-distance/description/

 * @author Merchuli

	Problem
	461. Hamming Distance

	The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

  Given two integers x and y, calculate the Hamming distance.

  Note:
  0 ≤ x, y < 231.
	====================================
	Example:
  Input: x = 1, y = 4

  Output: 2

  Explanation:
  1   (0 0 0 1)
  4   (0 1 0 0)
         ↑   ↑

  The above arrows point to positions where the corresponding bits are different.
 */


/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    /** 將兩者 XOR，並將差值轉成二進位 */
    var hammingNum = (x^y).toString(2);
    var hammingArray = hammingNum.split('');
    
    return hammingArray.reduce((a, b) => a + Number(b), 0);
};