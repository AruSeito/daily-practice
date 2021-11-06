/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const isValid = (row, col, val) => {
    for (let i = 0; i < board.length; i++) {
      if (board[row][i] === val) return false;
    }
    for (let i = 0; i < board.length; i++) {
      if (board[i][col] === val) return false;
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = startRow; r < startRow + 3; r++) {
      for (let c = startCol; c < startCol + 3; c++) {
        if (board[r][c] === val) return false;
      }
    }
    return true;
  }
  const treeBack = () => {
    for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board[0].length; col++) {
        if (board[row][col] !== ".") continue;
        for (let val = 1; val <= 9; val++) {
          if (isValid(row, col, `${val}`)) {
            board[row][col] = `${val}`;
            if (treeBack()) return true;
            board[row][col] = ".";
          }
        }
        return false;
      }
    }
    return true;
  }
  treeBack();
};
// @lc code=end

