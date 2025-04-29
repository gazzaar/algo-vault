function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// let reverseList = function (head) {
//   if (!head) return [];
//   let current = head;
//   let reversed = [];
//   while (current !== null) {
//     reversed.push(current.val);
//     current = current.next;
//   }
//   return reversed;
// };

let reverseList = function (head) {
  if (!head || !head.next) return head;

  let prev = null;
  let current = head;

  while (current !== null) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};

let list = new ListNode(3, null);
let anotherList = new ListNode(2, list);

console.log(reverseList(anotherList));
