const openMenu = document.getElementById("Ymenu");
const closeMenu = document.getElementById("Xmenu");

openMenu.addEventListener("click", () => {
  closeMenu.classList.add("translate-x-0");
  openMenu.style.display = "none";
});

closeMenu.addEventListener("click", () => {
  closeMenu.classList.remove("translate-x-0");
  setTimeout(() => {
    openMenu.style.display = "";
  }, 200);
});
