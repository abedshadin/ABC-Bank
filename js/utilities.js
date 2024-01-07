function getElementText (id){
    const element = document.getElementById(id);
    const elementString = element.innerText;
    const elementNumber = parseFloat(elementString);
    return elementNumber;
}

function getInputValue (id){
    const input = document.getElementById(id);
    const inputString = input.value;
    const inputNumber = parseFloat(inputString);
    input.value = '';
    return inputNumber;
}

function setElementText (id,value){
    const element = document.getElementById(id);
    element.innerText = value;
}