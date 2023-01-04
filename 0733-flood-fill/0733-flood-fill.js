/**
 * @Problem license LeetCode
 * @ProblemLink https://leetcode.com/problems/flood-fill/description/
 * @author Merchu
 * @Description
 * An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.
 * 
 * You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].
 * 
 * To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.
 *
 * Return the modified image after performing the flood fill.
 * 
 * @Example1
 * [image]
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * 
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * 
 * Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
 * 
 * Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.
 * 
 * 
 * @Example2
 * Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0
 * 
 * Output: [[0,0,0],[0,0,0]]
 * 
 * Explanation: The starting pixel is already colored 0, so no changes are made to the image.
 * 
 * @Constraints
 * m == image.length
 * n == image[i].length
 * 1 <= m, n <= 50
 * 0 <= image[i][j], color < 216
 * 0 <= sr < m
 * 0 <= sc < n
 */

/**
* @param {number[][]} image
* @param {number} sr
* @param {number} sc
* @param {number} color
* @param {number} originColor
*/
var subFloodFill = function(image, sr, sc, color, originColor) {
  if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length) {
      return;
  }

  if (image[sr][sc] !== originColor) {
      return;
  }

  image[sr][sc] = color;
  subFloodFill(image, sr - 1, sc, color, originColor);
  subFloodFill(image, sr + 1, sc, color, originColor);
  subFloodFill(image, sr, sc - 1, color, originColor);
  subFloodFill(image, sr, sc + 1, color, originColor);
}



/**
* @param {number[][]} image
* @param {number} sr
* @param {number} sc
* @param {number} color
* @return {number[][]}
*/
var floodFill = function(image, sr, sc, color) {
  if (image[sr][sc] === color) {
      return image;
  }

  const originColor = image[sr][sc];
  subFloodFill(image, sr, sc, color, originColor);
  return image;
};

const testcase1 = {
  image: [[1,1,1],[1,1,0],[1,0,1]],
  sr: 1,
  sc: 1,
  color: 2,
};

const testcase2 = {
  image: [[0,0,0],[0,0,0]],
  sr: 0,
  sc: 0,
  color: 0,
};

const testcase3 = {
  image: [[0,1,0],[0,0,0]],
  sr: 0,
  sc: 0,
  color: 2,
};

let testcase = testcase1;
console.log(floodFill(testcase.image, testcase.sr, testcase.sc, testcase.color));

/**
* @TimeComplexity O(N), N = m*n, the number of pixels in the image. We might process every pixel.
* @SpaceComplexity O(N), N = m*n, the size of the implicit call stack when calling dfs.
* @Runtime 82 ms, beats 82.9%
* @Memory 43.8 MB, beats 88.55%
*/
