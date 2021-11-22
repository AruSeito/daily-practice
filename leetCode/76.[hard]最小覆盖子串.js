/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

/**
 * @solution
 * 滑动窗口：先统计好t中字符出现的次数，如果每个出现的次数都小于等于0，那么就缩小窗口
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

const checked = (map) => {
  for (let [key, value] of map) {
    if (value > 0) return false;
  }
  return true;
}

var minWindow = function (s, t) {
  let slow = 0, fast = 0, needMap = new Map(), res = "";
  for (let i = 0; i < t.length; i++) {
    needMap.set(t[i], needMap.get(t[i]) ? needMap.get(t[i]) + 1 : 1)
  }
  while (fast < s.length) {
    if (t.includes(s[fast])) {
      needMap.set(s[fast], needMap.get(s[fast]) - 1);
    }

    while (checked(needMap)) {
      const newRes = s.slice(slow, fast + 1);
      if (!res || newRes.length < res.length) {
        res = newRes;
      }
      if (t.includes(s[slow])) {
        needMap.set(s[slow], needMap.get(s[slow]) + 1);
      }

      slow++;
    }
    fast++;
  }
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = minWindow;
// @after-stub-for-debug-end