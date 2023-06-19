/**
 * This functiona generate first digit of 6-digit client card.
 * @generatedDigit
 */

function generateFunctionalCoeficient() {
    
    const customerYearOfBirth = 1992;
    const currentYear = new Date().getFullYear(); // ??? (new Date()).getFullYear()
    const customerAge = currentYear - customerYearOfBirth;
    
    const randomCoeficient = getRandom(1, 7);
    return Math.round(customerAge / randomCoeficient);
}

function caculateCoeficient(callback) {

    var generatedDigit = 0;

    do {
        generatedDigit = generateFunctionalCoeficient();
    } while (callback(generatedDigit))

    return generatedDigit;
}

function generateFirstDigit() {

    var generatedDigit = 0;

    if(customerYearOfBirth > CONFIG_CUSTOMER_YEAR)
    {
        generatedDigit = caculateCoeficient(() => isOdd(generatedDigit) || (number >= 10));
    }
    
    if(customerYearOfBirth < CONFIG_CUSTOMER_YEAR)
    {
        generatedDigit = caculateCoeficient(() => isEven(generatedDigit) || (number >= 10));
    }

    return generatedDigit;
}