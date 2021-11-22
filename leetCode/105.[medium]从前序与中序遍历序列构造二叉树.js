/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 */

/**
 * @solution
 * 还是二叉树遍历的思路。主要难点在于确认前序遍历的开始和结束。
 * 图形具体可见labuladong的 手把手刷二叉树（二）
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const build = (preorder, inorder) => {
  if (preorder.length === 0 || inorder.length === 0) return null;
  const rootVal = preorder[0];
  const rootNode = new TreeNode(rootVal);

  if (preorder.length === 1 || inorder.length === 1) return rootNode;

  const index = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1, inorder.length);

  const leftPreorder = preorder.slice(1, index + 1);
  const rightPreorder = preorder.slice(index + 1, preorder.length);

  rootNode.left = build(leftPreorder, leftInorder);
  rootNode.right = build(rightPreorder, rightInorder);

  return rootNode;

}
var buildTree = function (preorder, inorder) {
  if (preorder.length === 0 || inorder.length === 0) return null;
  return build(preorder, inorder)
};
// @lc code=end
