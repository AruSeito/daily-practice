/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

/**
 * @solution
 * 思路：建一个空节点，比对l1和l2的值，如果l1大那么空节点的next就指向l2，直到l1或者l2有一个为空的时候，然后再看是否有剩，剩下的直接拼在后面。（迭代法）
 * 图形说明：https://leetcode-cn.com/problems/merge-two-sorted-lists/solution/he-bing-liang-ge-you-xu-lian-biao-by-leetcode-solu/
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  const prevHead = {
    val: -1,
    next: null,
  };
  let prev = prevHead;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }
  prev.next = l1 ? l1 : l2;
  return prevHead.next;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = mergeTwoLists;
// @after-stub-for-debug-end
