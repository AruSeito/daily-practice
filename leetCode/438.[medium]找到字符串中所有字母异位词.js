/*
 * @lc app=leetcode.cn id=438 lang=javascript
 *
 * [438] 找到字符串中所有字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  let slow = 0, fast = 0, res = [];
  let needArray = new Array(26).fill(0);
  for (let i = 0; i < p.length; i++) {
    needArray[p[i].charCodeAt() - "a".charCodeAt()]++;
  }
  let hasArray = new Array(26).fill(0);
  while (fast < s.length) {
    if (fast - slow + 1 < p.length) {
      hasArray[s[fast].charCodeAt() - "a".charCodeAt()]++;
      fast++;
    } else {
      hasArray[s[fast].charCodeAt() - "a".charCodeAt()]++;
      if (hasArray.toString() === needArray.toString()) {
        res.push(slow);
      }
      fast++;
      hasArray[s[slow].charCodeAt() - "a".charCodeAt()]--;
      slow++;
    }
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = findAnagrams;
// @after-stub-for-debug-end