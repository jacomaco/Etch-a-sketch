const board = document.querySelector(".board");

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("cell");
    board.appendChild(div);
}