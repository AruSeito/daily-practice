/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  const res = [];
  const juzhen = new Array(n).fill([]).map(() => new Array(n).fill("."));


  const isValid = (row, col) => {
    for (let r = 0; r < n; r++) {
      if (juzhen[r][col] === "Q") { return false; }
    }

    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (juzhen[i][j] === "Q") return false;
    }

    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
      if (juzhen[i][j] === "Q") return false;
    }
    return true;
  }
  const juzhenToRes = (juzhen) => {
    const res = [];
    juzhen.forEach(row => {
      let rowString = "";
      row.forEach(val => {
        rowString += val;
      })
      res.push(rowString);
    })
    return res;
  }
  const treeBack = (row) => {
    if (row === n) {
      res.push(juzhenToRes(juzhen));
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isValid(row, col)) {
        juzhen[row][col] = "Q";
        treeBack(row + 1);
        juzhen[row][col] = ".";
      }
    }
  }

  treeBack(0);
  return res;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = solveNQueens;
// @after-stub-for-debug-end