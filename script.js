const risa = new Audio("risa.mp3");

const button = document.querySelector("#button");

button?.addEventListener("click", () => {
  return risa.paused ? risa.play() : risa.pause();
});
