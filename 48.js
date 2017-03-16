var rotate = function(matrix) {
	if (matrix.length === 0) return;

    // reverse columns
    for (var i = 0; i < matrix[0].length; i++)
    {
    	var start = 0;
    	var end = matrix.length - 1;

    	while (start < end)
    	{
    		var tmp = matrix[start][i];
    		matrix[start][i] = matrix[end][i];
    		matrix[end][i] = tmp;
    		start++;
    		end--; 
    	}
    }

    // flip over diagonal
    for (var i = 0; i < matrix.length; i++)
    {
    	for (var j = i + 1; j < matrix[0].length; j++)
    	{
    		var tmp = matrix[i][j];
    		matrix[i][j] = matrix[j][i];
    		matrix[j][i] = tmp;
    	}
    }


};