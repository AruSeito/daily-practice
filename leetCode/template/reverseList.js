/**
 *  p
 *  1->2->3->4->5
 * 
 *  p
 *  1->2<-3<-4<-5
 */


const reverseList = function (head) {
  if (head.next == undefined) return head;
  let lastHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return lastHead;
}