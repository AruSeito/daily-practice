/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

/**
 * @solution
 * 回溯法
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let track = [];

  const backtrack = (path, selectList) => {
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    for (let i = 0; i < selectList.length; i++) {
      if (path.indexOf(selectList[i]) !== -1) continue;
      path.push(selectList[i]);
      backtrack(path, selectList);
      path.pop();
    }
  }
  backtrack(track, nums);
  return result;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = permute;
// @after-stub-for-debug-end