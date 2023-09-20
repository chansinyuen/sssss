var style = document.createElement("style");

style.innerHTML = `@keyframes floating {
  0% {
    transform: translate(200.764px, 273.964px);
  }
  50% {
    transform: translate(200.764px, 288.964px);
  }
  100% {
    transform: translate(200.764px, 273.964px);
  }
}
`
document.head.appendChild(style);
