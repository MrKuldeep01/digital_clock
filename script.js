let h = document.getElementById("h");
let m = document.getElementById("m");
let s = document.getElementById("s");
let toggle = document.getElementById("am-pm");

setInterval(() => {
  now = new Date();
  h.innerText = (now.getHours() < 10 ? "0" : " ") + now.getHours();
  m.innerText = (now.getMinutes() < 10 ? "0" : " ") + now.getMinutes();
  s.innerText = (now.getSeconds() < 10 ? "0" : " ") + now.getSeconds();

  if (h.innerText > 12) {
    h.innerText = (now.getHours() < 10 ? "0" : " ") + h.innerText - 12;
    toggle.innerText = "PM";
  } else {
    h.innerText = now.getHours();
    toggle.innerText = "AM";
  }
}, 1000);
