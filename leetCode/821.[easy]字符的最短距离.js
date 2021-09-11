/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

/**
 * @solution
 * 方法1:两次遍历，正向遍历一次记录一部分结果，反向再遍历一次，跟之前的取最小值。
 * 方法2:暴力法：正向遍历第一次存储所有符合的索引，第二次遍历的时候计算出跟每个索引的差值，取最小的放到结果集里
 */

// @lc code=start
/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
  let res = [], index = Number.MAX_SAFE_INTEGER;
  // 形如"loveleetcode"，正向遍历不会求到“lov“的结果，而结尾的”code“的d也取的不是最近的。
  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) index = i;
    res[i] = Math.abs(i - index);
  }

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === c) index = i;
    res[i] = Math.min(res[i], Math.abs(index - i));
  }
  return res;
};
// @lc code=end

