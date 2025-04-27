const btnsTema = document.querySelectorAll(".theme input");

btnsTema.forEach((btn) => {
  btn.addEventListener("click", () => {
    const body = document.body;
    if (btn.value === "black") {
      body.classList.add("black-theme");
      body.classList.remove("white-theme");
    } else {
      body.classList.add("white-theme");
      body.classList.remove("black-theme");
    }
  });
});
