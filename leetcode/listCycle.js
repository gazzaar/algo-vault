/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let hasCycle = function (head) {
  let pointer1 = head;
  let pointer2 = head;
  while (pointer2 !== null && pointer2.next !== null) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
    if (pointer1 === pointer2) {
      return true;
    }
  }
  return false;
};

let node = new ListNode(2);
node.next = new ListNode(3);
node.next.next = new ListNode(4);
node.next.next.next = new ListNode(5);

console.log(hasCycle(node));
