const game = document.getElementById('game') as HTMLDivElement|null;
const tanjiroContainer = document.getElementById('tanjiroContainer') as HTMLDivElement|null;
const ruiContainer = document.getElementById('ruiContainer') as HTMLDivElement|null;
const message = document.getElementById('message') as HTMLDivElement|null;
const messageContainer = document.getElementById('messageContainer') as HTMLDivElement|null;
const overlay = document.getElementById('overlay') as HTMLDivElement|null;
const nextLevelButton = document.getElementById('nextLevelButton') as HTMLButtonElement|null;
let duelLevelMeter:any = document.getElementById('duelLevelMeter');;

let webProducingTime:number = 3000;
let tanjiroX:number = 1350;
let tanjiroY:number = 100;
// document.addEventListener('keydown', (event) => {
//     if (event.key === 'ArrowRight' && tanjiroX<1350) {
//         tanjiroX += 10;
//         tanjiroContainer.style.left = `${tanjiroX}px`;
//     }else if (event.key === 'ArrowLeft' && tanjiroX>0) {
//         tanjiroX -= 10;
//         tanjiroContainer.style.left = `${tanjiroX}px`;
//     }else if (event.key === 'ArrowUp' && tanjiroY>0) {
//         tanjiroY -= 10;
//         tanjiroContainer.style.top = `${tanjiroY}px`;
//     }else if (event.key === 'ArrowDown' && tanjiroY<300) {
//         tanjiroY += 10;
//         tanjiroContainer.style.top = `${tanjiroY}px`;
//     }
// });



document.addEventListener("keydown", (event: KeyboardEvent) => {
  switch (event.key) {
    case "ArrowRight":
      if (tanjiroX < 1350) {
        tanjiroX += 10;
        tanjiroContainer.style.left = `${tanjiroX}px`;
      }
      break;

    case "ArrowLeft":
      if (tanjiroX > 0) {
        tanjiroX -= 10;
        tanjiroContainer.style.left = `${tanjiroX}px`;
      }
      break;

    case "ArrowUp":
      if (tanjiroY > 0) {
        tanjiroY -= 10;
        tanjiroContainer.style.top = `${tanjiroY}px`;
      }
      break;

    case "ArrowDown":
      if (tanjiroY < 300) {
        tanjiroY += 10;
        tanjiroContainer.style.top = `${tanjiroY}px`;
      }
      break;
  }

      console.log(`Tanjiro Position: (${tanjiroX}, ${tanjiroY})`);
    if(tanjiroX<=150){
        // alert('Congratulations! Tanjiro has reached Rui and saved Nezuko!');
        tanjiroX = 1350;
        tanjiroY = 100;
        tanjiroContainer.style.left = `${tanjiroX}px`;
        tanjiroContainer.style.top = `${tanjiroY}px`;
        messageContainer?.classList.remove('hidden');
        // let pMessage = document.createElement('p');
        // pMessage.textContent = 'You Win! Tanjiro has saved Nezuko from Rui!';
        // message?.appendChild(pMessage);

    }

});

messageContainer?.addEventListener('click', (e) => {
    if (e.target !== message) {
        messageContainer.classList.add('hidden');
    }
});


function createBloodThread():void{
    let bloodThreadX:number=0;
    const thread = document.createElement('div');
    thread.className = 'absolute border-2 border-black rounded-full text-center text-lg z-3';
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
        if (bloodThreadX > 1200) {
          thread.remove();
          clearInterval(webMoveInterval);
        }

        // Collision detection
        if(bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 60 && parseInt(thread.style.top.replace('px',''))>= tanjiroY && parseInt(thread.style.top.replace('px','')) <= tanjiroY + 60){
            alert('Tanjiro has been caught by Rui\'s Blood Thread! Game Over!');
            bloodThreadX = 1400; // Move the thread out of bounds to stop further checks
            thread.remove();
            tanjiroX = 1350;
            tanjiroY = 100;
            tanjiroContainer.style.left = `${tanjiroX}px`;
            tanjiroContainer.style.top = `${tanjiroY}px`;
        };
    }, 10);


}



let bloodInterval:any = setInterval(createBloodThread, webProducingTime);

let duelLevel:number = 1;

duelLevelMeter.textContent = duelLevel.toString();

function nextLevel():void{
  duelLevel += 1;
  duelLevelMeter  .textContent = duelLevel.toString();
  webProducingTime= webProducingTime - duelLevel*500;
  messageContainer?.classList.remove('hidden');
  clearInterval(bloodInterval);
  bloodInterval = setInterval(createBloodThread, webProducingTime);
}
nextLevelButton?.addEventListener('click', nextLevel);
