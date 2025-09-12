const game = document.getElementById('game') as HTMLDivElement|null;
const tanjiroContainer = document.getElementById('tanjiroContainer') as HTMLDivElement|null;
const ruiContainer = document.getElementById('ruiContainer') as HTMLDivElement|null;
const message = document.getElementById('message') as HTMLDivElement|null;

let tanjiroX:number = 1090;
let tanjiroY:number = 150;
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        tanjiroX += 10;
        tanjiroContainer.style.left = `${tanjiroX}px`;
    }else if (event.key === 'ArrowLeft') {
        tanjiroX -= 10;
        tanjiroContainer.style.left = `${tanjiroX}px`;
    }else if (event.key === 'ArrowUp') {
        tanjiroY -= 10;
        tanjiroContainer.style.top = `${tanjiroY}px`;
    }else if (event.key === 'ArrowDown') {
        tanjiroY += 10;
        tanjiroContainer.style.top = `${tanjiroY}px`;
    }
});