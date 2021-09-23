/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  let res = [];

  const dg = (root, depth) => {
    if (root) {
      if (!res[depth]) {
        res[depth] = [];
      }
      dg(root.left, depth + 1)
      res[depth].push(root.val)
      dg(root.right, depth + 1)
    }
  }
  dg(root, 0)
  return res;
};
// @lc code=end

