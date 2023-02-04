
const cat = document.querySelector("#cat");
const tail = document.querySelector(".tail");

let tailDirection = 1;

setInterval(() => {
  const currentRotation = tail.style.transform.replace(/[^0-9]/g, '');
  const newRotation = +currentRotation + (10 * tailDirection);
  
  if (newRotation >= 135 || newRotation <= 45) {
    tailDirection *= -1;
  }
  
  tail.style.transform = `rotate(${newRotation}deg)`;
}, 50);

setInterval(() => {
  cat.classList.toggle("blink");
}, 500);


