/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/reverse-linked-list/

 * @author Merchuli

	Problem
	206. Reverse Linked List

	Reverse a singly linked list.
	====================================
	Example 1:
  Input: 1->2->3->4->5->NULL
  Output: 5->4->3->2->1->NULL
 */


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  if (head === null || head.next === null) {
      return head;
  }
  
  let newList = reverseList(head.next);

  head.next.next = head;
  head.next = null;
  
  return newList;
};

const testNode = {
  val: 1,
  next:
    {
      val: 2,
      next:
      {
        val: 3,
        next:
        {
          val: 4,
          next:
          {
            val: 5,
            next: null
          }
        }
      }
    }
};

reverseList(testNode);

// 5
// 4->5->4
// 5->4
// 3->4->5->4->3
// 5->4->3
// 2->3->5->4->3->2
// 5->4->3->2
// 1->2->5->4->3->2->1
// 5->4->3->2->1
