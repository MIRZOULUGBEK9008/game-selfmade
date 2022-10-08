// MODIFIERS
const modifiers = {
  toggle: "language__toggler--open",
  list: "language__list--open",
  nav: "site-header__sitenav--open",
  transparent: "navbar--transparent-one",
  overflow: "body-overflow"
}
// VARIABLES
const elLoader = document.querySelector(".js-loader"),
elLangToggler = document.querySelector(".js-lang-toggler"),
elLangList = document.querySelector(".js-lang-list"),
elLangLink = elLangList.querySelectorAll(".language__link"),
elNav = document.querySelector(".js-nav"),
elNavbar = document.querySelectorAll(".js-navbar"),
elNavbarTrasparent = document.querySelector(".js-navbar-transparent"),
elNavLink = elNav.querySelectorAll(".sitenav__link");
// LOADER
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function (){
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});

if (elLangToggler) {
  elLangToggler.addEventListener("click", function (){
    elLangToggler.classList.toggle(modifiers.toggle);
    elLangList.classList.toggle(modifiers.list);
  });
}
// FUNCTION
function  removeActiveClass() {
  elNav.classList.remove(modifiers.nav);
  elNavbarTrasparent.classList.remove(modifiers.transparent);
  document.body.classList.remove(modifiers.overflow);
}

elLangLink.forEach(function (link, index){
  link.addEventListener("click", function () {
    elLangToggler.textContent = link.textContent;
    elLangToggler.classList.toggle(modifiers.toggle);
    elLangList.classList.toggle(modifiers.list);
  });
});

elNavbar.forEach(function (navbar, index){
  navbar.addEventListener("click", function () {
    elNav.classList.toggle(modifiers.nav);
    elNavbarTrasparent.classList.toggle(modifiers.transparent);
    document.body.classList.toggle(modifiers.overflow);
  });
});

elNavLink.forEach(function (navlink, index){
  navlink.addEventListener("click", function (){
    removeActiveClass();
  });
});

elNavbarTrasparent.addEventListener("click", function (){
  removeActiveClass();
});
