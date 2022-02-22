const dateShow = document.getElementById("date");
const timeShow = document.getElementById("time");

setInterval(clockAction, 1000);

function clockAction() {
  const currentDate = new Date();
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const mins = String(currentDate.getMinutes()).padStart(2, "0");
  const secs = String(currentDate.getSeconds()).padStart(2, "0");
  const time = `${hours}:${mins}:${secs}`;
  timeShow.innerText = time;
}
function dateAction() {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const date = currentDate.getDate();
  dateShow.innerText = `${year} ${month + 1}. ${date}.`;
}
dateAction();
