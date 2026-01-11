let gridSize;
while (true) {
    gridSize = Number(prompt("How large grid? (enter a number from 1 to 100?)"));
    if (gridSize >= 1 && gridSize <= 100) {
        break;
    }
}
const board = document.querySelector(".board");
let boardSize = gridSize * gridSize;

for (let i = 0; i < boardSize; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    div.style.width = `calc(100% / ${gridSize})`;
    div.style.height = `calc(100% / ${gridSize})`;
    board.appendChild(div);
}
