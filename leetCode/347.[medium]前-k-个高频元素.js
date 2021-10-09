/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

/**
 * @solution
 * 桶排序
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let bucket = new Map(), keys = Array.from(new Set(nums));
  for (let i = 0; i < nums.length; i++) {
    if (bucket.has(nums[i])) {
      const value = bucket.get(nums[i]);
      bucket.set(nums[i], value + 1);
    } else {
      bucket.set(nums[i], 1);
    }
  }
  return keys.sort((a, b) => bucket.get(b) - bucket.get(a)).slice(0, k)
};
// @lc code=end

