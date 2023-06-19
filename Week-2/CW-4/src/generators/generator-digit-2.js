function generateSecondDigit(generatedDigit) {

    if (generateFirstDigit == 0) {
        return 9;
    }

    const customerGender = prompt ("Gender M/F")
    if(customerGender == "M") return 1;
    if(customerGender == "F") return 3;

    var generatedNumber = getRandom(1, 9);
    
    if(generatedNumber == 1 || generatedNumber == 3) return ++generatedNumber;

    return generatedNumber;
}