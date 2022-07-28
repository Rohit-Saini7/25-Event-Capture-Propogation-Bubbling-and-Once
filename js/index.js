const divs = document.querySelectorAll("div");

function logText(e) {
  console.log(this.classList.value);
}

divs.forEach((div) =>
  div.addEventListener("click", logText, { capture: false, once: false })
);
