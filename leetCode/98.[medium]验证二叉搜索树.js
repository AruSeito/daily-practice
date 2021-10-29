/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const queue = [], arr = []
  let cur = root;
  while (queue.length || cur) {
    if (cur) {
      queue.push(cur);
      cur = cur.left;
    } else {
      cur = queue.pop();
      arr.push(cur.val);
      cur = cur.right;
    }
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }
  return true
};
// @lc code=end

