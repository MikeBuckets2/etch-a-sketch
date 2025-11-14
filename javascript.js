const container = document.querySelector(".container");
const button = document.querySelector("button");

function grid(size) {
    container.textContent = "";
    const squareSize = 640 / size;

    for (i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("squares");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = randomColor();
        });
    };
};

grid(16);

button.addEventListener("click", () => {
    let userInput = Number(prompt("How many squares per side? Max: 100"));

    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        alert("Can only be a number less than 100");
        return;
    };

    grid(userInput);
});

 function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
 };
