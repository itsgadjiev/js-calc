import { input, valueButtons, actionButtons } from './selectors.js';
import { allowedCharacters } from './consts.js';

export function addValues() {
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

export function addOperations() {
    actionButtons.forEach(acbutton => {
        acbutton.addEventListener('click', () => {
            const lastSymbol = input.value.slice(-1);
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

export function keyBoardEvents() {
    document.addEventListener('keydown', (event) => {
        const key = event.key;
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