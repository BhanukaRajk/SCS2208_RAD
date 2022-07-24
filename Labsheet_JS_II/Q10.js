var TYPING = [];
var DISPLAY = '';
var ANSWER;
var EXPRESSION = '';


function button(character) {
    TYPING.push(character);

    if (TYPING.length > 1) {
        DISPLAY = '';
    }

    for (i = 0; i < TYPING.length; i++) {
        DISPLAY = DISPLAY + TYPING[i];
    }
    document.getElementById('display').innerHTML = DISPLAY;
}


function calculate() {
    document.getElementById('display').innerHTML = '';
    for (i = 0; i < TYPING.length; i++) {
        EXPRESSION = EXPRESSION + TYPING[i];
    }

    ANSWER = eval(EXPRESSION);
    document.getElementById('display').innerHTML = ANSWER;

    cleartyping();
    DISPLAY = ANSWER;
}


function clearscreen() {
    DISPLAY = '';
    EXPRESSION = '';
    document.getElementById('display').innerHTML = DISPLAY;

    cleartyping();
}


function cleartyping() {
    while (TYPING.length > 0) {
        TYPING.pop();
    }
}