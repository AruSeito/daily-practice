/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  // const res = []
  // const dg = (root) => {
  //   if (root === null) {
  //     return null;
  //   }
  //   res.push(root.val);
  //   dg(root.left);
  //   dg(root.right);
  // }
  // dg(root);
  // return res;
  if (root === null) return [];
  const res = [], queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.pop();
    res.push(node.val);
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }
  return res;
};
// @lc code=end

