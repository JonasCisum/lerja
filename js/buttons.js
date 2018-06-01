//
//        Buttons:
//

// Gem a-href elementer med 'btn_to_shop'-class i et array (btnShop):
let btnShop = document.getElementsByClassName('btn_to_shop');
let btnOm = document.getElementsByClassName('btn_to_om');

// Loop gennem btnShop array af elementer (med class = 'btn_to_shop') og skift href værdien ud med noget det rigtige link:
for (let i = 0; i < btnShop.length; i++) {
    btnShop[i].href = "shop.html";
}
for (let i = 0; i < btnOm.length; i++) {
    btnOm[i].href = "om.html";
}

function insertFBURL() {
    //kør json array igennem
    indholdSoMeFB.forEach(hverURL => {
        // Hvis et array-objekt har title="xx" skal den hente indhold fra hverSide.acf.xx og sætte indholdet ind i [data-xx] på hver side:
        if (hverURL.title.rendered == "Facebook") {
            document.querySelector(".btn_to_fb").href = hverURL.acf.url_adresse;
        }
    })
}

function insertIGURL() {
    //kør json array igennem
    indholdSoMeIG.forEach(hverURL => {
        // Hvis et array-objekt har title="xx" skal den hente indhold fra hverSide.acf.xx og sætte indholdet ind i [data-xx] på hver side:
        if (hverURL.title.rendered == "Instagram") {
            document.querySelector(".btn_to_ig").href = hverURL.acf.url_adresse;
        }
    })
}
