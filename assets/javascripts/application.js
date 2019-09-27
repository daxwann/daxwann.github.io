function toggleNoScroll() {
  let checkbox = document.getElementById("navi-toggle");
  let body = document.querySelector("body");
  let html = document.querySelector("html");

  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
      html.classList.add("no-scroll")
      body.classList.add("no-scroll");
    } else {
      body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
    }
  });
}

toggleNoScroll();