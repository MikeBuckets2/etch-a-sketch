const container = document.querySelector(".container");

function createSquare(amount) {
    for (i = 0; i < amount; i++) {
        const square = document.createElement("div");
        square.classList.add("divSquares");
        container.appendChild(square);
    }
};

const squares = 16;

createSquare(squares);


