//Робота има нужда от система за навигация, трябва да получава входни данни какъв е типът на обекта който се намира пред него, стена, стол или нищо. Ако пред него има стена, то той трябва да се обърне на ляво или на дясно. Ако пред него има стол то той трябва да го прескочи ако няма нищо трябва да продължи напред. Програмата на робота трябва да приеме входните данни и да му даде команда Forward / Jump / Go Sideway

const HIT_COEFICIENT = 5;
const MAX_NUBMER_OF_HITS = 4;

var isRobotTurnOn = true;
var numberOfAvailableHits = MAX_NUBMER_OF_HITS;
// while(trisRobotTurnOnue)
while(isRobotTurnOn)
{
    const objectInFrontOfMe = prompt("Какъв обект има пред мен");
    //1 - стена
    //2 - стол
    //3 - нищо
    //0 - нищо

    if(objectInFrontOfMe == 1)
    {
        console.log("Go Sideway");
    }

    if(objectInFrontOfMe == 2)
    {
        console.log("Jump");
    }

    if(objectInFrontOfMe == 3)
    {
        console.log("Forward");
    }
    
    if(objectInFrontOfMe >= 10)
    {   
        alert("Robot turn off");
        isRobotTurnOn = false;
        //break;        
    }

    const numberOfEnvPixels = prompt("Засечени пиксели от терена")
    const isMouseDetected = numberOfCycles % 2 == 0;

    //TODO: да извадим един удар от numberOfAvailableHits
    const isBatteryFull = numberOfAvailableHits > 0;

    if(isBatteryFull) {

        alert("No battery - please recharge")

        do {

            const phaseCoeficient = Math.ceil(Math.random() * (1000 - 1) + 1);
            const zeroCoeficient = Math.ceil(Math.random() * (1000 - 1) + 1);
    
            if(phaseCoeficient > zeroCoeficient)
            {
                numberOfAvailableHits = MAX_NUBMER_OF_HITS;
            }
            if(phaseCoeficient < zeroCoeficient)
            {
                isRobotTurnOn = false;
                //break;
            }
        } while(phaseCoeficient = zeroCoeficient)
    }

    const min = 1;
    const max = 10;
    const randomgeneratedNumber = Math.ceil(Math.random() * (max - min) + min);

    const isHitSuccessful = randomgeneratedNumber != HIT_COEFICIENT;

    const isHitPossible = isMouseDetected && isBatteryFull && isHitSuccessful;

    if(isHitPossible)
    {
        alert("Удара е успешен");
        numberOfAvailableHits--;

        var upperBoundNumber = 10;
        // while(upperBoundNumber >= 0)
        // {
        //     alert(upperBoundNumber);
        //     if(upperBoundNumber % 2 == 0)
        //     {
        //         alert(`I am a Robot ${upperBoundNumber}`)
        //     }

        //     upperBoundNumber--;
        // }
        for (let index = 0; index < upperBoundNumber; index++) {
            alert(upperBoundNumber);
            if(upperBoundNumber % 2 == 0)
            {
                alert(`I am a Robot ${upperBoundNumber}`)
            }
        }
    }
}