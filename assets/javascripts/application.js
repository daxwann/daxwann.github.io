function toggleNoScroll() {
  let checkbox = document.getElementById("navi-toggle");
  let body = document.getElementsByTagName("body")[0];

  checkbox.addEventListener("click", (e) => {
    if (checkbox.checked) {
      body.classList.add("no-scroll");
    } else if (body.classList.contains("no-scroll")) {
      body.classList.remove("no-scroll");
    }
  });
}

toggleNoScroll();