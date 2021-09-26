/*
 * @lc app=leetcode.cn id=977 lang=javascript
 *
 * [977] 有序数组的平方
 */

/**
 * @solution
 * 双指针，因为是排序数组，所以最大值一定在数组的两端
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let res = [], p1 = 0, p2 = nums.length - 1, index = nums.length - 1;
  while (p1 <= p2) {
    if (nums[p1] * nums[p1] >= nums[p2] * nums[p2]) {
      res[index--] = nums[p1] * nums[p1]
      p1++
    } else {
      res[index--] = nums[p2] * nums[p2]
      p2--
    }
  }
  return res;
};
// @lc code=end

