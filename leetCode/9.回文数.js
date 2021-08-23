/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

/**
 * @Solution
 * 类型：数学问题。双指针
 * 解法一：和整数反转思路一样，翻转过来之后判断是否相等即可。
 * 解法二：整成个字符串，双指针，一个从头开始，一个从尾开始，头尾相遇为截止条件。两个指针指向的值不想等的话就不是回文数。
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
// 解法1
// var isPalindrome = function (x) {
//   if (x < 0) {
//     return false;
//   }
//   let final = 0;
//   let num = x;
//   while (num !== 0) {
//     final = final * 10 + (num % 10);
//     num = Math.floor(num / 10);
//   }
//   return final === x;
// };

// 解法2
var isPalindrome = function (x) {
  if (x < 0) return false;
  const nums = x.toString().split("");
  let first = 0,
    last = nums.length - 1;
  while (first < last) {
    if (nums[first] !== nums[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = isPalindrome;
// @after-stub-for-debug-end
