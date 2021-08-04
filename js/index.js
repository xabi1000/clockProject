import hamburgerMenu from "./menu.js";
import time from "./time.js";

const $menu = document.getElementById("menu");
const $linkMenu = document.querySelector(".main-menu__link");
const $btnHamburger = document.getElementById("hamburger");

document.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu($btnHamburger, $menu, $linkMenu);
  time();
});
