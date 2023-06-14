//Const
const CONFIG_CUSTOMER_YEAR = 1965;

//All card digits
var cardNumberDigit1 = 0;
var cardNumberDigit2 = 0;
var cardNumberDigit3 = 0;
var cardNumberDigit4 = 0;
var cardNumberDigit5 = 0;
var cardNumberDigit6 = 0;

//Digitr 1
function generateFirstDigit() {
    var generatedDigit = 0;

    const customerYearOfBirth = 1992;
    const currentYear = new Date().getFullYear(); // ??? (new Date()).getFullYear()
    const customerAge = currentYear - customerYearOfBirth;
    
    function getFirstDigit() {
        const randomCoeficient = getRandom(1, 7);
        return Math.round(customerAge / randomCoeficient);
    }
    
    function isProcessable(number)
    {
        return isOdd(number) || number >= 10;
    }
    
    if(generatedDigit > CONFIG_CUSTOMER_YEAR)
    {
        do {
            generatedDigit = getFirstDigit();
        } while (isProcessable(generatedDigit))
    }
    
    if(generatedDigit < CONFIG_CUSTOMER_YEAR)
    {
        do {
            generatedDigit = getFirstDigit();
        } while ((isEven(generatedDigit)) || (generatedDigit >= 10))
    }

    return generatedDigit;
}

//Digit 2

