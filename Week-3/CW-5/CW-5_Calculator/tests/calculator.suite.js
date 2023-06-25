describe(`As an application user I with to test all of the calculator basic options`, () => {
    it (`should test basic addittion, 1 + 1 must equal to 2`, () => {
        
        //Arange
        const number1DomElement                 = get("number-1");
        const operationAddDomElement            = get("operation-add")
        const operationCalculationDomElement    = get("operation-calculaton");
        const displayDomElemnt                  = get("display");
        const operationClearAll                 = get("operation-clear-all");

        //Act
        operationClearAll.click();
        number1DomElement.click();
        operationAddDomElement.click();
        number1DomElement.click();
        operationCalculationDomElement.click();

        //Assert
        assert.isEquals(displayDomElemnt.innerText, 2);

    });

    it (`should test basic addittion, 1 - 1 must equal to 0`, () => {

        //Arange
        const number1DomElement                 = get("number-1");
        const operationSubDomElement            = get("operation-sub")
        const operationCalculationDomElement    = get("operation-calculaton");
        const displayDomElemnt                  = get("display");
        const operationClearAll                 = get("operation-clear-all");

        //Act
        operationClearAll.click();
        number1DomElement.click();
        operationSubDomElement.click();
        number1DomElement.click();
        operationCalculationDomElement.click();

        //Assert
        assert.isEquals(displayDomElemnt.innerText, 0);
    });

    it (`should test basic multiplication, 6 * 6 must equal to 36`, () => {

        //Arange
        const number6DomElement                 = get("number-6");
        const operationMulDomElement            = get("operation-multiply")
        const operationCalculationDomElement    = get("operation-calculaton");
        const displayDomElemnt                  = get("display");
        const operationClearAll                 = get("operation-clear-all");

        //Act
        operationClearAll.click();
        number6DomElement.click();
        operationMulDomElement.click();
        number6DomElement.click();
        operationCalculationDomElement.click();

        //Assert
        assert.isEquals(displayDomElemnt.innerText, 36);
    });
});


// function testBasicAddition() {
    
//     console.log("Test basic addition: 1 + 1 = 2");
    
//     //Arange
//     const number1DomElement = document.getElementById("number-1");
//     const operationAddDomElement = document.getElementById("operation-add");
//     const operationCalculationDomElement = document.getElementById("operation-calculaton");
//     const displayDomElemnt = document.getElementById("display");

//     //Act
//     number1DomElement.click();
//     operationAddDomElement.click();
//     number1DomElement.click();
//     operationCalculationDomElement.click();

//     //Assert
//     const currentValue = displayDomElemnt.innerText;

//     if(currentValue == 2) console.info(`PASS`);
//     else console.error(`FAIL - ${currentValue} is not equal to 2`);
// }

// function testBasicSubstraction() {
    
//     console.log("Test basic addition: 1 - 1 = 0");

//     //Arange
//     const number1DomElement                 = document.getElementById("number-1");
//     const operationSubDomElement            = document.getElementById("operation-sub");
//     const operationCalculationDomElement    = document.getElementById("operation-calculaton");
//     const displayDomElemnt                  = document.getElementById("display");

//     //Act
//     number1DomElement.click();
//     operationSubDomElement.click();
//     number1DomElement.click();
//     operationCalculationDomElement.click();

//     //Assert
//     const currentValue = displayDomElemnt.innerText;

//     if(currentValue == 0) console.info("PASS");
//     else console.error(`FAIL - ${currentValue} is not equal to 0`);
// }

// testBasicAddition();
// testBasicSubstraction();