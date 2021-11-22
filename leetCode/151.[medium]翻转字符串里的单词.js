/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

/**
 * @solution
 * 双指针
 * 先去相邻空格，然后再整个字符串反转，再按单词反转
 */
// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

const removeDupSpace = (s) => {
  let fast = 0, slow = 0, res = Array.from(s);
  while (fast < res.length && res[fast] === " ") {
    fast++;
  }
  while (fast < res.length) {
    if (fast - 1 > 0 && res[fast] === res[fast - 1] && res[fast] === " ") {
      fast++;
      continue;
    }
    res[slow] = res[fast];
    slow++;
    fast++;
  }
  if (slow - 1 > 0 && res[slow - 1] === " ") {
    res.length = slow - 1;
  } else {
    res.length = slow;
  }
  return res;
}
const reverse = (arr, start, end) => {
  let left = start, right = end, res = [...arr];
  while (left < right) {
    [res[left], res[right]] = [res[right], res[left]];
    left++;
    right--;
  }
  return res;
}
var reverseWords = function (s) {
  const chartArray = removeDupSpace(s);
  let reverseRes = reverse(chartArray, 0, chartArray.length - 1);
  let start = 0;
  for (let i = 0; i <= reverseRes.length; i++) {
    if (reverseRes[i] === " " || i === reverseRes.length) {
      reverseRes = reverse(reverseRes, start, i - 1);
      start = i + 1;
    }
  }
  return reverseRes.join("")
};

// @lc code=end


// @after-stub-for-debug-begin
module.exports = reverseWords;
// @after-stub-for-debug-end