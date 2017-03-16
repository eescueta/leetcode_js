/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var stack1 = [];
    var stack2 = [];

    var l1it = l1;
    var l2it = l2;
    while (l1it != null)
    {
    	stack1.push(l1it.val);
    	l1it = l1it.next;
    }
    while (l2it != null)
    {
    	stack2.push(l2it.val);
    	l2it = l2it.next;
    }

    var resHead = null;
    var carry = 0;

    while (stack1.length > 0 || stack2.length > 0)
    {
    	var a = (stack1.length > 0) ? stack1.pop() : 0;
    	var b = (stack2.length > 0) ? stack2.pop() : 0;

    	var n = new ListNode((a + b + carry) % 10);
    	carry = Math.floor((a+b+carry) / 10);

    	n.next = resHead;
    	resHead = n;
    }

    if (carry > 0)
    {
    	var n = new ListNode(carry);
    	n.next = resHead;
    	resHead = n;
    }

    return resHead;
};