/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const path = [], res = [];
  let sum = 0;

  const treeBack = (startIndex) => {
    if (sum > target) return;
    if (sum === target) {
      res.push([...path]);
      return;
    }
    // 剪叶操作可以对candidates进行从小到大排序，然后判断sum+当前值是否大于target，如果大于就提前终止了
    for (let i = startIndex; i < candidates.length; i++) {
      sum += candidates[i]
      path.push(candidates[i]);
      treeBack(i);
      path.pop();
      sum -= candidates[i];
    }
  }

  treeBack(0);

  return res;

};
// @lc code=end

