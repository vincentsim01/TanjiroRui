var game = document.getElementById('game');
var tanjiroContainer = document.getElementById('tanjiroContainer');
var ruiContainer = document.getElementById('ruiContainer');
var message = document.getElementById('message');
var messageContainer = document.getElementById('messageContainer');
var overlay = document.getElementById('overlay');
var nextLevelButton = document.getElementById('nextLevelButton');
var duelLevelMeter = document.getElementById('duelLevelMeter');
;
var webProducingStarter = 3000;
var webProducingTime = 3000;
var tanjiroX = 1350;
var tanjiroY = 100;
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
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowRight":
            if (tanjiroX < 1350) {
                tanjiroX += 10;
                tanjiroContainer.style.left = "".concat(tanjiroX, "px");
            }
            break;
        case "ArrowLeft":
            if (tanjiroX > 0) {
                tanjiroX -= 10;
                tanjiroContainer.style.left = "".concat(tanjiroX, "px");
            }
            break;
        case "ArrowUp":
            if (tanjiroY > 0) {
                tanjiroY -= 10;
                tanjiroContainer.style.top = "".concat(tanjiroY, "px");
            }
            break;
        case "ArrowDown":
            if (tanjiroY < 300) {
                tanjiroY += 10;
                tanjiroContainer.style.top = "".concat(tanjiroY, "px");
            }
            break;
    }
    if (tanjiroX <= 150) {
        // alert('Congratulations! Tanjiro has reached Rui and saved Nezuko!');
        tanjiroX = 1350;
        tanjiroY = 100;
        tanjiroContainer.style.left = "".concat(tanjiroX, "px");
        tanjiroContainer.style.top = "".concat(tanjiroY, "px");
        messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
        // let pMessage = document.createElement('p');
        // pMessage.textContent = 'You Win! Tanjiro has saved Nezuko from Rui!';
        // message?.appendChild(pMessage);
    }
});
messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.addEventListener('click', function (e) {
    if (e.target !== message) {
        messageContainer.classList.add('hidden');
    }
});
function createBloodThread() {
    var bloodThreadX = 0;
    var thread = document.createElement('div');
    thread.className = 'absolute border-2 border-black rounded-full text-center text-lg z-3';
    // thread.textContent = '🕸️';
    thread.style.backgroundImage = 'url(./asset/image/spiderweb.png)';
    thread.style.backgroundSize = 'cover';
    thread.style.width = '50px';
    thread.style.height = '50px';
    thread.style.left = "-100px";
    thread.style.top = "".concat(Math.floor(Math.random() * 330), "px");
    game.appendChild(thread);
    var webMoveInterval = setInterval(function () {
        bloodThreadX += 5;
        thread.style.left = "".concat(bloodThreadX, "px");
        if (bloodThreadX > 1200) {
            thread.remove();
            clearInterval(webMoveInterval);
        }
        // Collision detection
        if (bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 60 && parseInt(thread.style.top.replace('px', '')) >= tanjiroY && parseInt(thread.style.top.replace('px', '')) <= tanjiroY + 60) {
            alert('Tanjiro has been caught by Rui\'s Blood Thread! Game Over!');
            bloodThreadX = 1400; // Move the thread out of bounds to stop further checks
            thread.remove();
            tanjiroX = 1350;
            tanjiroY = 100;
            tanjiroContainer.style.left = "".concat(tanjiroX, "px");
            tanjiroContainer.style.top = "".concat(tanjiroY, "px");
        }
        ;
    }, 10);
}
var bloodInterval = setInterval(createBloodThread, webProducingTime);
var duelLevel = 1;
duelLevelMeter.textContent = duelLevel.toString();
function nextLevel() {
    duelLevel += 1;
    duelLevelMeter.textContent = duelLevel.toString();
    webProducingTime = webProducingStarter - duelLevel * 500;
    console.log(webProducingTime);
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
    clearInterval(bloodInterval);
    bloodInterval = setInterval(createBloodThread, webProducingTime);
}
nextLevelButton === null || nextLevelButton === void 0 ? void 0 : nextLevelButton.addEventListener('click', nextLevel);
