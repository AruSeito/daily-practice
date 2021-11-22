/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 */

/**
 * @solution
 * 模拟法
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (!matrix.length) return [];
  let left = 0, top = 0, right = matrix[0].length - 1, bottom = matrix.length - 1;
  const totalCount = matrix[0].length * matrix.length;
  let num = 1;
  let res = [];
  while (num <= totalCount) {
    for (let i = left; i <= right && num <= totalCount; i++) {
      res.push(matrix[top][i]);
      num++;
    }
    top++;
    for (let i = top; i <= bottom && num <= totalCount; i++) {
      res.push(matrix[i][right])
      num++;
    }
    right--;
    for (let i = right; i >= left && num <= totalCount; i--) {
      res.push(matrix[bottom][i]);
      num++;
    }
    bottom--;
    for (let i = bottom; i >= top && num <= totalCount; i--) {
      res.push(matrix[i][left]);
      num++;
    }
    left++;

  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = spiralOrder;
// @after-stub-for-debug-end