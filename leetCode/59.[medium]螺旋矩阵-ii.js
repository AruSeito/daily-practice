/*
 * @lc app=leetcode.cn id=59 lang=javascript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let left = 0, top = 0, right = n - 1, bottom = n - 1;
  const totalNum = n * n;
  let num = 1;
  let res = new Array(n).fill(0).map(() => new Array(n).fill(0));
  while (num <= totalNum) {
    for (let i = left; i <= right; i++) res[top][i] = num++;
    top++;
    for (let i = top; i <= bottom; i++) res[i][right] = num++;
    right--;
    for (let i = right; i >= left; i--) res[bottom][i] = num++;
    bottom--;
    for (let i = bottom; i >= top; i--) res[i][left] = num++;
    left++;
  }
  return res;
};
// @lc code=end

