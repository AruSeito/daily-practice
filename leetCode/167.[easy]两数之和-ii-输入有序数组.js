/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

/**
 * @solution
 * 左右指针：如果相等返回位置，如果相加大于目标值，右指针-1，如果相加小于目标值，左指针-1，如果左右指针相遇，则没有结果
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1;
  while (left !== right) {
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    } else if (numbers[left] + numbers[right] < target) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
};
// @lc code=end
