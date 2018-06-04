async function hentNav() {
    let navFil = await fetch("template_nav.html");
    let nav = await navFil.text();

    document.querySelector("[data-nav]").innerHTML = nav;
    document.querySelector("[data-burger]").innerHTML = nav;
}
window.addEventListener("load", hentNav);
