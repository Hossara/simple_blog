const menuIcon = document.getElementById("menuIcon")
const closeMenu = document.getElementById("closeMenu")
const menu = document.getElementById("menu")

const toggleMenu = () => menu.classList.toggle("show")

menuIcon.addEventListener("click", toggleMenu)
closeMenu.addEventListener("click", toggleMenu)