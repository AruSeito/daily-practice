/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

/**
 * @solution
 * 思路：滑动窗口，头指针从hayStack的头开始，尾由needle长度决定。裁剪hayStack的[head, tail)与needle相比，相等就返回head，不相等就head++，tail++
 * 方法二：KMP，重点在于构建next数组
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const getNext = (needle) => {
  let j = 0, next = [0];
  for (let i = 1; i < needle.length; i++) {
    while (j > 0 && needle[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (needle[i] === needle[j]) {
      j++;
    }
    next[i] = j;
  }

  return next;
}

var strStr = function (haystack, needle) {
  if (needle.length === 0) {
    return 0;
  }
  let j = 0;
  let next = getNext(needle);
  for (let i = 0; i < haystack.length; i++) {
    while (j > 0 && haystack[i] !== needle[j]) {
      j = next[j - 1];
    }
    if (haystack[i] === needle[j]) {
      j++;
    }
    if (j === needle.length) {
      return i - needle.length + 1
    }
  }
  return -1;
};
// var strStr = function (haystack, needle) {
//   let head = 0, tail = needle.length;
//   if (needle.length === 0) {
//     return 0;
//   }
//   if (haystack.length === 0) {
//     return -1;
//   }
//   while (tail <= haystack.length) {
//     if (haystack.substring(head, tail) === needle) { return head; }
//     head++;
//     tail++;
//   }

//   return -1;
// };
// @lc code=end


// @after-stub-for-debug-begin
module.exports = strStr;
// @after-stub-for-debug-end