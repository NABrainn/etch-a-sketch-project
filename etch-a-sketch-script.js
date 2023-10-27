const container = document.getElementById('container');
const button = document.querySelector('button');
let containerSize;

function generateGrids(length) {
    for(let i = 0; i < length; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "rows");
        container.append(row);
        for(let j = 0; j < length; j++) {           
            let grid = document.createElement("div");
            grid.setAttribute('class', 'grids');
            row.append(grid);        
        }
    }
}

function changeColor() {
    let firstColor = Math.floor(Math.random() * 256);
    let secondColor = Math.floor(Math.random() * 256);
    let thirdColor = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
}

function startDrawing(e) {
    e.preventDefault();
    const grids = document.querySelectorAll('.grids');
    grids.forEach(grid => grid.addEventListener('mouseover', changeColor))
}
function stopDrawing(e) {
    e.preventDefault();
    const grids = document.querySelectorAll('.grids');
    grids.forEach(grid => grid.removeEventListener('mouseover', changeColor));
}

function createNewBoard() {
    do {
        containerSize = parseInt(prompt("Enter a number in range (0, 100>"));
    }while(containerSize <= 0 || containerSize > 100 || isNaN(containerSize) === true);
    container.innerHTML = "";
    generateGrids(containerSize);
}

const defaultContainer = generateGrids(10);
container.addEventListener('mousedown', startDrawing);
window.addEventListener('mouseup', stopDrawing);
button.addEventListener('click', createNewBoard);



    


