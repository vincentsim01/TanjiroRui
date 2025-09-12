var game = document.getElementById('game');
var tanjiroContainer = document.getElementById('tanjiroContainer');
var ruiContainer = document.getElementById('ruiContainer');
var message = document.getElementById('message');
var tanjiroX = 1350;
var tanjiroY = 100;
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight' && tanjiroX < 1350) {
        tanjiroX += 10;
        tanjiroContainer.style.left = "".concat(tanjiroX, "px");
    }
    else if (event.key === 'ArrowLeft' && tanjiroX > 0) {
        tanjiroX -= 10;
        tanjiroContainer.style.left = "".concat(tanjiroX, "px");
    }
    else if (event.key === 'ArrowUp' && tanjiroY > 0) {
        tanjiroY -= 10;
        tanjiroContainer.style.top = "".concat(tanjiroY, "px");
    }
    else if (event.key === 'ArrowDown' && tanjiroY < 300) {
        tanjiroY += 10;
        tanjiroContainer.style.top = "".concat(tanjiroY, "px");
    }
    console.log("Tanjiro Position: (".concat(tanjiroX, ", ").concat(tanjiroY, ")"));
    if (tanjiroX <= 150) {
        alert('Congratulations! Tanjiro has reached Rui and saved Nezuko!');
        tanjiroX = 1350;
        tanjiroY = 100;
        tanjiroContainer.style.left = "".concat(tanjiroX, "px");
        tanjiroContainer.style.top = "".concat(tanjiroY, "px");
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
    thread.style.top = "".concat(Math.floor(Math.random() * 350), "px");
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
setInterval(createBloodThread, 200);
