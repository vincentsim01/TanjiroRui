const game = document.getElementById('game') as HTMLDivElement|null;
const tanjiroContainer = document.getElementById('tanjiroContainer') as HTMLDivElement|null;
const ruiContainer = document.getElementById('ruiContainer') as HTMLDivElement|null;
const message = document.getElementById('message') as HTMLDivElement|null;

let tanjiroX:number = 1350;
let tanjiroY:number = 100;
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' && tanjiroX<1350) {
        tanjiroX += 10;
        tanjiroContainer.style.left = `${tanjiroX}px`;
    }else if (event.key === 'ArrowLeft' && tanjiroX>0) {
        tanjiroX -= 10;
        tanjiroContainer.style.left = `${tanjiroX}px`;
    }else if (event.key === 'ArrowUp' && tanjiroY>0) {
        tanjiroY -= 10;
        tanjiroContainer.style.top = `${tanjiroY}px`;
    }else if (event.key === 'ArrowDown' && tanjiroY<300) {
        tanjiroY += 10;
        tanjiroContainer.style.top = `${tanjiroY}px`;
    }
});


function createBloodThread():void{
    let bloodThreadX:number=0;
    const thread = document.createElement('div');
    thread.className = 'absolute border-2 border-black rounded-full text-center text-lg';
    // thread.textContent = '🕸️';
    thread.style.backgroundImage = 'url(./asset/image/spiderweb.png)';
    thread.style.backgroundSize = 'cover';
    thread.style.width = '50px';
    thread.style.height = '50px';
    thread.style.left = `-100px`;
    thread.style.top = `${ Math.floor(Math.random() * 350)}px`;
    game.appendChild(thread);

    const webMoveInterval = setInterval(() => {
        bloodThreadX +=5;
        thread.style.left = `${bloodThreadX}px`;
        if (bloodThreadX > 1300) {
          thread.remove();
          clearInterval(webMoveInterval);
        }

        // Collision detection
        if(bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 60 && parseInt(thread.style.top.replace('px',''))>= tanjiroY && parseInt(thread.style.top.replace('px','')) <= tanjiroY + 60){
            alert('Tanjiro has been caught by Rui\'s Blood Thread! Game Over!');
            bloodThreadX = 1400; // Move the thread out of bounds to stop further checks
            thread.remove();
        };
    }, 10);


}

setInterval(createBloodThread, 2000);