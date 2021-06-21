let numbers = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operation');
let clearButton = document.getElementById('clear');
let equalsButton = document.getElementById('equal');
let result = document.getElementById('result');

clearAll();
resultNum()


for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        result.innerText += this.innerText;
    })
}

for (let i = 0; i < operators.length;  i++) {
    operators[i].addEventListener('click', function () {
        result.innerText += this.innerText;
    })
}

function resultNum() {
    equalsButton.addEventListener('click', function () {
        let output = result.innerText;
        result.innerText = eval(output);
    })
}

function clearAll(){
    clearButton.addEventListener('click', function () {
        result.innerText = '';
    })
}
