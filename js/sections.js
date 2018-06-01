// Hent template_section_shop.html ind i <section data-sectionShop> gennem javascript.
async function hentSectionShop() {
    let sectionFil = await fetch("template_section_shop.html");
    let section = await sectionFil.text();

    document.querySelector("[data-sectionShop]").innerHTML = section;
}
window.addEventListener("load", hentSectionShop);

// ^SKAL SLETTES?!?!?!


// Hent template_section_partnere.html ind i <section data-sectionPartnere> gennem javascript.
async function hentSectionPartnere() {
    let sectionFil = await fetch("template_section_showcase.html");
    let section = await sectionFil.text();

    document.querySelector("#sectionPartnere").innerHTML = section;
}
window.addEventListener("load", hentSectionPartnere);

// ^Virker ikke??


// Hent footer.html ind i <footer> gennem javascript.
async function hentFooter() {
    let sectionFil = await fetch("footer.html");
    let section = await sectionFil.text();

    document.querySelector("footer").innerHTML = section;
}
window.addEventListener("load", hentFooter);



//
// Showcase items:
//

let indholdShowcase;
let showcaseTemplate = document.querySelector("#showcase_template");

// Lav en klon af template
function insertShowcase() {
    //kør json array igennem og lav en klon af template
    indholdShowcase.forEach(hverShowcase => {
        let klon = showcaseTemplate.cloneNode(true).content;
        //
        klon.querySelector("[data-showcase_img]").src = hverShowcase.acf.billede;
        klon.querySelector("[data-showcase_navn]").textContent = hverShowcase.acf.virksomhedsnavn;
        document.querySelector("#showcase_section").appendChild(klon);
    })
}


//
// CTA Webshop:
//

function insertCTAWebshop() {
    //kør json array igennem
    console.log(indholdCTAWebshop);

    indholdCTAWebshop.forEach(hverCTAWebshop => {
        // Hvis et array-objekt har title="xx" skal den hente indhold fra hverSide.acf.xx og sætte indholdet ind i [data-xx] på hver side:
        if (hverCTAWebshop.title.rendered == "Webshop Sektion") {

            document.querySelector("[data-CTAWebshop_titel]").textContent = hverCTAWebshop.acf.sektiontitel;

            document.querySelector("[data-CTAWebshop_underrubrik]").textContent = hverCTAWebshop.acf.underrubrik;
        }
    })
}
