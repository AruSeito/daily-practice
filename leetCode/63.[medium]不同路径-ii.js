/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const row = obstacleGrid.length;
  const col = obstacleGrid[0].length;
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0));

  for (let i = 0; i < row && obstacleGrid[i][0] === 0; i++) {
    dp[i][0] = 1
  }
  for (let i = 0; i < col && obstacleGrid[0][i] === 0; i++) {
    dp[0][i] = 1
  }

  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
    }
  }

  return dp[row - 1][col - 1]
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = uniquePathsWithObstacles;
// @after-stub-for-debug-end