const gridContainer = document.querySelector('#gridContainer');

for(let i = 0; i < 16*16; i++){
    const div = document.createElement('div');
    div.setAttribute("style", "aspect-ratio: 1 / 1; background-color: white; flex: 0 0 6.25%;");
    div.addEventListener("mouseenter", () => {
        div.setAttribute("style", "aspect-ratio: 1 / 1; background-color: black; flex: 0 0 6.25%;");
    });
    gridContainer.appendChild(div);
}

const sizeButton = document.querySelector('.sizeButton');
sizeButton.addEventListener('click', () => {
    let size = prompt("Plase enter the grid size tou desire:");
    if(size > 100){
        size = 100;
    }
    gridContainer.replaceChildren();
    for(let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.setAttribute("style", "aspect-ratio: 1 / 1; background-color: white; flex: 0 0 " + 100 / size + "%;");
        div.addEventListener("mouseenter", () => {
            div.setAttribute("style", "aspect-ratio: 1 / 1; background-color: black; flex: 0 0 " + 100 / size + "%;");
        });
        gridContainer.appendChild(div);
    }
});
