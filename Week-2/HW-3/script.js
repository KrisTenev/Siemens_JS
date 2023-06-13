//Generate random 6-digit number


const BOUNDARY_BIRTH_DATE = 1965;
const AUDLT_AGE = 18;

var cardNumber = [6];
var userBirthDate = parseInt(prompt("Enter date of birth"));
var userAge = 0;
var random = 0;

const currentYear = new Date().getFullYear();

//Digit 1
if(userBirthDate > BOUNDARY_BIRTH_DATE)
{
    do {
        userAge =  currentYear - userBirthDate;
        random = Math.round(Math.random() * (7 - 1) + 1);
        cardNumber[5] = Math.round(userAge / random);
    } while (cardNumber[5] % 2 == 0)
}
else if (userBirthDate < BOUNDARY_BIRTH_DATE)
{
    do {
        userAge =  currentYear - userBirthDate;
        random = Math.round(Math.random() * (7 - 1) + 1);
        cardNumber[5] = Math.round(userAge / random);
    } while (cardNumber[5] % 2 == 1)
}
else if (userBirthDate == BOUNDARY_BIRTH_DATE)
{
    cardNumber[5] = 0;
}

if(cardNumber[5] / 10 > 0)
{
    cardNumber[5] = (cardNumber[5] - (cardNumber[5] % 10)) / 10;
}

//Digit 2
var userGender;

if(cardNumber[5] == 0)
{
    cardNumber[4] = 9;
}
else
{
    userGender = parseInt(prompt("Enter gender: 1-m, 3-f"));

    if(userGender != 1 || userGender != 3)
    {
        do {
            userGender = Math.round(Math.random() * (9 - 2) + 2);
        } while(userGender == 3)
    }

    cardNumber[4] = userGender;
}

//Digit 3
cardNumber[3] = 0;
var userMotherBirthYear = 0;
var userFatherBirthYear = 0;
var isUserAdult = userAge < AUDLT_AGE;

if(isUserAdult)
{
    userMotherBirthYear = prompt("Mother's birth year");
    userFatherBirthYear = prompt("Mother's birth year");

    const motherLastBirthYearDigit = userMotherBirthYear % 10;
    const fatherLastBirthYearDigit = userFatherBirthYear % 10;

    if(motherLastBirthYearDigit == fatherLastBirthYearDigit)
    {
        cardNumber[3] = motherLastBirthYearDigit;
    }
    else
    {
        cardNumber[3] = fatherLastBirthYearDigit;
    }
}

//Digit4
var userHightCm = prompt("Enter your high in cm");
var userWeightKg = prompt("Enter your weght in kg");
var userBodyWeightIndex = userWeightKg / (userHightCm ^ 2);

if(userBodyWeightIndex >= 40) {
    cardNumber[2] = 8;
} 
else if (userBodyWeightIndex >= 35) {
    cardNumber[2] = 7;
}
else if (userBodyWeightIndex >= 30) {
    cardNumber[2] = 6;
}
else if (userBodyWeightIndex >= 25) {
    cardNumber[2] = 5;
}
else if (userBodyWeightIndex >= 18.5) {
    cardNumber[2] = 4;
}
else if (userBodyWeightIndex >= 17) {
    cardNumber[2] = 3;
}
else if (userBodyWeightIndex >= 16) {
    cardNumber[2] = 2;
}
else {
    cardNumber[2] = 1;
}

//Digit 5
var productIndex = parseInt(prompt("Select product 1-5"));
var productByingFrequency = parseInt(prompt("How often product is have bought 1-3"));
cardNumber[1] = productIndex + productByingFrequency;

//Digit 6
for (let index = 1; index < cardNumber.length; index++) {
    cardNumber[0] += cardNumber[index];
}

if(cardNumber[0] > 10)
{
    cardNumber[0] = parseInt(cardNumber[0] / 10) + (cardNumber[0] % 10);
}

//Card Number
cardNumber.forEach(element => console.log(element));
