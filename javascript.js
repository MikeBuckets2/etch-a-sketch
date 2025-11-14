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

 function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
 };
