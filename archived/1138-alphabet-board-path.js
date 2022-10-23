/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/alphabet-board-path/

 * @author Merchuli

	Problem
	1138. Alphabet Board Path

	On an alphabet board, we start at position (0, 0), corresponding to character board[0][0].

	Here, board = ["abcde", "fghij", "klmno", "pqrst", "uvwxy", "z"], as shown in the diagram below.

	a b c d e
	f g h i j
	k l m n o
	p q r s t
	u v w x y
	z

	We may make the following moves:

	'U' moves our position up one row, if the position exists on the board;
	'D' moves our position down one row, if the position exists on the board;
	'L' moves our position left one column, if the position exists on the board;
	'R' moves our position right one column, if the position exists on the board;
	'!' adds the character board[r][c] at our current position (r, c) to the answer.
	(Here, the only positions that exist on the board are positions with letters on them.)

	Return a sequence of moves that makes our answer equal to target in the minimum number of moves.  You may return any path that does so.
	====================================
	Example 1:

	Input: target = "leet"
	Output: "DDR!UURRR!!DDD!"

	Example 2:
	Input: target = "code"
	Output: "RR!DDRR!UUL!R!"

	Example 3:
	Input: target = "zdz"
	Output: "DDDDD!UUUUURRR!DDDDLLLD!"
 */


/**
 * 取得字元的 ascii code
 * @param {string} char
 * @return {number}
 */
function getAsciiCode(char) {
    return char.charCodeAt(0);
}

/**
 * 取得位置，從 ascii code 取得該字元的位置
 * @param {number} targetAsciiCode
 * @return {[number, number]}
 */
function getPosition(targetAsciiCode) {
  const originAsciiCode = 97;
  const diff = targetAsciiCode - originAsciiCode;
  const yAxis = Math.floor(diff / 5);
  const xAxis = diff % 5;
    
  return [yAxis, xAxis];
};

/**
 * 取得現在位置到目標位置的路徑
 * @param {[number, number]} currPosition
 * @param {[number, number]} targetPostion
 * @return {string}
 */
function getPath(currPosition, targetPostion) {
    /** The target postion is out of the 5*5 square */
    if (targetPostion[0] === 5 && targetPostion[1] === 0) {
        const yPath = getYpath(currPosition[0], 4);
        const xPath = getXpath(currPosition[1], targetPostion[1]);
    
        return yPath + xPath + 'D';
    }
    
    const yPath = getYpath(currPosition[0], targetPostion[0]);
    const xPath = getXpath(currPosition[1], targetPostion[1]);
    
    return yPath + xPath;
}

/**
 * 取得現在位置 y 座標到目標位置 y 座標的路徑
 * @param {number} y1
 * @param {number} y2
 * @return {string}
 */
function getYpath(y1, y2) {
    const yDiff = y2 - y1;
    
    if (yDiff > 0) {
        return 'D'.repeat(yDiff);
    } else {
        return 'U'.repeat(Math.abs(yDiff));
    }
}

/**
 * 取得現在位置 x 座標到目標位置 x 座標的路徑
 * @param {number} x1
 * @param {number} x2
 * @return {string}
 */
function getXpath(x1, x2) {
    const xDiff = x2 - x1;
    
    if (xDiff > 0) {
        return 'R'.repeat(xDiff);
    } else {
        return 'L'.repeat(Math.abs(xDiff));
    }
}

/**
 * Return a sequence of moves that makes our answer equal to target in the minimum number of moves.
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function(target) {
    const targetArray = target.split('');

    let ans = '';
    let currPosition = [0, 0];
    for (const element of targetArray) {
      const targetAsciiCode = getAsciiCode(element);
      const targetPosition = getPosition(targetAsciiCode);
      const isSamePosition = targetPosition[0] === currPosition[0] && targetPosition[1] === currPosition[1];
      if (!isSamePosition) {
          ans = ans + getPath(currPosition, targetPosition);
          currPosition = targetPosition;
      }
      ans = ans + '!';
    }
    
    return ans;
};

const testCase1 = 'leet';
const testCase2 = 'code';
const testCase3 = 'zdz';

const test = alphabetBoardPath(testCase1);

// Comment
// Runtime: 44 ms, faster than 98.85% of JavaScript online submissions for Alphabet Board Path.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Alphabet Board Path.
