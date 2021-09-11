/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

/**
 * @solution
 * 栈：先进栈，然后用栈顶比较是不是弹出的值，如果是那指针后移，栈弹出去。最后如果栈为空的时候则代表匹配。不为空，则不匹配
 * 
 * stack   popped   index
 * 1          4       0
 * 12         4       0
 * 123        4       0
 * 1234       4       0 相等了，那就stack出栈，index+1直到stack的栈顶不等于要出的数
 * 123        5       1
 * 1235       5       1
 * 123        3       2
 * 12         2       3
 * 1          1       4
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let stack = [], index = 0;
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length && stack[stack.length - 1] === popped[index]) {
      stack.pop();
      index++;
    }
  }
  return !stack.length
};
// @lc code=end

