const menu = document.getElementById("menu");

menu.addEventListener("click", showLinks);
let show = false;
function showLinks() {
  const mob = document.getElementById("mob");
  if (show) {
    show = !show;
    mob.style.display = "none";
    document.getElementById("section-top").style.marginTop = "1rem";
  } else {
    mob.style.display = "flex";
    document.getElementById("section-top").style.marginTop = "6rem";
    show = !show;
  }
}
