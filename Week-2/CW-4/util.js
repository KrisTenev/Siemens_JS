// function isEven(number)
// {
//     return number % 2 == 0;
// }

/*
* Check number is Odd.
*/
function isOdd(number)
{
    return number % 2 == 1;
}

function isEven(number)
{
    return !isOdd(number);
}

function getRandom(minNumber, maxNumber)
{
    return Math.round(Math.random() * (maxNumber - minNumber) + minNumber);
}