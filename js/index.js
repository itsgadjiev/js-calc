const multiplyBtn = document.querySelector(".multiply");
const resetBtn = document.querySelector(".simpBtn");
const addBtn = document.querySelector(".addBtn");
const minusBtn = document.querySelector(".minus")
const input = document.querySelector("input");
const valueButtons = document.querySelectorAll('.value-btn');
const actionButtons = document.querySelectorAll('.action-btn');

let total = 0;


function addValues() {
    valueButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === "c") {
                input.value = ""
            }
            else if (button.value === "-1") {
                input.value = input.value.slice(0, -1)
            }
            else {
                input.value += button.value;
            }
        });
    });
}

function addOperations() {
    actionButtons.forEach(acbutton => {
        acbutton.addEventListener('click', () => {
            const lastSymbol = input.value.slice(-1);
            console.log(lastSymbol);
            if (acbutton.value === "=") {
                if (input.value.length != 0) {
                    input.value = eval(input.value);
                }
            }
            else if (isNaN(lastSymbol)) {
                actionButtons.forEach(acbutton => {
                    acbutton.addEventListener("click", function (event) {
                        event.preventDefault();
                    });
                })
            }
            else {
                input.value += acbutton.value;
            }
        })
    })
}

function keyBoardEvents() {
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        const allowedCharacters = /^[0-9\-+=*]$/;
        const lastSymbol = input.value.slice(-1);

        if (allowedCharacters.test(key) || key === 'Backspace' || key === 'Delete') {
            if (key === 'Backspace') {
                event.preventDefault();
                const currentValue = input.value;
                input.value = currentValue.substring(0, currentValue.length - 1);
            } else if (key === 'Delete') {
                event.preventDefault();
                input.value = '';
            }
            else if (key === '=') {
                if (input.value.length != 0) {
                    input.value = eval(input.value);
                }
            }
            else if (lastSymbol === '+' || lastSymbol === '-' || lastSymbol === '*') {
                if (key === '+' || key === '-' || key === '*') {
                    key.preventDefault();
                } else {
                    input.value += key;
                }
            }
            else {
                input.value += key;
            }
        }
    }, false);

}

addValues();
addOperations();
keyBoardEvents();