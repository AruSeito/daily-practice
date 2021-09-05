/*
 * @lc app=leetcode.cn id=114 lang=javascript
 *
 * [114] 二叉树展开为链表
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const dg = (root) => {
    if (!root) return null;
    dg(root.left);
    dg(root.right);
    let left = root.left, right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while (p.right) {
      p = p.right;
    }
    p.right = right;
  }
  dg(root);
  return root;
};
// @lc code=end

