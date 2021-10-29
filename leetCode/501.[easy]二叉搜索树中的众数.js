/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  let count = 0, maxCount = 0, res = [], prev;

  const traves = (node) => {
    if (node === null) return;

    traves(node.left);

    if (prev == undefined) {
      count = 1;
    } else if (prev.val === node.val) {
      count++;
    } else {
      count = 1;
    }

    if (count === maxCount) {
      res.push(node.val);
    }

    if (count > maxCount) {
      maxCount = count;
      res = [node.val];
    }
    prev = node;

    traves(node.right);
    return;
  }

  traves(root);
  return res;
};
// @lc code=end

