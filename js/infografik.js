        let kaffeSelector = document.querySelector('.kaffe');
        let antalKaffeTal;

        let lerSelector = document.querySelector('.ler');
        let antalLerTal;

        let kopperSelector = document.querySelector('.kopper');
        let antalKopperTal;



        //Når dokumentet er loaded start hentJsonTal

        document.addEventListener("DOMContentLoaded", hentJsonTal);


        //Hent Json ind og start funktion insertTal

        async function hentJsonTal() {

            let jsonObjekt = await fetch("http://kea.jonascisum.dk/kea/eksamen-02/lerja/wordpress/wp-json/wp/v2/infografik");

            //Tag jsonObjekt og lav det til Json

            indholdTal = await jsonObjekt.json();

            console.log(indholdTal);

            //start funktion insertTal

            insertTal();
        }




        function insertTal() {

            //En forEach funktion der løber vores Json igennem

            indholdTal.forEach(hverTal => {

                //Hvis der står kaffe i titel_rendered, så tag tallet der ligger i antal_kaffe

                if (hverTal.title.rendered == "kaffe") {

                    antalKaffeTal = hverTal.acf.antal_kaffe;
                }

                if (hverTal.title.rendered == "kopper") {

                    antalKopperTal = hverTal.acf.antal_kopper;
                }

                if (hverTal.title.rendered == "ler") {

                    antalLerTal = hverTal.acf.antal_ler;
                }
            })

        }



        var isInViewport = function (elem) {

            var bounding = elem.getBoundingClientRect();

            return (
                bounding.top >= 0 &&
                bounding.left >= 0 &&
                bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        };

        //setTimeout

        var kaffe = document.querySelector('.kaffe');

        window.addEventListener('scroll', function () {
            if (isInViewport(kaffe)) {


                kaffeSelector.innerHTML = antalKaffeTal;

                kopperSelector.innerHTML = antalKopperTal;

                lerSelector.innerHTML = antalLerTal;


                console.log('In the viewport! :)');
            } else {


                kaffeSelector.innerHTML = 0;

                kopperSelector.innerHTML = 0;

                lerSelector.innerHTML = 0;


                console.log('Not in the viewport :(');
            }
        })
