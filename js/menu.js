export default function hamburgerMenu(BTN, menu, linkMenu) {
  document.addEventListener("click", e => {
    if (
      e.target.closest(".hamburger") &&
      linkMenu.closest(".menu__translate") === null
    ) {
      menu.classList.add("menu__translate");
      BTN.classList.add("is-active");
    } else {
      menu.classList.remove("menu__translate");
      BTN.classList.remove("is-active");
    }
  });
}
