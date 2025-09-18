var game = document.getElementById('game');
var tanjiroContainer = document.getElementById('tanjiroContainer');
var tanjiroImage = document.getElementById('tanjiroImage');
var ruiContainer = document.getElementById('ruiContainer');
var message = document.getElementById('message');
var messageContainer = document.getElementById('messageContainer');
var overlay = document.getElementById('overlay');
var nextLevelButton = document.getElementById('nextLevelButton');
var tryAgainButton = document.getElementById('tryAgainButton');
var webCounterDisplay = document.getElementById('webCounterDisplay');
var webSlashedCounterDisplay = document.getElementById('webSlashedCounterDisplay');
var swordSlashEffect = document.getElementById('swordSlashEffect');
var swordSlashEffect2 = document.getElementById('swordSlashEffect2');
var swordslashsound = document.getElementById('swordslashsound');
var tanjirobeheadruiContainer = document.getElementById('tanjirobeheadruiContainer');
var tanjirobeheadrui = document.getElementById('tanjirobeheadrui');
var tanjirobeheadruisound = document.getElementById('tanjirobeheadruisound');
var duelResultTitle = document.getElementById('duelResultTitle');
var duelResultDescription = document.getElementById('duelResultDescription');
var duelLevelMeter = document.getElementById('duelLevelMeter');
var webCounter = 0;
var webSlashedCounter = 0;
var webProducingStarter = 3000;
var webProducingTime = 3000;
var tanjiroX = 95;
var tanjiroY = 20;
var Direction;
(function (Direction) {
    Direction["ArrowUp"] = "ArrowUp";
    Direction["ArrowDown"] = "ArrowDown";
    Direction["ArrowLeft"] = "ArrowLeft";
    Direction["ArrowRight"] = "ArrowRight";
    Direction["Space"] = " ";
})(Direction || (Direction = {}));
var keyLocked = false;
tanjiroContainer.style.left = "".concat(tanjiroX, "%");
tanjiroContainer.style.top = "".concat(tanjiroY, "%");
tanjiroImage.style.width = '3em';
tanjiroImage.style.height = '4em';
document.addEventListener("keydown", function (event) {
    if (keyLocked)
        return;
    switch (event.key) {
        case Direction.ArrowRight:
            if (tanjiroX < 95) {
                tanjiroX += 1;
                tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            }
            break;
        case Direction.ArrowLeft:
            if (tanjiroX > 0) {
                tanjiroX -= 1;
                tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            }
            break;
        case Direction.ArrowUp:
            if (tanjiroY > 0) {
                tanjiroY -= 10;
                tanjiroContainer.style.top = "".concat(tanjiroY, "%");
            }
            break;
        case Direction.ArrowDown:
            if (tanjiroY < 85) {
                tanjiroY += 10;
                tanjiroContainer.style.top = "".concat(tanjiroY, "%");
            }
            break;
        case Direction.Space:
            keyLocked = true;
            var newTanjiroX = tanjiroX;
            var newTanjiroY = tanjiroY;
            tanjiroContainer === null || tanjiroContainer === void 0 ? void 0 : tanjiroContainer.classList.remove('bg-yellow-500');
            // tanjiroContainer?.classList.add('bg-red-500');
            swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.remove('hidden');
            swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.add('slash');
            swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.remove('hidden');
            swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.add('slash2');
            tanjiroImage.src = './asset/image/tanjiro2.png';
            swordslashsound === null || swordslashsound === void 0 ? void 0 : swordslashsound.play();
            // tanjiroY=-30;
            setTimeout(function () {
                // tanjiroX=newTanjiroX;
                // tanjiroY=newTanjiroY;
                // tanjiroContainer?.classList.remove('bg-red-500');
                // tanjiroContainer?.classList.add('bg-yellow-500');
                keyLocked = false;
                swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.add('hidden');
                swordSlashEffect === null || swordSlashEffect === void 0 ? void 0 : swordSlashEffect.classList.remove('slash');
                swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.add('hidden');
                swordSlashEffect2 === null || swordSlashEffect2 === void 0 ? void 0 : swordSlashEffect2.classList.remove('slash2');
                tanjiroImage.src = './asset/image/tanjiro.png';
                // tanjiroContainer.style.left = `${tanjiroX}%`;
                // tanjiroContainer.style.top = `${tanjiroY}%`;
            }, 700);
            // alert('Tanjiro use Hinokami Kagura Dance to dodge Rui\'s Blood Thread!');
            break;
    }
    if (tanjiroX <= 10) {
        tanjirobeheadruiContainer === null || tanjirobeheadruiContainer === void 0 ? void 0 : tanjirobeheadruiContainer.classList.remove('hidden');
        tanjirobeheadruisound === null || tanjirobeheadruisound === void 0 ? void 0 : tanjirobeheadruisound.play();
        setTimeout(function () {
            tanjirobeheadruiContainer === null || tanjirobeheadruiContainer === void 0 ? void 0 : tanjirobeheadruiContainer.classList.add('hidden');
        }, 3000);
        tanjiroX = 97;
        tanjiroY = 20;
        ;
        tanjiroContainer.style.left = "".concat(tanjiroX, "%");
        tanjiroContainer.style.top = "".concat(tanjiroY, "%");
        messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
        nextLevelButton.classList.remove('hidden');
        duelResultTitle.textContent = 'You Win!';
        duelResultDescription.textContent = " Tanjiro has saved Nezuko from Rui Level ".concat(duelLevel, " !");
        webCounterDisplay.textContent = "Total Blood Threads Dodged: ".concat(webCounter);
        webSlashedCounterDisplay.textContent = "Total Blood Threads Slashed: ".concat(webSlashedCounter);
        // message!.innerHTML = ''; // Clear previous messages
        // let pMessage = document.createElement('p');
        // pMessage.textContent = 'You Win! Tanjiro has saved Nezuko from Rui!';
        // message?.appendChild(pMessage);
    }
});
messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.addEventListener('click', function (e) {
    if (e.target !== message) {
        messageContainer.classList.add('hidden');
        duelResultTitle.textContent = '';
        duelResultDescription.textContent = '';
    }
});
function createBloodThread() {
    var bloodThreadX = 0;
    var thread = document.createElement('div');
    thread.className = 'absolute  rounded-full text-center text-lg z-3';
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
        if (bloodThreadX >= tanjiroX && bloodThreadX <= tanjiroX + 3 && parseInt(thread.style.top.replace('%', '')) >= tanjiroY - 13 && parseInt(thread.style.top.replace('%', '')) <= tanjiroY + 18) {
            console.log(keyLocked);
            if (keyLocked) {
                webSlashedCounter++;
                thread.style.backgroundImage = 'url(./asset/image/webslashed.png)';
                thread.classList.add('cutdownleft');
                thread.style.width = '80px';
                thread.style.height = '80px';
                clearInterval(webMoveInterval);
                setTimeout(function () {
                    thread.remove();
                }, 800);
                return;
            }
            messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
            duelResultTitle.textContent = 'Game Over!';
            duelResultDescription.textContent = ' Tanjiro has been caught by Rui\'s Blood Thread !';
            bloodThreadX = 100; // Move the thread out of bounds to stop further checks
            webCounterDisplay.textContent = "Total Blood Threads Dodged: ".concat(webCounter - 1);
            webSlashedCounterDisplay.textContent = "Total Blood Threads Slashed: ".concat(webSlashedCounter);
            thread.remove();
            tanjiroX = 95;
            tanjiroY = 20;
            tanjiroContainer.style.left = "".concat(tanjiroX, "%");
            tanjiroContainer.style.top = "".concat(tanjiroY, "%");
        }
    }, 50);
}
var bloodInterval = setInterval(createBloodThread, webProducingTime);
var duelLevel = 1;
duelLevelMeter.textContent = duelLevel.toString();
function tryAgain() {
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.add('hidden');
    duelResultTitle.textContent = '';
    duelResultDescription.textContent = '';
}
tryAgainButton === null || tryAgainButton === void 0 ? void 0 : tryAgainButton.addEventListener('click', tryAgain);
function nextLevel() {
    duelLevel++;
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.add('hidden');
    nextLevelButton.classList.add('hidden');
    duelResultTitle.textContent = '';
    duelResultDescription.textContent = '';
    duelLevelMeter.textContent = duelLevel.toString();
    if (duelLevel > 5) {
        webProducingTime = webProducingStarter / duelLevel;
    }
    else if (duelLevel <= 5) {
        webProducingTime = webProducingStarter - duelLevel * 500;
    }
    messageContainer === null || messageContainer === void 0 ? void 0 : messageContainer.classList.remove('hidden');
    clearInterval(bloodInterval);
    bloodInterval = setInterval(createBloodThread, webProducingTime);
}
nextLevelButton === null || nextLevelButton === void 0 ? void 0 : nextLevelButton.addEventListener('click', nextLevel);
