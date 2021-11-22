/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
 */

/**
 * @solution
 * 方法1:先序遍历，找到最深的节点即可。
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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
  // 方法1:
  // let depthest = 0, res = root.val;

  // const dg = (root, depth) => {
  //   if (root === null) return root;
  //   let curDepth = depth + 1;
  //   if (curDepth > depthest) {
  //     depthest = curDepth;
  //     res = root.val;
  //   }
  //   dg(root.left, curDepth);
  //   dg(root.right, curDepth);
  // }
  // dg(root, 0)
  // return res;
  let queue = [], res = 0;
  if (root === null) return res;
  queue.push(root);
  while (queue.length) {
    const length = queue.length;
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      if (i === 0) {
        res = node.val;
      }
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return res;
};
// @lc code=end

