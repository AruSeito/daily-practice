/*
 * @lc app=leetcode.cn id=654 lang=javascript
 *
 * [654] 最大二叉树
 */

/**
 * @solution
 * 二叉树遍历，只需要考虑当前节点要干什么，其他的都交给递归来操作。
 * 当前节点只需要找出最大值即可。根结点是最大值，最大值左侧交给递归，结果就是根结点的左侧，最大值右侧交给递归，结果就是根结点的右侧
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
const build = (nums) => {
  if (nums.length === 0) return null;
  const maxVal = Math.max(...nums);
  const rootNode = new TreeNode(maxVal);

  if (nums.length === 1) return rootNode;

  const index = nums.indexOf(maxVal);
  const leftVals = nums.slice(0, index);
  const rightVals = nums.slice(index + 1, nums.length);

  rootNode.left = build(leftVals);
  rootNode.right = build(rightVals);

  return rootNode;
}

var constructMaximumBinaryTree = function (nums) {
  if (nums.length === 0) return null;
  return build(nums);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = constructMaximumBinaryTree;
// @after-stub-for-debug-end
