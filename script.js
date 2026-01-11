let gridSize;
let isRainbowMode = false; // 1. Create the flag to track the current mode

const clearBtn = document.getElementById("clearBtn");
const enterGridSizeBtn = document.getElementById("enterBtn");
const rGBButton = document.getElementById("specialBtn");

// Initialize the board immediately
initializeBoard();

clearBtn.addEventListener("click", () => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.background = "white"; // "Erase" the board
    });
});

enterGridSizeBtn.addEventListener("click", () => {
    location.reload(); // Refreshes the page to ask for new size
});

// 2. Change the button to simply toggle the mode
rGBButton.addEventListener("click", () => {
    isRainbowMode = !isRainbowMode; // Toggles between true/false
    // Optional: Update button text to show state
    rGBButton.textContent = isRainbowMode ? "Mode: Rainbow" : "Mode: Black"; 
});

function initializeBoard() {
    while (true) {
        gridSize = Number(
            prompt("How large should the grid be? (enter a number from 1 to 100?)")
        );
        if (gridSize >= 1 && gridSize <= 100) {
            break;
        }
    }
    
    const board = document.querySelector(".board");
    let boardSize = gridSize * gridSize;
    const cellLength = `calc(100% / ${gridSize})`; // Fixed spelling of 'Length'

    for (let i = 0; i < boardSize; i++) {
        let div = document.createElement("div");
        div.classList.add("cell");
        div.style.width = cellLength;
        div.style.height = cellLength;

        // 3. The single event listener checks the flag
        div.addEventListener("mouseenter", (e) => {
            if (isRainbowMode) {
                e.currentTarget.style.background = getRandomColor();
            } else {
                e.currentTarget.style.background = "black";
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