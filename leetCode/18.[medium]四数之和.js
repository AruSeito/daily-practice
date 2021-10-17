/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const len = nums.length;
  if (len < 4) return [];
  nums.sort((a, b) => a - b);
  let res = new Set();
  for (let i = 0; i < len - 3; i++) {
    for (let j = i + 1; j < len - 2; j++) {
      let left = j + 1, right = len - 1;
      while (left < right) {
        const sum = nums[i] + nums[j] + nums[left] + nums[right];
        if (sum < target) {
          left++;
          continue;
        }
        if (sum > target) {
          right--;
          continue;
        }
        res.add(`${nums[i]},${nums[j]},${nums[left]},${nums[right]}`);
        left++;
        right--;
      }
    }
  }
  return Array.from(res).map(s => s.split(","))
};
// @lc code=end

