/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/maximum-depth-of-binary-tree/

 * @author Merchuli

	Given a binary tree, find its maximum depth.

  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

  Note: A leaf is a node with no children.
	====================================
	Example 1:
  Given binary tree [3,9,20,null,null,15,7],
      3
     / \
    9  20
      /  \
     15   7

  return its depth = 3.
 */


function treeNode(node, depth, maxDepth) {
  if (node === null) {
      return maxDepth;
  }
  
  depth++;
  maxDepth = depth > maxDepth ? depth : maxDepth;
  
  if (node.left !== null) {
      maxDepth = treeNode(node.left, depth, maxDepth);
  }
  
  if (node.right !== null) {
      maxDepth = treeNode(node.right, depth, maxDepth);
  }
      
  return maxDepth;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  return treeNode(root, 0, 0);
};


// const test = maxDepth(treeNodeOfTestCase);

const testCase1 = [3,9,20,null,null,15,7];
const testCase2 = [0];
const testCase3 = [1,2,3,4,null,null,5];
const testCase4 = [1,2,3,4,5];


// Comment
// Runtime: 60 ms, faster than 90.89% of JavaScript online submissions for Maximum Depth of Binary Tree.
// Memory Usage: 37 MB, less than 49.24% of JavaScript online submissions for Maximum Depth of Binary Tree.
