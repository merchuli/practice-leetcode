/**
 * @Problem license LeetCode

 * @Problem Link https://leetcode.com/problems/remove-duplicates-from-sorted-array/

 * @author Merchuli

	Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

    Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

    Return k after placing the final result in the first k slots of nums.

    Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

    Custom Judge:

    The judge will test your solution with the following code:

    int[] nums = [...]; // Input array
    int[] expectedNums = [...]; // The expected answer with correct length

    int k = removeDuplicates(nums); // Calls your implementation

    assert k == expectedNums.length;
    for (int i = 0; i < k; i++) {
        assert nums[i] == expectedNums[i];
    }
    If all assertions pass, then your solution will be accepted.

    Example 1:

    Input: nums = [1,1,2]
    Output: 2, nums = [1,2,_]
    Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
    Example 2:

    Input: nums = [0,0,1,1,1,2,2,3,3,4]
    Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
    Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
    It does not matter what you leave beyond the returned k (hence they are underscores).
    

    Constraints:
    a. 0 <= nums.length <= 3 * 104
    b. -100 <= nums[i] <= 100
    c. nums is sorted in non-decreasing order.
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
    const len = nums.length;
    let checkedIndex = 0;
    let currentIndex = 1;
    
    while(currentIndex < len) {
        if (nums[checkedIndex] === nums[currentIndex]) {
            nums[currentIndex] = '_';
            currentIndex += 1;
        } else {
            checkedIndex += 1;
            nums[checkedIndex] = nums[currentIndex];

            if (checkedIndex !== currentIndex) {
                nums[currentIndex] = '_';
            }

            currentIndex += 1;
        }
    }
    
    return nums.filter((x) => x !== '_').length;
};

const testcase1 = [1,1,2];
const testcase2 = [0,0,1,1,1,2,2,3,3,4];
const testcase3 = [1,2];
const testcase4 = [1,2,3];

let testcase = testcase1;
removeDuplicates(testcase);

// Comment
// Runtime: 88 ms, faster than 77.22% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 41.4 MB, less than 64.99% of JavaScript online submissions for Remove
