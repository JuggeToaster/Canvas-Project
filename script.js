// Setup
window.focus;
let myCanvas = document.getElementById("myCanvas");
myCanvas.width = window.innerWidth;
myCanvas.height = window.innerHeight;
let c = myCanvas.getContext("2d");

//Position
x = 100;
y = 100;
radius = 60;

//Cirkel
c.beginPath();
c.arc(x, y, radius, 0, 2 * Math.PI);
c.stroke();

//Användarinput
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      console.log("Nu trycker användaren på uppåtpilen");
      y -= 10;
      break;
    case "ArrowDown":
      console.log("Nu trycker användaren på nedåtpilen");
      y += 10;
      break;
    case "ArrowLeft":
      console.log("Nu trycker användaren på vänsterpilen");
      x -= 10;
      break;
    case "ArrowRight":
      x += 10;
      console.log("Nu trycker användaren på högerpilen");
      break;
    default:
      break;
  }
});
document.addEventListener("click", (e) => {
  if (e.x > x - radius && e.x < x + radius) {
    if (e.y > y - radius && e.y < y + radius) {
      console.log("Nu klickar användaren innanför cirkeln");
    }
  } else {
    console.log("Användaren klickar utanför cirkeln");
  }
});

// Animeringsfunktion
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight); // Denna rad rensar skärmen

  c.beginPath();
  c.arc(x, y, radius, 0, 2 * Math.PI);
  c.stroke();
}

animate();
