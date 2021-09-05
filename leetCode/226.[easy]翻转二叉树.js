/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 */

/**
 * @solution
 * 前序遍历，然后左右节点交换。
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
 * @return {TreeNode}
 */
var invertTree = function (root) {

  const dg = (root) => {
    if (!root) return root;
    const tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    dg(root.left);
    dg(root.right);
  }
  dg(root)
  return root;
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = invertTree;
// @after-stub-for-debug-end