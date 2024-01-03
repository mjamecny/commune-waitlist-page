const hamburgerEl = document.querySelector(".hamburger")
const menuEl = document.querySelector(".menu")

hamburgerEl.addEventListener("click", () => {
  if (menuEl.classList.contains("hidden")) {
    menuEl.classList.remove("hidden")
    menuEl.classList.add("flex")
  } else {
    menuEl.classList.remove("flex")
    menuEl.classList.add("hidden")
  }
})
