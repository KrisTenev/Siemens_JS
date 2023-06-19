function generateThirdDigit() {

    if (globalThisConfig.isCustomerAge) return 0;

    const fatherBirthDate = prompt("Father's birth date");
    const motherBirthDate = prompt("Mother's birth date");

    if (motherBirthDate[3] == fatherBirthDate[3])
    {
        return motherBirthDate[2];
    }

    return fatherBirthDate[3];

    //return (motherBirthDate[3] == fatherBirthDate[3]) ? motherBirthDate[2] : fatherBirthDate[3];
}