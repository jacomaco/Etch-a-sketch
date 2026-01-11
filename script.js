let gridSize;
let currentMode = "black";

const clearBtn = document.getElementById("clearBtn");
const enterGridSizeBtn = document.getElementById("enterBtn");
const rGBButton = document.getElementById("specialBtn");
const eraserBtn = document.getElementById("eraserBtn");
const blackBtn = document.getElementById("blackBtn");

initializeBoard();

blackBtn.addEventListener("click", () => {
    currentMode = "black";
});

enterGridSizeBtn.addEventListener("click", () => {
    location.reload();
});

clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => (cell.style.background = "#d3d3d3"));
});

rGBButton.addEventListener("click", () => {
    currentMode = "rainbow";
});

eraserBtn.addEventListener("click", () => {
    currentMode = "eraser";
});

function initializeBoard() {
    while (true) {
        gridSize = Number(prompt("How large should the grid be? (1-100)"));
        if (gridSize >= 1 && gridSize <= 100) break;
    }

    const board = document.querySelector(".board");
    const cellLength = `calc(100% / ${gridSize})`;

    const boardSize = gridSize * gridSize;
    for (let i = 0; i < boardSize; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = cellLength;
        div.style.height = cellLength;

        div.addEventListener("mouseenter", (e) => {
            if (currentMode === "rainbow") {
                e.currentTarget.style.background = getRandomColor();
            } else if (currentMode === "eraser") {
                e.currentTarget.style.background = "#d3d3d3";
            } else {
                e.currentTarget.style.background = "black";
            }
        });

        board.appendChild(div);
    }
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
