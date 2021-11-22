/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
 */

/**
 * @solution
 * 找到下一个节点和下下一个节点的值相等时，进行便利，直到找到不相等的值。
 * 比如：
 * 当前节点在2时，下一个值和下下一个值都为3，那就删掉第一个3，2的下一个就直接变成第二个3.
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
var deleteDuplicates = function (head) {
  if (head === null) return head;


  let fakeHead = new ListNode(-101, head);

  let current = fakeHead;
  while (current.next && current.next.next) {
    if (current.next.val === current.next.next.val) {
      const tmp = current.next.val;
      while (current.next && current.next.val === tmp) {
        current.next = current.next.next;
      }
    } else {
      current = current.next;
    }
  }
  return fakeHead.next;
};
// @lc code=end

