/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    
	var lastZero = 0;

	for (var curr = 0; curr < nums.length; curr++)
	{
		if (nums[curr] != 0)
		{
			var tmp = nums[lastZero];
			nums[lastZero] = nums[curr];
			lastZero++;
			nums[curr] = tmp;;
		}
	}
};



var moveZeroesSuboptimal = function(nums) {
    
	var zeroIdx = 0;

	while (nums[zeroIdx] != 0 && zeroIdx < nums.length)
		zeroIdx++;

	var nonZero = zeroIdx + 1;

	while (nums[nonZero] === 0 && nonZero < nums.length)
		nonZero++;

	while (nonZero < nums.length && zeroIdx < nums.length)
	{
		nums[zeroIdx] = nums[nonZero];
		nums[nonZero] = 0;

		while (nums[zeroIdx] != 0 && zeroIdx < nums.length)
			zeroIdx++;

		nonZero = zeroIdx + 1;

		while (nums[nonZero] === 0 && nonZero < nums.length)
			nonZero++;
	}

};