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

document.querySelector('div[style="width: 234.871px; height: 85.0124px; transform: translate(200.764px, 273.964px);"]').style.animation = "floating 3s ease-in-out infinite"
