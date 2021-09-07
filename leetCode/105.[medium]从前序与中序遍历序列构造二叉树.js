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
var buildTree = function (preorder, inorder) {
  const build = (preorder, pl, pr, inorder, il, ir) => {
    if (pl > pr) {
      return null;
    }
    let rootValue = preorder[pl];
    let index = -1;
    for (let i = il; i <= ir; i++) {
      if (inorder[i] === rootValue) {
        index = i;
        break;
      }
    }
    let root = new TreeNode(rootValue);

    const leftNumber = index - il;
    root.left = build(
      preorder,
      pl + 1,
      pl + leftNumber,
      inorder,
      il,
      index - 1
    );
    root.right = build(
      preorder,
      pl + leftNumber + 1,
      pr,
      inorder,
      index + 1,
      ir
    );
    return root;
  };
  return build(
    preorder,
    0,
    preorder.length - 1,
    inorder,
    0,
    inorder.length - 1
  );
};
// @lc code=end
