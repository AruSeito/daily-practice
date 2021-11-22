/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

/**
 * @solution
 * 模拟法：L的数量等于R的数量并且U的数量等于D的梳理
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let lC = 0, rC = 0, uC = 0, dC = 0;
  for (let i = 0; i < moves.length; i++) {
    switch (moves[i]) {
      case "L": {
        lC++;
        break;
      }
      case "R": {
        rC++;
        break;
      }
      case "U": {
        uC++;
        break;
      }
      case "D": {
        dC++;
        break;
      }
    }
  }
  if (lC === rC && uC === dC) {
    return true;
  }
  return false;
};
// @lc code=end

