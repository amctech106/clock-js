function clock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  }

  if (hours === 0) {
    hours = 12;
  } else if (hours > 12) {
    hours = hours - 12;
  }

  if (hours < 10) {
    hours = "0" + hours;
  } else {
    hours = hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  } else {
    minutes = minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  } else {
    seconds = seconds;
  }

  let time = `${hours}: ${minutes}: ${seconds}: ${period}`;
  document.querySelector("#clock").textContent = time;
}

clock();

setInterval(clock, 1000);
