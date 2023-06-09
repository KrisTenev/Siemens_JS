//Задача 1

const EARLY_ADOPTED_COEFICIENT = 99;
const NORMAL_ADOPTED_COEFICIENT = 100000;
const LAGER_ADOPTED_COEFICIENT = 999999;
const SECOND_MEAL_APLICATION_DIGIT = 3;

var customerNumber = parseInt(prompt("Въведи номера на картата"));
while(customerNumber < 0)
{
        customerNumber = parseInt(prompt("Въведи валиден на картата"));    
}

const isCustomerNumberGreaterThan100000 = customerNumber >= NORMAL_ADOPTED_COEFICIENT;
const isCustomerNumberLessThan999999 = customerNumber <= LAGER_ADOPTED_COEFICIENT;

const isCustomerNumber6Digit =  isCustomerNumberGreaterThan100000 && isCustomerNumberLessThan999999;

const isCustomerNormal = (customerNumber >= NORMAL_ADOPTED_COEFICIENT) && (customerNumber <= LAGER_ADOPTED_COEFICIENT);

const isCustomerEarlyAdopted = (customerNumber > EARLY_ADOPTED_COEFICIENT) && (customerNumber < NORMAL_ADOPTED_COEFICIENT);

const isCustomerLagger = customerNumber > LAGER_ADOPTED_COEFICIENT;

//Задача 2
if(isCustomerNormal)
{
        console.log("Normal user");
}
if(isCustomerEarlyAdopted)
{
        console.log("Early Adopted user");
}
if(isCustomerLagger)
{
        console.log("Lagger user");
}

//Задача 3
const isCustomerVIP = (customerNumber % 2) == 0;
const getNextToLastDigit = parseInt((customerNumber % 100) / 10);
const isCustomerAplicableForSecondMeal = getNextToLastDigit > SECOND_MEAL_APLICATION_DIGIT;

if(isCustomerAplicableForSecondMeal)
{
        console.log("User can have second meal.");
}

//Задача 4
const isCustomerSuperVIP = isCustomerVIP && isCustomerAplicableForSecondMeal;

//Задача 5
console.log("1. Pizza - 20");
console.log("2. Pasta - 25");
console.log("3. Stek - 50");

var priceToPay = 0;

const orderId = prompt("Order number");
if (orderId == 1) {
        console.log("Pizza")
        priceToPay += 20;
}
else if(orderId == 2) {
        console.log("Pasta")
        priceToPay += 25;
}
else if(orderId == 3) {
        console.log("Stek")
        priceToPay += 50;
}
else {
        console.log("Order is not valid")
        priceToPay = 1;
}

// switch(orderId)
// {
//         case 1: console.log("Pizza");
//         case 2: console.log("Pasta");
//         case 3: console.log("Stek");
//         default: console.log("Order is not valid");
// }

//Задача 8
if (isCustomerVIP)
{
        const customerAge = prompt("Enter your age")

        if(customerAge < 18) {
                priceToPay += 0;
        }
        else if (customerAge == 18) {
                priceToPay += 10;
        }
        else if (customerAge == 21 || customerAge == 22) {
                priceToPay += 0;
        }
        else if (customerAge <= 35){
                priceToPay += 5;
        }
        else if (customerAge == 65){
                priceToPay -= 60;
        }

}