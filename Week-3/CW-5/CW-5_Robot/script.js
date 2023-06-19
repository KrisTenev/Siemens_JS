

while(SystemObject.isAlive) {

    const command = prompt("Enter command:");

    if(command == "turnon") {
        turnonCommand();
    }

    else if(command == "load") {
        //if(SystemObject.isTurnOn()) {
        //  const robotNameArgument = prompt("Enter robot hand's name");
        //  loadCommand(robotNameArgument);
        //}
        //else {
        //  alert("System is off")
        //}

        if(SystemObject.isSystemTurnOff()) {
            alert("System is off");
            continue;
        }

        const robotNameArgument = prompt("Enter robot hand's name");
        loadCommand(robotNameArgument);
    }

    else if(command == "unload") {
        const robotNameArgument = prompt("Enter robot hand's name");
        unloadCommand(robotNameArgument);
    }

    else if(command == "moveX") {    
        const directionAgrument = prompt("Enter direction left/right");
        const stepArgument = prompt("Enter step");
        moveCommand('X', directionAgrument, stepArgument);
    }

    else if(command == "moveY") {
        const directionAgrument = prompt("Enter direction up/down");
        const stepArgument = prompt("Enter step");
        moveCommand('Y', directionAgrument, stepArgument);
    }

    else if(command == 'identify') {
        identifyCommand();
    }

    else if(command == 'cut') {
        const cutArgument = prompt("Enter number");
        proccessCommand('cut', cutArgument);
    }

    else if(command == 'fill') {
        const fillArgument = prompt("Enter number");
        proccessCommand('fill', fillArgument);
    }

    else if(command == 'finish') {
        proccessCommand('finish');
    }

    else if(command == 'status') {
        statusCommand();
    }

    else {
        alert("Invalid command!")
    }
}