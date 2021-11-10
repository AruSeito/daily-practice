/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let candyNumbs = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candyNumbs[i] = candyNumbs[i - 1] + 1;
    }

  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candyNumbs[i] = Math.max(ratings[i + 1] + 1, candyNumbs[i]);
    }
  }

  let sum = 0;
  for (let i = 0; i < sugNumbers.length; i++) {
    sum += sugNumbers[i];
  }
  return sum;
};
// @lc code=end

