function insertFooter() {
    console.log(indholdFooter);
    //kør json array igennem
    indholdFooter.forEach(hverFooter => {
        // Hvis et array-objekt har title="xx" skal den hente indhold fra hverSide.acf.xx og sætte indholdet ind i [data-xx] på hver side:
        if (hverFooter.title.rendered == "Adressefelt") {
            document.querySelector("[data-adresse_felt]").innerHTML = hverFooter.acf.indhold;
        }
        if (hverFooter.title.rendered == "Navn og tekst") {
            document.querySelector("[data-footer_overskrift]").innerHTML = hverFooter.acf.footer_overskrift;
            document.querySelector("[data-footer_underrubrik]").innerHTML = hverFooter.acf.footer_underrubrik;
        }
        if (hverFooter.title.rendered == "Åbningstider") {
            document.querySelector("[data-aabningstider]").innerHTML = hverFooter.acf.indhold;
        }
    })
}
