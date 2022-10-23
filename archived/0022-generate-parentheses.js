/**
 * TODO: 再想想其他解法
 * @Problem license LeetCode
 * @Reference https://leetcode.com/problems/generate-parentheses/
 * @author Merchuli
 * 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 *
 * 
 * @TestCase
 * Input: n = 3
 * Output: ["((()))","(()())","(())()","()(())","()()()"]
 * 
 * 
 * Example 2:
 * Input: n = 1
 * Output: ["()"]
 * 
 * 
 * @Constraints
 * 1 <= n <= 8
 */


/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    if (n === 1) {
        return ['()'];
    }
    
    const ans = [];
    const generateAll = (str, leftCount, rightCount, totalCount, ans) => {
        if (str.length === totalCount * 2) {
            return ans.push(str);
        }
        
        if (leftCount > rightCount) {
            generateAll(`${str})`, leftCount, rightCount + 1, totalCount, ans);
        }
        
        if (leftCount < totalCount) {
            generateAll(`${str}(`, leftCount + 1, rightCount, totalCount, ans);
        }
        
    }
    
    generateAll('', 0, 0, n, ans);
    return ans;
};


/**
 * @Result 1
 * Runtime: 60 ms, faster than 97.21% of JavaScript online submissions for Generate Parentheses.
 * Memory Usage: 42.1 MB, less than 97.54% of JavaScript online submissions for Generate Parentheses.
 * 
 * @Reference
 * https://leetcode.com/problems/generate-parentheses/discuss/2156462/JavaScript-or-Recursive-or-faster-than-95
 */


/** ====================================================== */
/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {

 }
// 最一開始想到的解法，但是 n = 4 時就會出錯 
//     const singleParentheses = '()';
    
//     if (n === 1) {
//         return [singleParentheses];   
//     } else {
//         console.log('hello', n);
//         const childParenthesis = generateParenthesis(n-1);
//         console.log('childParenthesis', childParenthesis);


//         const data1 = childParenthesis.map((item) => `(${item})`);
//         console.log('data1', data1);
        
//         const data2 = childParenthesis.map((item) => `${item}()`);
//         console.log('data2', data2);
        
//         const data3 = childParenthesis.map((item) => `()${item}`);
//         console.log('data3', data3);
        
//         const all = [...data1, ...data2, ...data3];
//         const ans = new Set(all);
//         return [...ans].sort();
//     }



// 應該是相關的：https://leetcode.com/problems/valid-parentheses