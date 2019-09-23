/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/fizz-buzz/

 * @author Merchuli

	Write a program that outputs the string representation of numbers from 1 to n.

	But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.
	====================================
	Example 1:
  	n = 15,

	Return:
	["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 */


/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let ans = [];
    const multipleOfThree = 'Fizz';
    const multipleOfFive = 'Buzz';
    const multipleOfBoth = 'FizzBuzz';
    
    
    for (let i = 1; i <= n ; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            ans.push(multipleOfBoth);
            continue;
        }
        
        if (i % 3 === 0) {
            ans.push(multipleOfThree);
            continue;
        }
        
        if (i % 5 === 0) {
            ans.push(multipleOfFive);
            continue;
        }
        
        ans.push(i.toString());
    }
    
    return ans;
};

fizzBuzz(15);
