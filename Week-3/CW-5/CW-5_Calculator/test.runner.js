
//WHAT
function describe (message, callback)
{
    console.log(message);
    console.group();
    callback();
    console.groupEnd();
}

//HOW
function it (message, testScenario)
{
    console.log(message);
    testScenario();
}

function get(locator) {
    return document.getElementById(locator);
}

const assert = {
    isEquals(actualValue, expectedValue) {
        if (actualValue == expectedValue) {
            console.info(`PASS`)
        }
        else {
            console.error(`FAIL - ${actualValue} is not equal to ${expectedValue}`)
        }
    }
}