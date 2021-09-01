/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

/**
 * @solution
 * 快慢指针：快指针先走n步，
 * 如果快指针没到头，快慢指针同步移动，直到快指针的next为空。这时候慢指针在目标节点的前一个。
 * 如果快指针到头了，那么说明倒数第N个节点就是第一个节点。
 * /

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let slow = head,
    fast = head;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  if (!fast) {
    return head.next;
  }
  while (fast && fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next.next;
  return head;
};
// @lc code=end
