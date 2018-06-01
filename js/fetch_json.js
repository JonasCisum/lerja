//Funktion der finder REST API slug fra wordpress og laver det til en brugbar Json-fil:
async function hentJson() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/sider");

    //Vis objekt som tekst:
    indhold = await jsonObjekt.json();

    insertContent();
}

async function hentJsonNyheder() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/nyheder");

    //Vis objekt som tekst:
    indholdNyheder = await jsonObjekt.json();

    insertNyheder();
}

async function hentJsonShowcase() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/showcase");

    //Vis objekt som tekst:
    indholdShowcase = await jsonObjekt.json();

    insertShowcase();
}

async function hentJsonSoMeFB() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/some_urls");

    //Vis objekt som tekst:
    indholdSoMeFB = await jsonObjekt.json();

    insertFBURL();
}

async function hentJsonSoMeIG() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/some_urls");

    //Vis objekt som tekst:
    indholdSoMeIG = await jsonObjekt.json();

    insertIGURL();
}

async function hentJsonFooter() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/footer");

    //Vis objekt som tekst:
    indholdFooter = await jsonObjekt.json();

    insertFooter();
}


// Hent JSON til header
async function hentJsonHeader() {
    // Hent json fra REST API:
    let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/header");

    //Vis objekt som tekst:
    indholdHeader = await jsonObjekt.json();

    //Sæt img src til stien fra JSON
    insertHeader()
}

//function insertHeader() {
//    document.querySelector(".header_logo_img").src = indholdHeader.acf.logo;
//}

function insertHeader() {
    //kør json array igennem
    indholdHeader.forEach(hverHeader => {
        // Hvis et array-objekt har title="xx" skal den hente indhold fra hverSide.acf.xx og sætte indholdet ind i [data-xx] på hver side:
        if (hverHeader.title.rendered == "logo") {
            document.querySelector(".header_logo_img").src = hverHeader.acf.logo;
        }
    })
}

document.addEventListener("DOMContentLoaded", hentJson);
document.addEventListener("DOMContentLoaded", hentJsonNyheder);
document.addEventListener("DOMContentLoaded", hentJsonShowcase);
document.addEventListener("DOMContentLoaded", hentJsonSoMeFB);
document.addEventListener("DOMContentLoaded", hentJsonSoMeIG);
document.addEventListener("DOMContentLoaded", hentJsonFooter);
document.addEventListener("DOMContentLoaded", hentJsonHeader);

// hentJson burde hedde hentREST_API for sematntisk forståelse
