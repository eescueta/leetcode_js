/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    var smallHead = null;
    var smallTail = null;
    var bigHead = null;
    var bigTail = null;

    var curr = head;

    while (curr != null)
    {
    	// curr is smaller
    	if (curr.val < x)
    	{
    		// init small poriton
    		if (smallHead == null)
    		{
    			smallHead = curr;
    			smallTail = curr;
    		}
    		// add to small portion
    		else
    		{
    			smallTail.next = curr;
    			smallTail = smallTail.next;
    		}
    	}
    	// curr is bigger/equal
		else
		{    	
    		// init big poriton
    		if (bigHead == null)
    		{
    			bigHead = curr;
    			bigTail = curr;
    		}
    		// add to big portion
    		else
    		{
    			bigTail.next = curr;
    			bigTail = bigTail.next;
    		}
    	}

    	curr = curr.next;
    }

    if (bigTail != null)
    	bigTail.next = null;

    if (smallHead == null)
    	return bigHead;

    smallTail.next = bigHead;
    return smallHead;

};