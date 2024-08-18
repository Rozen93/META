const scrollBtn = document.getElementById("active");
let scrollEnabled = true;

function toggleScroll() {
  const body = document.body;
  if (scrollEnabled) {
    // Deshabilitar el scroll
    body.classList.add("hidden-scrolling");
    scrollEnabled = false;
  } else {
    // Habilitar el scroll
    body.classList.remove("hidden-scrolling");
    scrollEnabled = true;
  }
}

scrollBtn.addEventListener("click", toggleScroll);




