const dateText = document.querySelector(".date");
const clockText = document.querySelector(".clock");

const daysArr = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
function getTodayClock() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, 0);
  const date = String(today.getDate()).padStart(2, 0);
  const dayArrNumber = today.getDay();
  const day = daysArr[dayArrNumber];
  const hour = String(today.getHours()).padStart(2, 0);
  const min = String(today.getMinutes()).padStart(2, 0);
  const sec = String(today.getSeconds()).padStart(2, 0);
  dateText.innerText = `${year}.${month}.${date}.${day}`;
  clockText.innerText = `${hour}:${min}:${sec}`;
}

getTodayClock();
setInterval(getTodayClock, 1000);
