const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
function setdate() {
  const now = new Date();
  //Second-hand rotation
  const seconds = now.getSeconds();
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  //Minute-hand rotation
  const minutes = now.getMinutes();
  const minuteDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  //Hour-hand rotation
  const hours = now.getHours();
  const hourDegrees = (hours / 12) * 360 + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setdate, 1000);
