function countdown() {
  const inputs = document.querySelectorAll("input");
  const end = new Date("18 September 2023 15:10 ");
  const nowDate = new Date();
  const diff = (end - nowDate) / 1000;
  inputs[0].value = Math.floor(diff / 3600 / 24);
  inputs[1].value = Math.floor((diff / 3600) % 24);
  inputs[2].value = Math.floor((diff / 60) % 60);
  inputs[3].value = Math.floor(diff % 60);
}
countdown();
setInterval(() => {
  countdown();
}, 500);
