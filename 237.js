/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (node.next == null)
    {
    	node = null;
    }
    else
    {
    	node.val = node.next.val;
    	node.next = node.next.next;
    }
};