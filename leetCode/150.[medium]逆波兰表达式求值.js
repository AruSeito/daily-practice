/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

/**
 * @solution
 * 栈：遇到数字放栈里，遇到符号出来两个数字，进行操作，然后将结果放到栈里。
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let resArray = [];
  for (let i = 0; i < tokens.length; i++) {
    let tmp1, tmp2;
    switch (tokens[i]) {
      case "+": {
        tmp1 = resArray.pop();
        tmp2 = resArray.pop();
        resArray.push(tmp2 + tmp1)
        break;
      }
      case "-": {
        tmp1 = resArray.pop();
        tmp2 = resArray.pop();
        resArray.push(tmp2 - tmp1)
        break;
      }
      case "*": {
        tmp1 = resArray.pop();
        tmp2 = resArray.pop();
        resArray.push(tmp2 * tmp1)
        break;
      }
      case "/": {
        tmp1 = resArray.pop();
        tmp2 = resArray.pop();
        resArray.push(parseInt(tmp2 / tmp1))
        break;
      }
      default: {
        resArray.push(Number(tokens[i]))
      }
    }

  }
  return resArray.pop();
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = evalRPN;
// @after-stub-for-debug-end