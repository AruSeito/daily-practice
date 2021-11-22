/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (root1 === null && root2 === null) return null;
  if (root1 === null && root2 !== null) return root2;
  if (root1 !== null && root2 === null) return root1;

  const root1Val = root1.val, root2Val = root2.val;
  const rootNode = new TreeNode(root1Val + root2Val);

  rootNode.left = mergeTrees(root1.left, root2.left);
  rootNode.right = mergeTrees(root1.right, root2.right);

  return rootNode;
};
// @lc code=end

