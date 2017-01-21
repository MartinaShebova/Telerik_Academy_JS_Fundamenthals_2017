function solve(args) {
    var number = parseInt(args[0]),
    temp = number,
    number1 = number,
    number2 = number,
    firstDigit,
    secondDigit,
    thirdDigit;

    thirdDigit = temp % 10;
    temp = Math.floor(temp / 10);
    secondDigit = temp % 10;
    temp = Math.floor(temp / 10);
    firstDigit = temp % 10;

    function OnesValue(thirdDigitTemp, secondDigitTemp, firstDigitTemp) {
        if (secondDigitTemp !== 1) {
            switch (thirdDigitTemp) {
                case 1: return "one";
                case 2: return "two";
                case 3: return "three";
                case 4: return "four";
                case 5: return "five";
                case 6: return "six";
                case 7: return "seven";
                case 8: return "eight";
                case 9: return "nine";
                case 0:
                    if (firstDigitTemp === 0 && secondDigitTemp ===0) {
                        return "zero";
                    }
                    else {
                        return "";
                    }
                default: return "How do you get here?";
            }
        }
        else {
            return "";
        }
    }
    function OneToNine (number2)
    {
        switch (number2) {
            case 1: return "One";
            case 2: return "Two";
            case 3: return "Three";
            case 4: return "Four";
            case 5: return "Five";
            case 6: return "Six";
            case 7: return "Seven";
            case 8: return "Eight";
            case 9: return "Nine";
            case 0: return "Zero";
            default: return "How do you get here?";
        }
    }
    function TensValue(thirdDigitTemp, secondDigitTemp) {
        if (secondDigitTemp === 1) {
            var tensTemp = 10 + thirdDigitTemp;
            switch (tensTemp) {
                case 10: return "ten";
                case 11: return "eleven";
                case 12: return "twelve";
                case 13: return "thirteen";
                case 14: return "fourteen";
                case 15: return "fifteen";
                case 16: return "sixteen";
                case 17: return "seventeen";
                case 18: return "eighteen";
                case 19: return "nineteen";
                default: return "How do you get there?";
            }
        }
        else {
            switch (secondDigitTemp) {
                case 2: return "Twenty";
                case 3: return "Thirty";
                case 4: return "Forty";
                case 5: return "Fifty";
                case 6: return "Sixty";
                case 7: return "Seventy";
                case 8: return "Eighty";
                case 9: return "Ninety";
                case 0: return "";
                default: return "How do you get there?";
            }
        }
    }

    function HudredsValue(firstDigitTemp) {
        switch (firstDigitTemp) {
            case 1: return "One hundred";
            case 2: return "Two hundred";
            case 3: return "Three hundred";
            case 4: return "Four hundred";
            case 5: return "Five hundred";
            case 6: return "Six hundred";
            case 7: return "Seven hundred";
            case 8: return "Eight hundred";
            case 9: return "Nine hundred";
            case 0: return "";
            default: return "How do you get there";
        }
    }

    function TenToTwelwe(n)
    {
        switch (n) 
        {
            case 10: return "Ten";
            case 11: return "Eleven";
            case 12: return "Twelve";
            case 13: return "Thirteen";
            case 14: return "Fourteen";
            case 15: return "Fifteen";
            case 16: return "Sixteen";
            case 17: return "Seventeen";
            case 18: return "Eighteen";
            case 19: return "Nineteen";
            default: return "How do you get there?";
        }
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    if(number1 >= 0 && number1 <= 9)
    {
        console.log(OneToNine(number1));
        return;
    }

    if(number2 >= 10 && number2 <= 20)
    {
        console.log(TenToTwelwe(number2));
        return;
    }


    var result;

    if (firstDigit !== "") 
    {
        if (secondDigit === "" && thirdDigit ==="" ) 
        {
            result = HudredsValue(firstDigit);
        }
        else if(secondDigit === 0 && thirdDigit === 0)
        {
            result = HudredsValue(firstDigit);
        }
        else 
        {
            if(HudredsValue(firstDigit) === '')
            {
                result = TensValue(thirdDigit, secondDigit) + " " + OnesValue(thirdDigit, secondDigit, firstDigit);
                console.log(result);
                return;
            }
            else
            {
                result = HudredsValue(firstDigit) + " and " + TensValue(thirdDigit, secondDigit) + OnesValue(thirdDigit, secondDigit, firstDigit);
                console.log(result);
                return;
            }
        }
    } 
    else 
    {
        result = HudredsValue(firstDigit) + " " + TensValue(thirdDigit, secondDigit) + " " + OnesValue(thirdDigit, secondDigit, firstDigit);
        console.log(result);
        return;
    }

    // console.log(capitalizeFirstLetter(result.trim().replace(/  +/g, ' ')));
}

solve(['120']);
// solve(['11']);
// solve(['12']);
// solve(['20']);
// solve(['15']);


