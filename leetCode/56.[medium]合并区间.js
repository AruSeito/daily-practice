/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let res = [], flag = false;

  for (let i = 1; i < intervals.length; i++) {
    let start = intervals[i - 1][0];
    let end = intervals[i - 1][1];
    while (i < intervals.length && end >= intervals[i][0]) {
      end = Math.max(end, intervals[i][1]);
      if (i === intervals.length - 1) flag = true;
      i++;
    }
    res.push([start, end])

  }

  if (!flag) {
    res.push(intervals[intervals.length - 1])
  }

  return res;
};
// @lc code=end

