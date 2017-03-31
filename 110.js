/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalancedHelper = function(curr)
{
	if (curr == null) return 0;

	var left = isBalancedHelper(curr.left);
	var right = isBalancedHelper(curr.right);

	if (left == -1 || right == -1)
		return -1;
	if (Math.abs(left - right) > 1)
		return -1;

	return Math.max(left, right) + 1;
};

var isBalanced = function(root) {
    var res = isBalancedHelper(root);

    if (res >= 0)
    	return true;
    else
    	 return false;

};