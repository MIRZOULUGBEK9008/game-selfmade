// MODIFIERS
const modifiers = {
  toggle: "language__toggler--open",
  list: "language__list--open"
}
// VARIABLES
const elLoader = document.querySelector(".js-loader"),
elLangToggler = document.querySelector(".js-lang-toggler"),
elLangList = document.querySelector(".js-lang-list"),
elLangLink = elLangList.querySelectorAll(".language__link");
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

elLangLink.forEach(function (link, index){
  link.addEventListener("click", function () {
    elLangToggler.textContent = link.textContent;
    elLangToggler.classList.toggle(modifiers.toggle);
    elLangList.classList.toggle(modifiers.list);
  });
});