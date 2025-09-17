var game = document.getElementById('game');
var tanjiroContainer = document.getElementById('tanjiroContainer');
var tanjiroImage = document.getElementById('tanjiroImage');
var ruiContainer = document.getElementById('ruiContainer');
var message = document.getElementById('message');
var messageContainer = document.getElementById('messageContainer');
var overlay = document.getElementById('overlay');
var nextLevelButton = document.getElementById('nextLevelButton');
var duelLevelMeter = document.getElementById('duelLevelMeter');
;
var webProducingStarter = 3000;
var webProducingTime = 3000;
var tanjiroX = 95;
var tanjiroY = 20;
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
var Direction;
(function (Direction) {
    Direction[Direction["ArrowUp"] = 0] = "ArrowUp";
    Direction[Direction["ArrowDown"] = 1] = "ArrowDown";
    Direction[Direction["ArrowLeft"] = 2] = "ArrowLeft";
    Direction[Direction["ArrowRight"] = 3] = "ArrowRight";
})(Direction || (Direction = {}));
tanjiroContainer.style.left = "".concat(tanjiroX, "%");
tanjiroContainer.style.top = "".concat(tanjiroY, "%");
tanjiroImage.style.width = '3em';
tanjiroImage.style.height = '4em';
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowRight":
            if (tanjiroX < 100) {
                tanjiroX += 1;
                tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            }
            break;
        case "ArrowLeft":
            if (tanjiroX > 0) {
                tanjiroX -= 1;
                tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            }
            break;
        case "ArrowUp":
            if (tanjiroY > 0) {
                tanjiroY -= 1;
                tanjiroContainer.style.top = "".concat(tanjiroY, "%");
            }
            break;
        case "ArrowDown":
            if (tanjiroY < 90) {
                tanjiroY += 1;
                tanjiroContainer.style.top = "".concat(tanjiroY, "%");
            }
            break;
    }
    if (tanjiroX <= 10) {
        // alert('Congratulations! Tanjiro has reached Rui and saved Nezuko!');
        tanjiroX = 95;
        tanjiroY = 20;
        tanjiroContainer.style.left = "".concat(tanjiroX, "%");
        tanjiroContainer.style.top = "".concat(tanjiroY, "%");
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
    thread.style.left = "-10%";
    thread.style.top = "".concat(Math.floor(Math.random() * 90), "%");
    game.appendChild(thread);
    var webMoveInterval = setInterval(function () {
        bloodThreadX += 1;
        thread.style.left = "".concat(bloodThreadX, "%");
        if (bloodThreadX > 90) {
            thread.remove();
            clearInterval(webMoveInterval);
        }
        // Collision detection
        if (bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%', '')) >= tanjiroY - 13 && parseInt(thread.style.top.replace('%', '')) <= tanjiroY + 18) {
            alert('Tanjiro has been caught by Rui\'s Blood Thread! Game Over!');
            bloodThreadX = 100; // Move the thread out of bounds to stop further checks
            thread.remove();
            tanjiroX = 95;
            tanjiroY = 20;
            tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            tanjiroContainer.style.top = "".concat(tanjiroY, "%");
        }
        ;
    }, 100);
}
var bloodInterval = setInterval(createBloodThread, webProducingTime);
var duelLevel = 1;
duelLevelMeter.textContent = duelLevel.toString();
function nextLevel() {
    duelLevel += 1;
    duelLevelMeter.textContent = duelLevel.toString();
    if (duelLevel > 5) {
        webProducingTime = webProducingStarter / duelLevel;
        console.log(webProducingTime);
    }
    else if (duelLevel <= 5) {
        webProducingTime = webProducingStarter - duelLevel * 500;
        console.log(webProducingTime);
    }
    console.log(webProducingTime);
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
    clearInterval(bloodInterval);
    bloodInterval = setInterval(createBloodThread, webProducingTime);
}
nextLevelButton === null || nextLevelButton === void 0 ? void 0 : nextLevelButton.addEventListener('click', nextLevel);
