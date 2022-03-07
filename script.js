
const grid = document.querySelector('.grid');
const reset = document.querySelector('#clear');
const rainbow = document.querySelector('#rainbow');
let color = "blue"
//TEST
let mouseDown = 0;
let rainbowMode = 0;

document.body.onmousedown = function() {
    mouseDown = 1;
}
document.body.onmouseup = function() {
    mouseDown = 0;
}

rainbow.addEventListener("change", function() {
    if (this.checked) {
        rainbowMode = 1;
    } else {
        rainbowMode = 0;
    }
})

function changeColor(square) {
    //if (square.type === 'mouseover' && !mouseDown) return;
    console.log(rainbowMode);
    if (mouseDown && !rainbowMode) {
    square.target.style.backgroundColor = color;
    } else if (mouseDown && rainbowMode) {
        console.log(randomColor());
        square.target.style.backgroundColor = randomColor();
    } else {
        return;
    }
}

function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (i=0; i<=5; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function makeGrid(rows, columns) {
    const resText = document.querySelector('.resText');
    resText.textContent = rows + "x" + columns;
    grid.style['grid-template-columns'] = "repeat(" + columns + ", 1fr";
    grid.style['grid-template-rows'] = "repeat(" + rows + ", 1fr";
    for (i=0; i<(rows*columns); i++) {
        let square = document.createElement('div');
        square.className = "square"
        square.addEventListener('mouseenter', changeColor);
        grid.appendChild(square);

    }
}
function setColor(newColor) {
    color = newColor;
}
function resetGrid() {
    const square = document.querySelectorAll('.square');
    square.forEach(square => {
        square.remove();
    })
}
//colorPicker -- set Color
setColor("#0000ff");
makeGrid(25,25)


const colorPicker = document.querySelector('.colorPicker');
colorPicker.addEventListener("change", function() {
    setColor(colorPicker.value);
});

const resolution = document.querySelector('.resolution');
console.log(resolution.value)
resolution.addEventListener("input", function() {
    resetGrid();
    makeGrid(this.value, this.value);
});

reset.addEventListener("click", () => {
    resetGrid();
})

//makeGrid(32,32);
//setColor("blue");