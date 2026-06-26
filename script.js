const hoursEl = document.querySelector(".hours");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const ampmEl = document.querySelector(".pm");
const dayNameEl = document.querySelector(".day");
const fullDateEl = document.querySelector(".date");

function updateClock() {
  const now = new Date();
  const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const hour = String(now.getHours()).padStart(2, 0);
  const minute = String(now.getMinutes()).padStart(2, 0);
  const second = String(now.getSeconds()).padStart(2, 0);

  const correct_hours = function () {
    const hour = now.getHours();
    if (hour > 12) {
      hoursEl.textContent = hour - 12;
      ampmEl.textContent = "PM";
    } else {
      ampmEl.textContent = "AM";
    }
  };
  correct_hours();

  const day_name = function () {
    let day = now.getDay();
    if (day === 0) return "SUNDAY";
    if (day === 1) return "MONDAY";
    if (day === 2) return "TUESDAY";
    if (day === 3) return "WEDNESDAY";
    if (day === 4) return "THURSDAY";
    if (day === 5) return "FRIDAY";
    if (day === 6) return "SATURDAY";
  };
  const formattedDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;

  minutesEl.textContent = minute;
  secondsEl.textContent = second;
  dayNameEl.textContent = day_name();
  fullDateEl.textContent = formattedDate;
}

setInterval(updateClock, 1000);
updateClock(); // run once immediately
