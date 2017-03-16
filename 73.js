/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    console.log("73");
    if (matrix.length === 0) return;

    // find first row with a zero
    var firstZeroRow = -1;
    for (var i = 0; i < matrix.length; i++)
    {
    	if (firstZeroRow > -1)
    		break;

    	for (var j = 0; j < matrix[0].length; j++)
    	{
    		if (matrix[i][j] == 0)
    		{
    			firstZeroRow = i;
    			break;
    		}
    	}
    }

    if (firstZeroRow == -1) return;
    debugger;

    // set rows to zero, record columns
    for (var i = firstZeroRow + 1; i < matrix.length; i++)
    {
    	console.log(i);
    	var isRowZero = false;
    	for (var j = 0; j < matrix[0].length; j++)
    	{
    		if (matrix[i][j] == 0)
    		{
    			matrix[firstZeroRow][j] = 0;
    			isRowZero = true;
    		}
    	}

    	// set row to zero
    	if (isRowZero == true)
    	{
    		for (var j = 0; j < matrix[0].length; j++)
    		{
    			matrix[i][j] = 0;
    		}
    	}
    }

    // set columns to zero
    //set first row to zeros    
    for (var j = 0; j < matrix[0].length; j++)
    {
    	if (matrix[firstZeroRow][j] == 0)
    	{
    		for (var i = 0; i < matrix.length; i++)
    		{
    			matrix[i][j] = 0;
    		}
    	}
    	else
    	{
    		matrix[firstZeroRow][j] = 0;
    	}
    }

};