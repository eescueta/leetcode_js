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

var palindromeHelper = function(left, right, status)
{
	if (right.next == null)
	{
		if (left.node.val == right.val)
		{
			left.node = left.node.next;
			return true;
		}
		else
		{
			status.isDone = true;
			return false;
		}
	}

	var b = palindromeHelper(left, right.next, status);

	if (status.isDone)
	{
		return b;
	}
	else if (left.node == right || right.next == left.node)
	{
		status.isDone = true;
		return true;
	}
	else if (left.node.val == right.val)
	{
		left.node = left.node.next;
		return true;
	}
	else
	{
		status.isDone = true;
		return false;
	}

};

var isPalindrome = function(head) {
	if (head == null || head.next == null)
		return true;

    var left = {node: head};

    var status = {isDone: false};

    return palindromeHelper(left, head, status);
};