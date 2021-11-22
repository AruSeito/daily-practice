/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

/**
 * @solution
 * 先用二分查找找到第一个目标值，然后向两侧扩散。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0, right = nums.length - 1;
  let res = [-1, -1];
  while (left <= right) {
    const mid = parseInt((left + right) / 2);
    if (target < nums[mid]) {
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else {
      res[0] = mid;
      let leftStart = mid, rightStart = mid;
      while (nums[leftStart] === target && leftStart >= 0) {
        res[0] = leftStart;
        leftStart--;
      }
      while (nums[rightStart] === target && rightStart <= nums.length - 1) {
        res[1] = rightStart;
        rightStart++;
      }
      break;
    }
  }
  return res;
};
// @lc code=end

