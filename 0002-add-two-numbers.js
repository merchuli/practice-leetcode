/**
 * @Problem license LeetCode
 * @Reference https://leetcode.com/problems/add-two-numbers/
 * @author Merchuli
 * 
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 *
 * 2 -> 4 -> 3
 * 5 -> 6 -> 4
 * ============
 * 7 -> 0 -> 8
 * 
 * 
 * @TestCase
 * Example 1:
 * Input: l1 = [2,4,3], l2 = [5,6,4]
 * Output: [7,0,8]
 * Explanation: 342 + 465 = 807.
 * 
 * 
 * Example 2:
 * Input: l1 = [0], l2 = [0]
 * Output: [0]
 * 
 * Example 3:
 * Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
 * Output: [8,9,9,9,0,0,0,1]
 * 
 * 
 * @Constraints
 * The number of nodes in each linked list is in the range [1, 100].
 * 0 <= Node.val <= 9
 * It is guaranteed that the list represents a number that does not have leading zeros.
 */



/**
 * Definition for singly-linked list.
 *
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    let ansList;
    let previousNode;
    let currentL1 = l1;
    let currentL2 = l2;
    let carry = 0;
    let isHeading = true;
    while (currentL1 || currentL2) {
        const value1 = currentL1 ? currentL1.val : 0;
        const value2 = currentL2 ? currentL2.val : 0;
        const remainder = (value1 + value2 + carry) % 10;
        carry = Math.floor((value1 + value2 + carry) / 10);
                
        const currentNode = new ListNode(remainder);
        if (isHeading) {
            ansList = currentNode;
            previousNode = currentNode;
            currentL1 = l1.next;
            currentL2 = l2.next;
            isHeading = false;
        } else {
            previousNode.next = currentNode;
            previousNode = currentNode;
            currentL1 = currentL1 ? currentL1.next : currentL1;
            currentL2 = currentL2 ? currentL2.next : currentL2;
        }        
    }
    
    if (carry > 0) {
        previousNode.next = new ListNode(carry);
    }
    
    return ansList;
};


/**
 * @Result
 * Runtime: 153 ms, faster than 43.89% of JavaScript online submissions for Add Two Numbers.
 * Memory Usage: 47.1 MB, less than 69.88% of JavaScript online submissions for Add Two Numbers.
 */
