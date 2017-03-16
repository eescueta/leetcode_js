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
var detectCycle = function(head) {
    if (head == null || head.next == null) return null;

    var slow = head.next;
    var fast = head.next.next;

    while (slow != fast)
    {
    	if (fast == null || fast.next == null)
    		return null;

    	slow = slow.next;
    	fast = fast.next.next;
    }

    slow = head;

    while (slow != fast)
    {
    	slow = slow.next;
    	fast = fast.next;
    }
    return slow;
};