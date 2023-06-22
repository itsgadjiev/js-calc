const multiplyBtn = document.querySelector(".multiply");
const resetBtn = document.querySelector(".simpBtn");
const addBtn = document.querySelector(".addBtn");
const minusBtn = document.querySelector(".minus")
const input = document.querySelector("input");
const valueButtons = document.querySelectorAll('.value-btn');

let total = 0;

function multiply() {
    if (input.value === 0) {
        console.log("salam");

        total = currentValue * total;
        input.value = total;
        total = 1;
    } else {
        const currentValue = Number(input.value);
        console.log(currentValue);
        console.log(total);
        total = currentValue * total;
        input.value = total;
    }
}

multiplyBtn?.addEventListener("click", function () {
    multiply();
});

addBtn?.addEventListener("click", function () {
    addition();
});

minusBtn?.addEventListener("click", function () {
    minus();
});

function addition() {
    const currentValue = Number(input.value);
    total += currentValue;
    input.value = total;
    console.log(input.value);
}


function minus() {
    const currentValue = Number(input.value);
    total = total - currentValue;
    input.value = total;
    console.log(input.value);
}


resetBtn?.addEventListener("click", function () {
    input.value = "0";
    total = 0;
});



valueButtons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;
        input.value += value;
    });
});

