/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/to-lower-case/

 * @author Merchuli

	Problem
	709. To Lower Case

	Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.
	====================================
	Example 1:
  Input: "Hello"
  Output: "hello"

  Example 2:
  Input: "LOVELY"
  Output: "lovely"
 */


/**
 * @param {string[]} words
 * @return {number}
 */
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let ans = str;
  let i =0;
  while( i < str.length) {
    let target = ans.charCodeAt(i);
    if (target <= 90 && target >= 65) {
        ans = ans.replace(ans[i], String.fromCharCode(target + 32));
    }
    i++;
  }
  
  return ans;
};

let test = toLowerCase('Hello woRld');
