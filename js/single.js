async function hentJsonNyhederSingle() {
    let url = new URL(window.location.href);
    let parameter = new URLSearchParams(url.search);
    let id = parameter.get("id");

    console.log(url);

    let jsonData = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/nyheder/" + id);
    let single = await jsonData.json();

    console.log(single);

    // Sæt indhold ind
    document.querySelector("[data-nyhed_billede]").src = single.acf.nyhedbillede;
    document.querySelector("[data-nyhed_billede]").alt = single.acf.billedetekst;

    document.querySelector("[data-nyhed_titel]").textContent = single.title.rendered;

    document.querySelector("[data-nyhed_underrubrik]").innerHTML = single.excerpt.rendered;

    document.querySelector("[data-nyhed_brodtekst]").innerHTML = single.content.rendered;
}

document.addEventListener("DOMContentLoaded", hentJsonNyhederSingle);
