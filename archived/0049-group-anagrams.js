/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/group-anagrams/

 * @author Merchuli

 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 * 
 * Example 1:
 * Input: strs = ["eat","tea","tan","ate","nat","bat"]
 * Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
 * 
 * Example 2:
 * Input: strs = [""]
 * Output: [[""]]
 * 
 * Example 3:
 * Input: strs = ["a"]
 * Output: [["a"]]
 */


/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    
    const temp = {};
    for (let i = 0; i < strs.length; i++) {
        const currentKey = strs[i].split('').sort().join('');
        
        const keyList = Object.keys(temp);
        if (keyList.includes(currentKey)) {
            temp[currentKey].push(strs[i]);
        } else {
            temp[currentKey] = [strs[i]];
        }
    }
        
    return Object.values(temp);
};

var fasterGroupAnagrams = function(strs) {
    if(strs.length === 0) {
        return [[]];
    }
    
    const map = new Map();
    for (const str of strs) {
        const currentKey = str.split('').sort().join('');
        if (map.has(currentKey)) {
            const array = map.get(currentKey);
            array.push(str);
            map.set(currentKey, array);
        } else {
            map.set(currentKey, [str]);
        }
    }
    
    return Array.from(map.values());
};

const testcase1 = ["eat","tea","tan","ate","nat","bat"];
const testcase2 = [""];
const testcase3 = ["a"];

let testcase = testcase1;
groupAnagrams(testcase);

// Comment
// Runtime: 5000 ms, faster than 5.03% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 50.2 MB, less than 53.36% of JavaScript online submissions for Group Anagrams.

// Comment for faster
// Runtime: 128 ms, faster than 83.35% of JavaScript online submissions for Group Anagrams.
// Memory Usage: 48.2 MB, less than 97.31% of JavaScript online submissions for Group Anagrams.