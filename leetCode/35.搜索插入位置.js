/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

/**
 * @solution
 * 二分查找法。
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  const midSearch = (nums, target, start, end) => {
    if (start > end) return start;
    const mid = parseInt((start + end) / 2);
    if (nums[mid] > target) {
      return midSearch(nums, target, start, mid - 1)
    } else if (nums[mid] < target) {
      return midSearch(nums, target, mid + 1, end)
    } else {
      return mid;
    }
  }
  return midSearch(nums, target, 0, nums.length - 1)
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = searchInsert;
// @after-stub-for-debug-end