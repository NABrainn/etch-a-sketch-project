const container = document.getElementById('container');
const button = document.querySelector('button');
let containerSize;

button.addEventListener('click', () => {
    do {
        containerSize = parseInt(prompt('Please enter a number in range (0, 100>'));
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
    
    let firstColor = Math.floor(Math.random() * 254);
    let secondColor = Math.floor(Math.random() * 254);
    let thirdColor = Math.floor(Math.random() * 254);
    
    document.querySelectorAll('#container > .rows > .grids').forEach((grid) => {        
        grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;
        })
    })
})



    


