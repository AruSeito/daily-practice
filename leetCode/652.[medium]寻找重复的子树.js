/*
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

/**
 * @solution
 * 后续遍历，需要注意将树序列化，然后要记录下每种可能，然后只有出现次数为1的时候才是结果。避免重复节点。
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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function (root) {
  const map = new Map();
  const res = [];

  const dg = (root) => {
    if (root === null) return "#";
    let left = dg(root.left);
    let right = dg(root.right);
    let subTree = `${left},${right},${root.val}`;
    let count = map.get(subTree) || 0;
    if (count === 1) {
      res.push(root);
    }
    map.set(subTree, count + 1);
    return subTree;
  };
  dg(root);
  return res;
};
// @lc code=end
