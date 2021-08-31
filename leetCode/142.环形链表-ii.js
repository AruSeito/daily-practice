/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

/**
 * @solution
 * 快慢指针，当第一次相遇时，将快或慢指针再放回头部，然后同步后移，再次相遇即为起点。
 * 数学公式推导出来的。
 * 
 * /

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }

  return null;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = detectCycle;
// @after-stub-for-debug-end
