const container = document.getElementById('container');
const button = document.querySelector('button');
let containerSize;

button.addEventListener('click', () => {
    do {
        containerSize = parseInt(prompt("Enter a number in range (0, 100>"));
    }while(containerSize <= 0 || containerSize > 100 || isNaN(containerSize) === true);

    container.innerHTML = "";

    for(let i = 0; i < containerSize; i++) {
        let row = document.createElement("div");
        row.setAttribute("class", "rows");
        container.append(row);
        for(let j = 0; j < containerSize; j++) {           
            let grid = document.createElement("div");
            grid.setAttribute('class', 'grids');
            row.append(grid);        
        }
    }
    container.style.maxWidth = '700px';
    container.style.maxWidth = '700px';
    container.style.border = "2px solid black";
    
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
})



    


