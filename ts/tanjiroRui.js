var game = document.getElementById('game');
var tanjiroContainer = document.getElementById('tanjiroContainer');
var ruiContainer = document.getElementById('ruiContainer');
var message = document.getElementById('message');
var tanjiroX = 1090;
var tanjiroY = 150;
document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowRight') {
        tanjiroX += 10;
        tanjiroContainer.style.left = "".concat(tanjiroX, "px");
    }
    else if (event.key === 'ArrowLeft') {
        tanjiroX -= 10;
        tanjiroContainer.style.left = "".concat(tanjiroX, "px");
    }
    else if (event.key === 'ArrowUp') {
        tanjiroY -= 10;
        tanjiroContainer.style.top = "".concat(tanjiroY, "px");
    }
    else if (event.key === 'ArrowDown') {
        tanjiroY += 10;
        tanjiroContainer.style.top = "".concat(tanjiroY, "px");
    }
});
