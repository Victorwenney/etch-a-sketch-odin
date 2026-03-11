const gridContainer = document.querySelector('#gridContainer');
for(let i = 0; i < 16*16; i++){
    const div = document.createElement('div');
    div.setAttribute("style", "aspect-ratio: 1 / 1; background-color: white; flex: 0 0 6.25%;");
    div.addEventListener("mouseenter", () => {
        div.setAttribute("style", "aspect-ratio: 1 / 1; background-color: black; flex: 0 0 6.25%;");
    })
    gridContainer.appendChild(div);
}
