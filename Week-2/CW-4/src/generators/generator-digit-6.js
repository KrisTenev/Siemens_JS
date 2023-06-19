function generateSixthDigit(digit1, digit2, digit3, digit4, digit5) {

    const cardNumberSum = digit1 + digit2 + digit3 + digit4 + digit5;
    
    if(cardNumberSum < 9) return cardNumberSum;

    const newStringNumber = `${cardNumberSum}`;

    do {
        for(var i = 0; i < newStringNumber.length, i++;) {
            cardNumberSum += +newStringNumber[i];
        }
    } while (cardNumberSum > 9)

    return cardNumberSum;    
}