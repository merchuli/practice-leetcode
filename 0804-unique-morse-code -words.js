/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/unique-morse-code-words/description/

 * @author Merchuli

	Problem
	804. Unique Morse Code Words

	International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, 
  as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

  For convenience, the full table for the 26 letters of the English alphabet is given below:

  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-.-....-", (which is the concatenation "-.-." + "-..." + ".-"). We'll call such a concatenation, the transformation of a word.

  Return the number of different transformations among all words we have.
	====================================
	Example:
  Input: words = ["gin", "zen", "gig", "msg"]
  Output: 2
  Explanation: 
  The transformation of each word is:
  "gin" -> "--...-."
  "zen" -> "--...-."
  "gig" -> "--...--."
  "msg" -> "--...--."

  There are 2 different transformations, "--...-." and "--...--.".
 */


/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
    var morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    var transformations = [];
    var originCode = 'a'.charCodeAt(0);
    for(var i=0; i < words.length; i++) {   
        var concatenation = '';
        for(var j = 0; j < words[i].length; j++){
            var index = words[i].charCodeAt(j) - originCode;
            concatenation = concatenation + morseCode[index];
        }
        
        if (transformations.indexOf(concatenation) === -1) {
            transformations.push(concatenation);
        }
    }
    
    return transformations.length;
};

var a = new uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);