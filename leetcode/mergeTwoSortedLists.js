let mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let tail = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.nextListNode = list1;
      list1 = list1.nextListNode;
    } else {
      tail.nextListNode = list2;
      list2 = list2.nextListNode;
    }
  }
  if (list1) {
    tail.nextListNode = list1;
  } else if (list2) {
    tail.nextListNode = list2;
  }
  return dummy.nextListNode;
};
