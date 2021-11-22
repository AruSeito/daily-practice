/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let sum = 0, curRest = 0, start = 0;
  for (let i = 0; i < gas.length; i++) {
    curRest += gas[i] - cost[i];
    sum += gas[i] - cost[i];
    if (curRest < 0) {
      curRest = 0;
      start = i + 1;
    }
  }
  if (sum < 0) return -1;
  return start;
};
// @lc code=end

