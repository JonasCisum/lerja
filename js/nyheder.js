//
//    For each klon af hver nyhed
//

let indholdNyheder;

// Lav en klon af template
function insertNyheder() {
    let nyhedTemplate = document.querySelector("#nyhed_template");
    let nyhedModtager = document.querySelector("#nyhed_modtager");
    nyhedModtager.innerHTML = "";
    //kør json array igennem og lav en klon af template
    indholdNyheder.forEach(hverNyhed => {
        let klon = nyhedTemplate.cloneNode(true).content;
        //
        klon.querySelector("[data-nyhedImg]").src = hverNyhed.acf.nyhedbillede;
        klon.querySelector("[data-nyhedImg]").alt = hverNyhed.acf.billedetekst;
        klon.querySelector("[data-nyhedTitel]").textContent = hverNyhed.title.rendered;
        klon.querySelector("[data-nyhedUddrag]").innerHTML = hverNyhed.excerpt.rendered;
        klon.querySelector(".btn_to_nyhed").href = "single.html?id=" + hverNyhed.id;

        nyhedModtager.appendChild(klon);
    })
}
