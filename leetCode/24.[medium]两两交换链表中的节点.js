/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
 */

/**
 * @solution
 * 模拟法：画个图就出来了
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let fakeNode = new ListNode(0, head);
  let cur = fakeNode;
  while (cur.next && cur.next.next) {
    let tmp = cur.next;
    let tmp1 = cur.next.next.next;

    cur.next = cur.next.next;
    cur.next.next = tmp;
    cur.next.next.next = tmp1;

    cur = cur.next.next;
  }
  return fakeNode.next;
};
// @lc code=end

