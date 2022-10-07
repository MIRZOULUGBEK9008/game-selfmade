const elLoader = document.querySelector(".js-loader");

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function (){
    elLoader.classList.add("loader-wrapper--none")
  }, 800);
});