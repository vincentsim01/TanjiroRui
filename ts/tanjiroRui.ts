const game = document.getElementById('game') as HTMLDivElement|null;
const tanjiroContainer = document.getElementById('tanjiroContainer') as HTMLDivElement|null;
const tanjiroImage = document.getElementById('tanjiroImage') as HTMLImageElement|null;
const ruiContainer = document.getElementById('ruiContainer') as HTMLDivElement|null;
const message = document.getElementById('message') as HTMLDivElement|null;
const messageContainer = document.getElementById('messageContainer') as HTMLDivElement|null;
const overlay = document.getElementById('overlay') as HTMLDivElement|null;
const nextLevelButton = document.getElementById('nextLevelButton') as HTMLButtonElement|null;
const tryAgainButton = document.getElementById('tryAgainButton') as HTMLButtonElement|null;
let duelResultTitle = document.getElementById('duelResultTitle') as HTMLHeadingElement|null;
let duelResultDescription = document.getElementById('duelResultDescription') as HTMLParagraphElement|null;
let duelLevelMeter:any = document.getElementById('duelLevelMeter');


const webProducingStarter:number = 3000;
let webProducingTime:number = 3000;
let tanjiroX:number = 95;
let tanjiroY:number = 20;
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

enum Direction{
    ArrowUp,
    ArrowDown,
    ArrowLeft,
    ArrowRight
}

tanjiroContainer!.style.left = `${tanjiroX}%`;
tanjiroContainer!.style.top = `${tanjiroY}%`;
tanjiroImage!.style.width = '3em';
tanjiroImage!.style.height = '4em';

document.addEventListener("keydown", (event: KeyboardEvent) => {
  switch (event.key){
    case "ArrowRight":
      if (tanjiroX < 100) {
        tanjiroX += 1;
        tanjiroContainer.style.left = `${tanjiroX}%`;
      }
      break;

    case "ArrowLeft":
      if (tanjiroX > 0) {
        tanjiroX -= 1;
        tanjiroContainer.style.left = `${tanjiroX}%`;
      }
      break;

    case "ArrowUp":
      if (tanjiroY > 0) {
        tanjiroY -= 1;
        tanjiroContainer.style.top = `${tanjiroY}%`;
      }
      break;

    case "ArrowDown":
      if (tanjiroY < 85) {
        tanjiroY += 1;
        tanjiroContainer.style.top = `${tanjiroY}%`;
      }
      break;
  }

    if(tanjiroX<=10){
        // alert('Congratulations! Tanjiro has reached Rui and saved Nezuko!');
        tanjiroX = 95;
        tanjiroY = 20;
        tanjiroContainer.style.left = `${tanjiroX}%`;
        tanjiroContainer.style.top = `${tanjiroY}%`;
        messageContainer?.classList.remove('hidden');
        nextLevelButton!.classList.remove('hidden');
        duelResultTitle!.textContent = 'You Win!';
        duelResultDescription!.textContent = ' Tanjiro has saved Nezuko from Rui!';
        // message!.innerHTML = ''; // Clear previous messages
        // let pMessage = document.createElement('p');
        // pMessage.textContent = 'You Win! Tanjiro has saved Nezuko from Rui!';
        // message?.appendChild(pMessage);

    }

});

messageContainer?.addEventListener('click', (e) => {
    if (e.target !== message) {
        messageContainer.classList.add('hidden');
        duelResultTitle!.textContent = '';
        duelResultDescription!.textContent = '';
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
    thread.style.left = `-10%`;
    thread.style.top = `${ Math.floor(Math.random() * 90)}%`;
    game.appendChild(thread);

    const webMoveInterval = setInterval(() => {
        bloodThreadX +=1;
        thread.style.left = `${bloodThreadX}%`;
        if (bloodThreadX > 90) {
          thread.remove();
          clearInterval(webMoveInterval);
        }

        // Collision detection
        if(bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%',''))>= tanjiroY-13 && parseInt(thread.style.top.replace('%','')) <= tanjiroY + 18){
            // alert('Tanjiro has been caught by Rui\'s Blood Thread! Game Over!');
            messageContainer?.classList.remove('hidden');
            duelResultTitle!.textContent = 'Game Over!';
            duelResultDescription!.textContent = ' Tanjiro has been caught by Rui\'s Blood Thread !';
            bloodThreadX = 100; // Move the thread out of bounds to stop further checks
            thread.remove();
            tanjiroX = 95;
            tanjiroY = 20;
            tanjiroContainer.style.left = `${tanjiroX}%`;
            tanjiroContainer.style.top = `${tanjiroY}%`;
        };
    }, 100);


}



let bloodInterval:any = setInterval(createBloodThread, webProducingTime);

let duelLevel:number = 1;

duelLevelMeter.textContent = duelLevel.toString();

function tryAgain():void{
    messageContainer?.classList.add('hidden');
    duelResultTitle!.textContent = '';
    duelResultDescription!.textContent = '';
}

tryAgainButton?.addEventListener('click', tryAgain);

function nextLevel():void{
  console.log(duelLevel);
  duelLevel++;
  messageContainer?.classList.add('hidden');
  nextLevelButton!.classList.add('hidden');
  duelResultTitle!.textContent = '';
  duelResultDescription!.textContent = '';
  duelLevelMeter.textContent = duelLevel.toString();
  if(duelLevel>5){
      webProducingTime = webProducingStarter/duelLevel;
 
  }else if(duelLevel<=5){
      webProducingTime = webProducingStarter - duelLevel * 500;
   

  }


  messageContainer?.classList.remove('hidden');
  clearInterval(bloodInterval);
  bloodInterval = setInterval(createBloodThread, webProducingTime);
}
nextLevelButton?.addEventListener('click', nextLevel);
