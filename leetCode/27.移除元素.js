/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

/**
 * @Solution
 * 思路：快慢指针 跟26一样。遇到不等的，交换快慢指针的数，然后慢指针后移。
 * 优化思路：一个从尾开始，一个从头开始，如果头指针等于目标值，头指针的数换为尾指针的数，然后尾指针前移，如果不想等，则头指针后移动
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  // 思路1
  // let slowPointer = 0,
  //   fastPointer = 0;
  // while (fastPointer < nums.length) {
  //   if (nums[fastPointer] !== val) {
  //     nums[slowPointer] = nums[fastPointer];
  //     slowPointer++;
  //   }
  //   fastPointer++;
  // }
  // return slowPointer;
  // 优化思路
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeElement;
// @after-stub-for-debug-end
