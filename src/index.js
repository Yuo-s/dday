const clockTitle = document.querySelector(".js-clock");

function christmasDDay() {
  const today = new Date();
  const christmasDay = new Date("2022-12-25");
  const dDay = christmasDay - today;
  const day = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = String(Math.floor((dDay / (1000 * 60 * 60)) % 24)).padStart(
    2,
    "0"
  );
  const minutes = String(Math.floor((dDay / (1000 * 60)) % 60)).padStart(
    2,
    "0"
  );
  const seconds = String(Math.floor((dDay / 1000) % 60)).padStart(2, "0");
  clockTitle.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

christmasDDay();
setInterval(christmasDDay, 1000);
