const container = document.querySelector(".container");

for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.classList.add("squares");
    container.appendChild(square);
    square.addEventListener("mouseover", () => {
        square.style.backgroundColor = randomColor();
    });
 };

 function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
 };
