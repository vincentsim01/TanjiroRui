const game = document.getElementById('game') as HTMLDivElement|null;
const tanjiroContainer = document.getElementById('tanjiroContainer') as HTMLDivElement|null;
const tanjiroImage = document.getElementById('tanjiroImage') as HTMLImageElement|null;
const ruiContainer = document.getElementById('ruiContainer') as HTMLDivElement|null;
const message = document.getElementById('message') as HTMLDivElement|null;
const messageContainer = document.getElementById('messageContainer') as HTMLDivElement|null;
const overlay = document.getElementById('overlay') as HTMLDivElement|null;
const nextLevelButton = document.getElementById('nextLevelButton') as HTMLButtonElement|null;
const tryAgainButton = document.getElementById('tryAgainButton') as HTMLButtonElement|null;
const webCounterDisplay = document.getElementById('webCounterDisplay') as HTMLParagraphElement|null;
const webSlashedCounterDisplay = document.getElementById('webSlashedCounterDisplay') as HTMLParagraphElement|null;
const swordSlashEffect = document.getElementById('swordSlashEffect') as HTMLImageElement|null;
const swordSlashEffect2 = document.getElementById('swordSlashEffect2') as HTMLImageElement|null;
const swordslashsound = document.getElementById('swordslashsound') as HTMLAudioElement|null;
const tanjirobeheadruiContainer = document.getElementById('tanjirobeheadruiContainer') as HTMLDivElement|null;
const tanjirobeheadrui = document.getElementById('tanjirobeheadrui') as HTMLVideoElement|null;
const tanjirobeheadruisound = document.getElementById('tanjirobeheadruisound') as HTMLAudioElement|null;
let duelResultTitle = document.getElementById('duelResultTitle') as HTMLHeadingElement|null;
let duelResultDescription = document.getElementById('duelResultDescription') as HTMLParagraphElement|null;
let duelLevelMeter:any = document.getElementById('duelLevelMeter');
let webCounter:number = 0;
let webSlashedCounter:number = 0;

const webProducingStarter:number = 3000;
let webProducingTime:number = 3000;
let tanjiroX:number = 95;
let tanjiroY:number = 20;

enum Direction{
    ArrowUp = "ArrowUp",
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    Space = " "
}

let keyLocked = false;

tanjiroContainer!.style.left = `${tanjiroX}%`;
tanjiroContainer!.style.top = `${tanjiroY}%`;
tanjiroImage!.style.width = '3em';
tanjiroImage!.style.height = '4em';

