let gridSize;

initializeBoard();
const clearBtn = document.getElementById("clearBtn");
const enterGridSizeBtn = document.getElementById("enterBtn");
clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.background = "white";
    });
});
enterGridSizeBtn.addEventListener("click", () => {
    location.reload();
});

function initializeBoard() {
    while (true) {
        gridSize = Number(
            prompt("How large grid? (enter a number from 1 to 100?)")
        );
        if (gridSize >= 1 && gridSize <= 100) {
            break;
        }
    }
    const board = document.querySelector(".board");
    let boardSize = gridSize * gridSize;
    const cellLenght = `calc(100% / ${gridSize})`;

    for (let i = 0; i < boardSize; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = cellLenght;
        div.style.height = cellLenght;
        div.addEventListener("mouseenter", (e) => {
            e.currentTarget.style.background = "black";
        });
        board.appendChild(div);
    }
}
// When the mouse hovers over a cell, change that cells background-color to black
