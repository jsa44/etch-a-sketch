
const container = document.querySelector('#container');

createGrid()

function createGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    for (i=0; i<16; i++) {
        const box = document.createElement('div');
        box.classList.toggle('box');
        box.addEventListener('mouseenter', () => {
            box.classList.add('filled-box');
        });
        container.appendChild(box);
    }
}

const button = document.querySelector('#reset');
button.addEventListener('click', () => {
    createGrid();
});