/*
 * @lc app=leetcode.cn id=881 lang=javascript
 *
 * [881] 救生艇
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  let start = 0, end = people.length - 1, res = 0;
  while (start <= end) {
    if (people[end] + people[start] <= limit) {
      end--;
      start++
    } else {
      end--;
    }
    res++;
  }
  return res;
};
// @lc code=end

