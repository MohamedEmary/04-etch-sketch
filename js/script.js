const INITIAL_GRID_CELLS = 16;
const MAX_CELLS = 100;

function eraseInk() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => (cell.style.backgroundColor = "white"));
}

function createGridCells(num) {
  if (Number(num)) {
    if (num > MAX_CELLS) {
      num = MAX_CELLS;
    }
    const gridDiv = document.querySelector("#grid");
    gridDiv.innerHTML = "";
    for (let i = 0; i < num; i++) {
      const lineDiv = document.createElement("div");
      lineDiv.className = "line-div";
      gridDiv.appendChild(lineDiv);
      for (let i = 0; i < num; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        lineDiv.appendChild(cell);
        cell.addEventListener("mouseenter", () => {
          cell.style.backgroundColor = "black";
        });
      }
    }
  } else {
    alert("You must enter a number");
  }
}

createGridCells(INITIAL_GRID_CELLS);

const cellsNumBtn = document.querySelector("#cells-num");
cellsNumBtn.addEventListener("click", () => {
  let num = prompt(
    "Enter the number of cells you want per side (Maximum = 100):"
  );
  createGridCells(num);
});

const eraseBtn = document.querySelector("#erase");
eraseBtn.addEventListener("click", eraseInk);

const githubIcon = document.querySelector(".fa-github");

githubIcon.addEventListener("mouseenter", function () {
  githubIcon.classList.add("fa-spin");
});

githubIcon.addEventListener("mouseleave", function () {
  githubIcon.classList.remove("fa-spin");
});
