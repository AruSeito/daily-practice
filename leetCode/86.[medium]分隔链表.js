/*
 * @lc app=leetcode.cn id=86 lang=javascript
 *
 * [86] 分隔链表
 */

/**
 * @solution
 * 双链表：维护一个小于目标值的链表一个大于等于目标值得链表，注意最后要给大于目标值的链表封口
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  let small = new ListNode(), big = new ListNode();
  let headSmall = small, headBig = big;
  let point = head;
  while (point) {
    if (point.val >= x) {
      big.next = point;
      big = big.next;
    } else {
      small.next = point;
      small = small.next;
    }
    point = point.next;
  }
  big.next = null;
  small.next = headBig.next;
  return headSmall.next;
};
// @lc code=end

