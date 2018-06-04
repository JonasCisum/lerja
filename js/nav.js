async function hentNav() {
    let navFil = await fetch("template_nav.html");
    let nav = await navFil.text();

    document.querySelector("[data-nav]").innerHTML = nav;

}
window.addEventListener("load", hentNav);




async function hentNavBurger() {
    let navFil = await fetch("template_nav_burger.html");
    let nav = await navFil.text();

    document.querySelector("[data-burger]").innerHTML = nav;

}
window.addEventListener("load", hentNavBurger);