document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (keyLocked) return;
  switch (event.key){
    case Direction.ArrowRight:
      if (tanjiroX < 95) {
        tanjiroX += 1;
        tanjiroContainer.style.left = `${tanjiroX}%`;
      }
      break;

    case Direction.ArrowLeft:
      if (tanjiroX > 0) {
        tanjiroX -= 1;
        tanjiroContainer.style.left = `${tanjiroX}%`;
      }
      break;

    case Direction.ArrowUp:
      if (tanjiroY > 0) {
        tanjiroY -= 3;
        tanjiroContainer.style.top = `${tanjiroY}%`;
      }
      break;

    case Direction.ArrowDown:
      if (tanjiroY < 85) {
        tanjiroY += 3;
        tanjiroContainer.style.top = `${tanjiroY}%`;
      }
      break;
    case Direction.Space:
      keyLocked=true;
      let newTanjiroX:number =tanjiroX;
      let newTanjiroY:number =tanjiroY;
      tanjiroContainer?.classList.remove('bg-yellow-500');
      tanjiroContainer?.classList.add('bg-red-500');
      swordSlashEffect?.classList.remove('hidden');
      swordSlashEffect?.classList.add('slash');
      swordSlashEffect2?.classList.remove('hidden');
      swordSlashEffect2?.classList.add('slash2');

      swordslashsound?.play();
      // tanjiroY=-30;
      setTimeout(() => {
          // tanjiroX=newTanjiroX;
          // tanjiroY=newTanjiroY;
          tanjiroContainer?.classList.remove('bg-red-500');
          tanjiroContainer?.classList.add('bg-yellow-500');
          keyLocked=false;
          swordSlashEffect?.classList.add('hidden');
          swordSlashEffect?.classList.remove('slash');
          swordSlashEffect2?.classList.add('hidden');
          swordSlashEffect2?.classList.remove('slash2');
          // tanjiroContainer.style.left = `${tanjiroX}%`;
          // tanjiroContainer.style.top = `${tanjiroY}%`;
      }, 700);
      // alert('Tanjiro use Hinokami Kagura Dance to dodge Rui\'s Blood Thread!');
      break;
  }

    if(tanjiroX<=10){
      tanjirobeheadruiContainer?.classList.remove('hidden');
      tanjirobeheadruisound?.play();
      setTimeout(() => {
          tanjirobeheadruiContainer?.classList.add('hidden');
      },3000)
        tanjiroX = 97;
        tanjiroY = 20;;
        tanjiroContainer.style.left = `${tanjiroX}%`;
        tanjiroContainer.style.top = `${tanjiroY}%`;
        messageContainer?.classList.remove('hidden');
        nextLevelButton!.classList.remove('hidden');
        duelResultTitle!.textContent = 'You Win!';
        duelResultDescription!.textContent = ` Tanjiro has saved Nezuko from Rui Level ${duelLevel} !`;
        webCounterDisplay!.textContent = `Total Blood Threads Dodged: ${webCounter}`;
        webSlashedCounterDisplay!.textContent = `Total Blood Threads Slashed: ${webSlashedCounter}`;


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
        if (bloodThreadX > 88) {
          webCounter++;
          thread.remove();
          clearInterval(webMoveInterval);
        }

      //   document.addEventListener("keydown", (event: KeyboardEvent) => {
      //       if (event.key === Direction.Space) {
      //           keyLocked = true;
      //           console.log(keyLocked);
      //            if(bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%',''))>= tanjiroY-13 && parseInt(thread.style.top.replace('%','')) <= tanjiroY + 18){
      //                 thread.style.backgroundImage = 'url(./asset/image/webslashed.png)';
      //                 thread.classList.add('cutdownleft');
      //                 clearInterval(webMoveInterval);
      //                 setTimeout(() => {
      //                     thread.remove();
      //                 }, 800)
      //                 return;
      //            }
      //       }
      //   });

      //     setTimeout(() => {
      //     keyLocked=false;
      // }, 700);



        // Collision detection
        if(bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%',''))>= tanjiroY-13 && parseInt(thread.style.top.replace('%','')) <= tanjiroY + 18){
          console.log(keyLocked);
            if(keyLocked){
              webSlashedCounter++;
              thread.style.backgroundImage = 'url(./asset/image/webslashed.png)';
              thread.classList.add('cutdownleft');
              thread.style.width = '80px';
              thread.style.height = '80px';
              clearInterval(webMoveInterval);
              setTimeout(() => {
                  thread.remove();

              }, 800)
              return;
            }
            messageContainer?.classList.remove('hidden');
            duelResultTitle!.textContent = 'Game Over!';
            duelResultDescription!.textContent = ' Tanjiro has been caught by Rui\'s Blood Thread !';
            bloodThreadX = 100; // Move the thread out of bounds to stop further checks
            webCounterDisplay!.textContent = `Total Blood Threads Dodged: ${webCounter-1}`;
            webSlashedCounterDisplay!.textContent = `Total Blood Threads Slashed: ${webSlashedCounter}`;
            thread.remove();
            tanjiroX = 95;
            tanjiroY = 20;
            tanjiroContainer.style.left = `${tanjiroX}%`;
            tanjiroContainer.style.top = `${tanjiroY}%`;


        }


        
        
    }, 50);


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
