/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
	var a_it = a.length - 1;
	var b_it = b.length - 1;

	var carry = 0;

	var result = "";

	while (a_it >= 0 ||  b_it >= 0)
	{
		var char_one = (a_it < 0) ? 0 : (a[a_it] == '1');
		var char_two = (b_it < 0) ? 0 : (b[b_it] == '1');

		var charResult = carry + char_one + char_two;

		if (charResult == 0)
		{
			result = '0' + result;
			carry = 0;
		}
		else if (charResult == 1)
		{
			result = '1' + result;
			carry = 0;
		}
		else if (charResult == 2)
		{
			result = '0' + result;
			carry = 1;
		}
		else if (charResult == 3)
		{
			result = '1' + result;
			carry = 1;
		}

		a_it--;
		b_it--;
	}

	// forgot this
	if (carry > 0)
		result = "1" + result;

	return result;
};