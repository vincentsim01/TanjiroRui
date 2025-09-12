    const game = document.getElementById("game");
    const chicken = document.getElementById("chicken");
    const message = document.getElementById("message");

    let chickenX = 130;
    let chickenY = 350;
    let gameOver = false;

    // Move chicken with arrow keys
    document.addEventListener("keydown", (e) => {
      if (gameOver) return;
      if (e.key === "ArrowLeft" && chickenX > 0) chickenX -= 20;
      if (e.key === "ArrowRight" && chickenX < 260) chickenX += 20;
      if (e.key === "ArrowUp" && chickenY > 0) chickenY -= 20;
      if (e.key === "ArrowDown" && chickenY < 360) chickenY += 20;
      chicken.style.left = chickenX + "px";
      chicken.style.top = chickenY + "px";

      if (chickenY <= 0) {
        endGame("🎉 You Win!");
      }
    });

    // Spawn cars
    function createCar() {
      if (gameOver) return;
      const car = document.createElement("div");
      car.classList.add("car");
      car.style.top = Math.floor(Math.random() * 18) * 20 + "px";
      car.style.left = "-60px"; // start from left
      game.appendChild(car);

      let carX = -60;
      const interval = setInterval(() => {
        if (gameOver) {
          clearInterval(interval);
          car.remove();
          return;
        }
        carX += 5;
        car.style.left = carX + "px";

        // Collision check
        if (
          chickenX < carX + 60 &&
          chickenX + 40 > carX &&
          chickenY < parseInt(car.style.top) + 30 &&
          chickenY + 40 > parseInt(car.style.top)
        ) {
          endGame("💀 Game Over!");
        }

        if (carX > 300) {
          car.remove();
          clearInterval(interval);
        }
      }, 50);
    }

    function endGame(text) {
      gameOver = true;
      message.style.display = "block";
      message.innerText = text;
    }

    setInterval(createCar, 1500); // new car every 1.5s