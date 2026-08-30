function clock() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let date = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();
  let day = now.getDay();
  let period = "AM";

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let shortDays = [];

  for (let i = 0; i < days.length; i++) {
    if (days[i].length > 3) {
      shortDays.push(days[i].slice(0, 3));
    }
  }
  console.log(shortDays);
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
  console.log(day);

  let time = `${hours}: ${minutes}: ${seconds}: ${period}`;
  let dayDate = `${shortDays[day]}/${date}/ ${month}/ ${year}`;
  let dev = "Developed by AMC Tech";

  document.querySelector("h3").innerHTML = time;
  document.querySelector("#para1").innerHTML = dayDate;
  document.querySelector("#para2").innerHTML = dev;
}

clock();

setInterval(clock, 1000);
