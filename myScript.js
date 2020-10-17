
for (i=0; i<16; i++) {
    const container = document.querySelector('#container');
    const box = document.createElement('div');
    box.classList.toggle('box');
    container.appendChild(box);
}