/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

/**
 * @solution
 * 二分查找法：重点是确认区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 递归

  // const midSearch = (nums, target, start, end) => {
  //   if (start > end) return start;
  //   const mid = parseInt((start + end) / 2);
  //   if (nums[mid] > target) {
  //     return midSearch(nums, target, start, mid - 1)
  //   } else if (nums[mid] < target) {
  //     return midSearch(nums, target, mid + 1, end)
  //   } else {
  //     return mid;
  //   }
  // }
  // return midSearch(nums, target, 0, nums.length - 1)

  // 迭代
  let left = 0, right = nums.length - 1, mid = parseInt((left + right) / 2);
  while (left <= right) {
    mid = parseInt((left + right) / 2);
    if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return right + 1;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end