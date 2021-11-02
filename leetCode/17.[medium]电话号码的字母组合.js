/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // 如果题目没给2-9，那需要先给digits去除无效的按键，然后再去执行。
  if (digits.length === 0) return [];
  const num2chart = {
    "2": "abc",
    "3": "def",
    "4": "ghi",
    "5": "jkl",
    "6": "mno",
    "7": "pqrs",
    "8": "tuv",
    "9": "wxyz"
  }
  const path = [], res = [];

  const treeBack = (index) => {
    if (path.length === digits.length) {
      res.push(path.join(""));
      return;
    }
    const key = digits[index];
    const charts = num2chart[digits[index]];
    for (let i = 0; i < charts.length; i++) {
      path.push(charts[i]);
      treeBack(index + 1);
      path.pop();
    }
  }
  treeBack(0);
  return res;
};
// @lc code=end

