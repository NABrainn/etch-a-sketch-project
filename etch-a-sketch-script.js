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

function changeGridColorOnMouseOver() {
    document.querySelectorAll('#container > .rows > .grids').forEach((grid) => { 
        let brightnessOffset = 100;          
        grid.addEventListener('mouseover', () => {
            let firstColor = Math.floor(Math.random() * 254);
            let secondColor = Math.floor(Math.random() * 254);
            let thirdColor = Math.floor(Math.random() * 254);               
            grid.style.backgroundColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
            grid.style.filter = `brightness(${brightnessOffset}%)`;
            brightnessOffset -= 10;
        })
    })
}

const defaultContainer = generateGrids(10);
changeGridColorOnMouseOver();

button.addEventListener('click', () => {
    do {
        containerSize = parseInt(prompt("Enter a number in range (0, 100>"));
    }while(containerSize <= 0 || containerSize > 100 || isNaN(containerSize) === true);

    container.innerHTML = "";

    generateGrids(containerSize);

    container.style.maxWidth = '700px';
    container.style.maxWidth = '700px';
    
    changeGridColorOnMouseOver();
})



    


