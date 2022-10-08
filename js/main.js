const elLoader = document.querySelector(".js-loader"),
elLangToggler = document.querySelector(".js-lang-toggler"),
elLangList = document.querySelector(".js-lang-list");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function (){
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});

if (elLangToggler) {
  elLangToggler.addEventListener("click", function (){
    elLangToggler.classList.toggle("language__toggler--open");
    elLangList.classList.toggle("language__list--open")
  });
}