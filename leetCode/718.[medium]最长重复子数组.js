/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function (nums1, nums2) {
  const dp = new Array(nums1.length + 1)
    .fill(0)
    .map(() => new Array(nums2.length + 1).fill(0));
  let res = 0;

  for (let i = 1; i <= nums1.length; i++) {
    for (let j = 1; j <= nums2.length; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      if (res < dp[i][j]) res = dp[i][j];
    }
  }
  return res;
};
// @lc code=end
