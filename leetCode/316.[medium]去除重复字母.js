/*
 * @lc app=leetcode.cn id=316 lang=javascript
 *
 * [316] 去除重复字母
 */

/**
 * @solution
 * 栈。拆分做法。
 * 先去重，遍历字符串，如果栈中有了，就跳过，没有就进栈。这样可以保证字符的顺序与原来一致。
 * 这时候如果“bcabc”的话栈中只有“bca”。
 * 再做字典排序，在进栈之前先判断栈顶字符是否大于当前字符，如果大了，则出栈，然后标记一下这个字符在栈中没有了。如果小了不做操作。
 * 这时候“bcabc”对应的结果就是“abc”了，但是不满足“bcac“，”bcac“的结果是：”ac“，实际应该是“bac”。
 * 所以在出去之前得提前知道后面是不是还有这个值了。
 * 在开始以上操作前，先搞个对象记录一下各个字符出现的次数。开始遍历字符串的时候对应字符个数-1，再出栈的时候如果字符数为0了，就不要出栈了
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
  let countChar = {};
  for (let i = 0; i < s.length; i++) {
    countChar[s[i]] = countChar[s[i]] + 1 || 1;
  }
  let hasChar = {},
    stack = [];
  for (let i = 0; i < s.length; i++) {
    countChar[s[i]] = countChar[s[i]] - 1;
    if (hasChar[s[i]]) continue;
    while (stack.length && s[i] < stack[stack.length - 1]) {
      if (countChar[stack[stack.length - 1]] === 0) break;
      hasChar[stack.pop()] = false;
    }
    stack.push(s[i]);
    hasChar[s[i]] = true;
  }
  return stack.join("");
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = removeDuplicateLetters;
// @after-stub-for-debug-end
