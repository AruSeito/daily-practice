/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  const path = [], res = [], used = {};
  let sum = 0;
  candidates.sort((a, b) => a - b);
  const treeBack = (startIndex) => {
    if (sum === target) {
      res.push(path);
      return;
    }

    for (let i = startIndex; i < candidates.length && sum + candidates[i] <= target; i++) {

      if (i > 0 && candidates[i] === candidates[i - 1] && used[i - 1] !== true) {
        continue;
      }
      used[i] = true;
      sum += candidates[i];
      path.push(candidates[i]);
      treeBack(i + 1);
      used[i] = false;
      sum -= candidates[i];
      path.pop();
    }
  }
  treeBack(0);
  return res;
};
// @lc code=end

