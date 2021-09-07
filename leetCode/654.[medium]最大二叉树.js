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
var constructMaximumBinaryTree = function (nums) {
  const build = (nums, left, right) => {
    if (left > right) return null;
    let max = -1,
      index = -1;
    for (let i = left; i <= right; i++) {
      if (nums[i] > max) {
        max = nums[i];
        index = i;
      }
    }
    let root = new TreeNode(max);

    root.left = build(nums, left, index - 1);
    root.right = build(nums, index + 1, right);
    return root;
  };
  return build(nums, 0, nums.length - 1);
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = constructMaximumBinaryTree;
// @after-stub-for-debug-end
