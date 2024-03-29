/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function (root) {
  // const res = [];
  // const dg = (root) => {
  //   if (root === null) return null;
  //   dg(root.left);
  //   res.push(root.val);
  //   dg(root.right);
  // }
  // dg(root);
  // return res;
  const queue = [], res = []
  let cur = root;
  while (cur !== null || queue.length) {
    if (cur !== null) {
      queue.push(cur);
      cur = cur.left;
    } else {
      cur = queue.pop();
      res.push(cur.val);
      cur = cur.right;
    }
  }
  return res;
};
// @lc code=end

