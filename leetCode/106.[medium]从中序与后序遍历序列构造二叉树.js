/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */


// function TreeNode(val, left, right) {
//   this.val = (val === undefined ? 0 : val)
//   this.left = (left === undefined ? null : left)
//   this.right = (right === undefined ? null : right)
// }

const build = (inorder, postorder) => {
  if (postorder.length === 0) return null;

  const rootVal = postorder[postorder.length - 1];
  const rootNode = new TreeNode(rootVal);


  const index = inorder.indexOf(rootVal);
  const leftInorder = inorder.slice(0, index);
  const rightInorder = inorder.slice(index + 1, inorder.length);

  const leftPostorder = postorder.slice(0, index);
  const rightPostOrder = postorder.slice(index, postorder.length - 1);

  rootNode.left = build(leftInorder, leftPostorder);
  rootNode.right = build(rightInorder, rightPostOrder);

  return rootNode;


}
var buildTree = function (inorder, postorder) {
  if (inorder.length === 0 || postorder === 0) return null;
  return build(inorder, postorder);
};
// @lc code=end


// @after-stub-for-debug-begin
module.exports = buildTree;
// @after-stub-for-debug-end