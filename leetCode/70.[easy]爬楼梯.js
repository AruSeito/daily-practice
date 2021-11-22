/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  // if (n === 1 || n === 2) return n;
  // let first = 1, second = 2, sum = 0;
  // for (let i = 3; i <= n; i++) {
  //   sum = first + second;
  //   tmp = second;
  //   second = sum;
  //   first = tmp;
  // }
  // return sum;
  // const dp = [0, 1, 2];
  // if (n <= 2) return dp[n];

  // let i = 3;
  // while (i <= n) {
  //   dp[i] = dp[i - 1] + dp[i - 2];
  //   i++;
  // }
  // return dp[n];
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2; j++) {
      if (i >= j) dp[i] += dp[i - j]
    }
  }
  return dp[n]
};
// @lc code=end

