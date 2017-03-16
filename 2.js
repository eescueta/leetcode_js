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
    if (l1 == null) return l2;
    if (l2 == null) return l1;

    var l1it = l1;
    var l2it = l2;

    var resHead = null;
    var resTail = null;

    var carry = 0;

    while (l1it != null || l2it != null)
    {
        // add both nodes
        // only l2
        // only l1

        var a = (l1it != null) ? l1it.val : 0;
        var b = (l2it != null) ? l2it.val : 0;

        var n = new ListNode((a + b + carry) % 10);
        // check for carry
        carry = Math.floor((a + b + carry) / 10); 

        if (resHead == null)
        {
            resHead = n;
            resTail = n;
        }
        else
        {
            resTail.next = n;
            resTail = resTail.next;
        }

        if (l1it != null)
            l1it = l1it.next;
        if (l2it != null)
            l2it = l2it.next;
    }

    // check for carry
    if (carry > 0)
    {
        var n = new ListNode(carry);
        resTail.next = n;
        resTail = resTail.next;
    }

    return resHead;
};