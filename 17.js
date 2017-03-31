/**
 * @param {string} digits
 * @return {string[]}
 */
var getLetters = new Array(10);
getLetters[0] = [];
getLetters[1] = [];
getLetters[2] = [ 'a', 'b', 'c'];
getLetters[3] = [ 'd', 'e', 'f'];
getLetters[4] = [ 'g', 'h', 'i'];
getLetters[5] = [ 'j', 'k', 'l'];
getLetters[6] = [ 'm', 'n', 'o'];
getLetters[7] = [ 'p', 'q', 'r', 's'];
getLetters[8] = [ 't', 'u', 'v'];
getLetters[9] = [ 'w', 'x', 'y', 'z'];


var letterCombinations = function(digits) {
  	if (digits == "") return [];

	var result = getLetters[digits[digits.length-1] - '0'];

	for (var i = digits.length-2; i >= 0; i--) 
	{
		var nextResult = [];
		var num = digits[i] - '0';


		for (var j = 0; j < getLetters[num].length; j++)
		{
			for (var k = 0; k < result.length; k++)
			{
			}
		}

		for (var k = result.length-1; k >= 0; k--)
		{
			for (var j = getLetters[num].length-1; j >= 0; j--)
			{
				nextResult.push(getLetters[num][j] + result[k])
			}
		}

		result = nextResult;
	}

	return result;
};