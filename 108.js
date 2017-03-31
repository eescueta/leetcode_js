/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var arrayToBSTHelper = function(nums, start, end) {
    if (start == end)
    {
    	var t = new TreeNode(nums[start]);
    	return t;
    }

    if (start + 1 == end)
    {
    	var t = new TreeNode(nums[start]);
    	var u = new TreeNode(nums[end]);
    	t.right = u;
    	return t;
    }

    var mid = Math.floor(((end - start) / 2) + start);
    var t = new TreeNode(nums[mid]);
    t.left = arrayToBSTHelper(nums, start, mid-1);
    t.right = arrayToBSTHelper(nums, mid+1, end);

    return t;
};

var sortedArrayToBST = function(nums) {
	if (nums.length === 0) return null;

    return arrayToBSTHelper(nums, 0, nums.length-1);
};