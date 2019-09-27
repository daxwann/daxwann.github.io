function toggleNoScroll() {
  let checkbox = document.getElementById("navi-toggle");
  let body = document.querySelector("body");
  let html = document.querySelector("html");

  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
      html.classList.add("no-scroll")
      body.classList.add("no-scroll");
      body.addEventListener("touchmove", (e) => {
        e.preventDefault();
      }, false);
    } else {
      body.classList.remove("no-scroll");
      html.classList.remove("no-scroll");
      body.removeEventListener("touchmove", (e) => {
        e.preventDefault();
      }, false);
    }
  });
}

toggleNoScroll();