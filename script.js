const gridContainer = document.querySelector('#gridContainer');
for(let i = 0; i < 16; i++){
    const div = document.createElement('div');
    div.setAttribute("style", "width: 100px; aspect-ratio: 1 / 1; background-color: white;");
    gridContainer.appendChild(div);
}