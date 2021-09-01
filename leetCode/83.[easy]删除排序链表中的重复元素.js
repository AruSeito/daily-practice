/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
 */

/**
 * @solution
 * 快慢指针：同理编号26题
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
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return head;
  let slow = head,
    fast = head;
  while (fast) {
    if (slow.val === fast.val) {
      fast = fast.next;
    } else {
      slow.next = fast;
      slow = slow.next;
      fast = fast.next;
    }
  }
  slow.next = null;
  return head;
};
// @lc code=end

// @after-stub-for-debug-begin
module.exports = deleteDuplicates;
// @after-stub-for-debug-end
