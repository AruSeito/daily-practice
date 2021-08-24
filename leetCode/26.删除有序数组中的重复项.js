/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

/**
 * @solution
 * 思路：快慢指针，当快慢指针指向的值相等时，快指针后移动，当不相等时，慢指针后移，然后将慢指针指向的值赋值为快指针指向的值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let slowPointer = 0,
    fastPointer = 1;
  const len = nums.length;
  while (fastPointer < len) {
    if (nums[slowPointer] === nums[fastPointer]) {
      fastPointer++;
    } else {
      slowPointer++;
      nums[slowPointer] = nums[fastPointer];
    }
  }
  return slowPointer + 1;
};
// @lc code=end
