/*
 * @lc app=leetcode.cn id=1221 lang=javascript
 *
 * [1221] 分割平衡字符串
 */

/**
 * @solution
 * 遍历字符串，分别记录R和L的数量，当R的个数等于L的个数时，就代表已经出现了平衡字符串，重置left和right的个数，进行下一次遍历即可。
 * /

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
  let leftNum = 0,
    rightNum = 0,
    maxNum = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "R") rightNum++;
    if (s[i] === "L") leftNum++;
    if (leftNum === rightNum) {
      maxNum++;
      leftNum = 0;
      rightNum = 0;
    }
  }
  return maxNum;
};
// @lc code=end
