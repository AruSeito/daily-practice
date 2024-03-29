/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
  // const res = [];
  // const dg = (root) => {
  //   if (root === null) {
  //     return null;
  //   }
  //   dg(root.left);
  //   dg(root.right);
  //   res.push(root.val);
  // }

  // dg(root);
  // return res;
  if (root === null) return [];
  const res = [], queue = [];
  queue.push(root);
  while (queue.length) {
    const node = queue.pop();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  return res.reverse();
};
// @lc code=end

