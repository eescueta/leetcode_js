/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function(root) {
	if (root == null) return;

    var stack = [ root ];

    while (stack.length > 0)
    {
    	var newStack = [];
    	// link elements in stack while adding new elements to newstack

    	for (var i = 0; i < stack.length; i++)
    	{
    		if (i < stack.length-1)
    			stack[i].next = stack[i+1];
    		if (stack[i].left != null)
    			newStack.push(stack[i].left);
    		if (stack[i].right != null)
    			newStack.push(stack[i].right); 
    	}

    	stack = newStack;
    }
};