const pageTheme = document.querySelectorAll(".buttons button")

pageTheme.forEach(bts => {
   bts.addEventListener("click", () => {
      if (bts.value === "dark") {
         document.body.classList.add("dark_display")
         document.body.classList.remove("light_display")
      }
      else if (bts.value === "white") {
         document.body.classList.add("light_display")
         document.body.classList.remove("dark_display")
      }
});
})