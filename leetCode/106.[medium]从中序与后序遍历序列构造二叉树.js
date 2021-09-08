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
var buildTree = function (inorder, postorder) {
  const build = (inorder, il, ir, postorder, pl, pr) => {
    if (il > ir) return null;

    const rootValue = postorder[pr];
    let index = -1;
    for (let i = il; i <= ir; i++) {
      if (inorder[i] === rootValue) {
        index = i;
        break;
      }
    }
    const leftNumber = index - il;
    let root = new TreeNode(rootValue);
    root.left = build(inorder, il, index - 1, postorder, pl, pl + leftNumber - 1);
    root.right = build(inorder, index + 1, ir, postorder, pl + leftNumber, pr - 1);
    return root;
  }

  return build(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)

};
// @lc code=end

