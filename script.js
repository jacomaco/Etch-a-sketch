let gridSize;
let currentMode = 'black'; // default mode: black

const clearBtn = document.getElementById("clearBtn");
const enterGridSizeBtn = document.getElementById("enterBtn");
const rGBButton = document.getElementById("specialBtn");
const eraserBtn = document.getElementById("eraserBtn"); 
const blackBtn = document.getElementById("blackBtn"); 


initializeBoard();

blackBtn.addEventListener("click", () => {
    currentMode = 'black'; 
});

enterGridSizeBtn.addEventListener("click", () => {
    location.reload();
});

clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => cell.style.background = "#d3d3d3");
});

rGBButton.addEventListener("click", () => {
    currentMode = 'rainbow'; // Set mode to rainbow
});

eraserBtn.addEventListener("click", () => {
    currentMode = 'eraser'; // Set mode to eraser
});

// You might want a button to go back to black, 
// or you can make the buttons toggle. For now, let's assume 
// clicking "Clear" or a "Black" button sets it back, 
// or simply add a "Black Pen" button. 


// --- THE LOGIC ---

function initializeBoard() {
    while (true) {
        gridSize = Number(prompt("How large should the grid be? (1-100)"));
        if (gridSize >= 1 && gridSize <= 100) break;
    }

    const board = document.querySelector(".board");
    const cellLength = `calc(100% / ${gridSize})`;

    // create grid
    const boardSize = gridSize * gridSize;
    for (let i = 0; i < boardSize; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = cellLength;
        div.style.height = cellLength;

        // CHECK THE MODE VARIABLE ON HOVER
        div.addEventListener("mouseenter", (e) => {
            if (currentMode === 'rainbow') {
                e.currentTarget.style.background = getRandomColor();
            } else if (currentMode === 'eraser') {
                e.currentTarget.style.background = "#d3d3d3"; // Eraser just paints white!
            } else {
                e.currentTarget.style.background = "black"; // Default
            }
        });

        board.appendChild(div);
    }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}