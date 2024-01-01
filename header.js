window.onscroll = function() {headerSticky()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function headerSticky() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
