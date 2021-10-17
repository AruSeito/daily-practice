/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

/**
 * @solution
 * KMP，重点在于取得Next数组，然后len % (len - next[len - 1] ) == 0
 * 如果最后一位不为0，那么最后一位为最长相同前后缀的长度
 * len - next[len - 1]为第一个周期的长度
 * 如果这个周期可以被整除，就说明整个数组就是这个周期的循环
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
const getNext = (s) => {
  let j = 0, next = [0];
  for (let i = 1; i < s.length; i++) {
    while (j > 0 && s[i] !== s[j]) {
      j = next[j - 1]
    }
    if (s[i] === s[j]) {
      j++;
    }
    next[i] = j;
  }
  return next;
}
var repeatedSubstringPattern = function (s) {
  const len = s.length;
  if (len === 0) {
    return false;
  }
  let next = getNext(s);
  if (next[len - 1] !== 0 && len % (len - next[len - 1]) === 0) {
    return true;
  }
  return false;
};
// @lc code=end

