/**
 * @param {number} num
 * @return {string}
 */

 // input guaranteed to be less than 1000
var threeDigits = function(num) 
{
	var ones = num % 10;
	var tens = Math.floor((num % 100) / 10);
	var hundred = Math.floor(num / 100);


	var result = "";

	// tens and ones
	if (tens == 1)
	{
		var teenString = "";
		switch(ones)
		{
			case 0:
				teenString = "Ten";
				break;
			case 1: 
				teenString = "Eleven";
				break;
			case 2:
				teenString ="Twelve";
				break;
			case 3:
				teenString ="Thirteen";
				break;
			case 4:
				teenString ="Fourteen";
				break;
			case 5:
				teenString ="Fifteen";
				break;
			case 6:
				teenString ="Sixteen";
				break;
			case 7:
				teenString ="Seventeen";
				break;
			case 8:
				teenString ="Eighteen";
				break;
			case 9:
				teenString ="Nineteen";
				break;
		}

		result = teenString + result;
	}
	else
	{	
		var onesString = "";
		switch(ones)
		{
			case 1: 
				onesString ="One";
				break;
			case 2:
				onesString ="Two";
				break;
			case 3:
				onesString ="Three";
				break;
			case 4:
				onesString ="Four";
				break;
			case 5:
				onesString ="Five";
				break;
			case 6:
				onesString ="Six";
				break;
			case 7:
				onesString ="Seven";
				break;
			case 8:
				onesString ="Eight";
				break;
			case 9:
				onesString ="Nine";
				break;
		}
		result = onesString;

		var tensString = "";
		switch(tens)
		{
			case 2:
				tensString ="Twenty";
				break;
			case 3:
				tensString ="Thirty";
				break;
			case 4:
				tensString ="Forty";
				break;
			case 5:
				tensString ="Fifty";
				break;
			case 6:
				tensString ="Sixty";
				break;
			case 7:
				tensString ="Seventy";
				break;
			case 8:
				tensString ="Eighty";
				break;
			case 9:
				tensString ="Ninety";
				break;
		}
		if (tens != 0)
		{
			if (result != "")
				result = tensString + " " + result;
			else
				result = tensString;
		}
	}

	// hundreds
	if (hundred > 0)
	{
		var hundString = "";
		switch(hundred)
		{
			case 1: 
				hundString ="One";
				break;
			case 2:
				hundString ="Two";
				break;
			case 3:
				hundString ="Three";
				break;
			case 4:
				hundString ="Four";
				break;
			case 5:
				hundString ="Five";
				break;
			case 6:
				hundString ="Six";
				break;
			case 7:
				hundString ="Seven";
				break;
			case 8:
				hundString ="Eight";
				break;
			case 9:
				hundString ="Nine";
				break;
		}
		if (result != "")
			result = hundString  + " Hundred " + result;
		else
			result = hundString  + " Hundred";

	}

	return result;
}



var numberToWords = function(num) {
	if (num == 0) return "Zero";

	var loopNum = 0;
	var result = "";

	while (num > 0)
	{
		var s = threeDigits(num % 1000);
		num = Math.floor(num /  1000);

		if (s != "")
		{
			if (loopNum == 0)
				result = s;
			else
			{
				switch(loopNum)
				{
					case 0:
						result = s;
						break;
				}
			}


			switch(loopNum)
			{
				case 0:
					result = s;
					break;
				case 1:
					s += " Thousand";
					if (result != "")
						result = s + " " + result;
					else
						result = s;
					break;
				case 2:
					s += " Million";
					if (result != "")
						result = s + " " + result;
					else
						result = s;
					break;
				case 3:
					s += " Billion";
					if (result != "")
						result = s + " " + result;
					else
						result = s;
					break;
			}
		}

		loopNum++;
	}

	return result;
};