
let inputScreen = document.getElementById('resultScreen');

function showTheNum(obj) {
    let buttonPushed = obj.innerHTML;
    if (buttonPushed === '=') {
        inputScreen.innerHTML = (eval(inputScreen.innerHTML));
    } else if (buttonPushed === 'AC') {
        inputScreen.innerHTML = '0';
    } else {
        if (inputScreen.innerHTML === '0') {
            inputScreen.innerHTML = buttonPushed;
        } else {
            inputScreen.innerHTML += buttonPushed;
        }
    }
}
