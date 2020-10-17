
const container = document.querySelector('#container');
createGrid(4)

function createGrid(width) {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (i=0; i<(width*width); i++) {
        const box = document.createElement('div');
        box.classList.toggle('box');
        box.addEventListener('mouseenter', () => {
            box.classList.add('filled-box');
        });
        container.appendChild(box);
    }
    container.style["grid-template-columns"] = "repeat(" + width + ", 1fr)";
    container.style["grid-template-rows"] = "repeat(" + width + ", 1fr)";
}

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    let squareCount = prompt("Please enter desired squares per side on grid", 4)
    createGrid(squareCount);
});