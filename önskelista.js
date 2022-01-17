function toSite(string) {
    let fullPage = string + ".html"
    window.location.href = fullPage
}

if(localStorage.getItem('logedInHoglin') == null) {
    toSite("login")
}

let menu = document.querySelector(".hamburger-menu")
let burger = document.querySelector(".hamburger")
let closeMenu = document.querySelector(".menu-exit")

burger.addEventListener("click", function() {
    if(menu.classList.contains("reset-animation")){
        menu.classList.remove("reset-animation")
    }
    menu.classList.add("dropdown-animation")
})

closeMenu.addEventListener("click", function() {
    if(menu.classList.contains("dropdown-animation")){
        menu.classList.remove("dropdown-animation")
    }
    menu.classList.add("reset-animation")
})


let önskelista = [
    {
        "namn": "DYSON DAMMSUGARE",
        "pris": 3390,
        "inköpsställe": "ELGIGANTEN",
        "länk": "https://www.elgiganten.se/product/hem-och-hushall/dammsugare-och-rengoring/skaftdammsugare/370862/dyson-omni-glide-dammsugare-37013301-lila"
    },
    {
        "namn": "CIRRUS NO.2 HANDSTEAMER - SVART",
        "pris": 1200,
        "inköpsställe": "STEAMERY",
        "länk": "https://steamery.se/cirrus-no2-steamer-svart"
    },
    {
        "namn": "ARVET KOKKÄRL",
        "pris": 3485,
        "inköpsställe": "VARGEN & THOR",
        "länk": "https://vargenthor.se/p/arvet-set-3st-kokkarl-i-mattsvart-massing/"
    },
    {
        "namn": "RW ARDEN BESTICKSETT",
        "pris": 1371,
        "inköpsställe": "BAGAREN & KOCKEN",
        "länk": "https://bagarenochkocken.se/dukade-bordet/bestick/bestickset/robert-welch-arden-bestickset-24-del/?shopping_id_click=1067-21618-17461&gclid=Cj0KCQiA5OuNBhCRARIsACgaiqWxExy-kZVlUoB6LCJsM5pA-4VmYCni08qDY3otR_XSWT57qLmtpcoaAlrzEALw_wcB"
    },
    {
        "namn": "NOBLESSE LONGDRINKGLAS",
        "pris": 299,
        "inköpsställe": "CERVERA",
        "länk": "https://www.cervera.se/produkt/noblesse-longdrink-4-pack?gclid=Cj0KCQiA5OuNBhCRARIsACgaiqV51tyRbI4OZs2_i8O-GmTQpfs8sJnzd-oALR5CDTEcx-OgD9pXVgUaAhGjEALw_wcB&gclsrc=aw.ds"
    },
    {
        "namn": "PÅSLAKANSET ELMIRA - LINNEBEIGE (x2)",
        "pris": 2239,
        "inköpsställe": "ELLOS",
        "länk": "https://www.ellos.se/ellos-home/paslakanset-elmira-i-tvattat-lin-2-eller-3-delar/1059490-01"
    },
    {
        "namn": "MOCCAMASTER",
        "pris": 1995,
        "inköpsställe": "ELGIGANTEN",
        "länk": "https://www.elgiganten.se/product/hem-och-hushall/kaffemaskin-och-espresso/kaffebryggare/350819/moccamaster-manual-kaffebryggare-53703-svart?&scid=SEM7520722487&utm_source=google_search&utm_medium=SEM&utm_campaign=google-pla&utm_content=sda&gclid=Cj0KCQiA5OuNBhCRARIsACgaiqVzWXIJbeWmOdUaY5nWXyle_0t2v34nCFx5eDXmEWXRLms454HjjlYaAiPbEALw_wcB&gclsrc=aw.ds"
    },
    {
        "namn": "LS IDEAL KOCKKNIV",
        "pris": 789,
        "inköpsställe": "KITCHENTIME",
        "länk": "https://www.kitchentime.se/p/ideal-kockkniv-stal-svart-20-cm?gclid=Cj0KCQiA5OuNBhCRARIsACgaiqVFgYh74YKLjsrFf1O9_l1oZ7nYx_snCqe9W1IacpJik2bgznt7nZkaAsMSEALw_wcB"
    },
    {
        "namn": "WILTON BAKFORMAR",
        "pris": 699,
        "inköpsställe": "DREAMCAKES",
        "länk": "https://dreamcakes.se/baka/bakformar/runda/4st-runda-wilton-bakformar-deep-performance/?utm_campaign=E%7C+Shopping&utm_source=google&utm_medium=ppc&utm_term=&utm_content=3321981xCj0KCQiA5OuNBhCRARIsACgaiqUnNGBH1-qNRfnn91aFvoyVNsqKxI-qA_zC6pOuNFpQFvOTZ3h65XQaAgtoEALw_wcB"
    },
    {
        "namn": "BRANDSLÄCKARE SOLSTICKAN",
        "pris": 788,
        "inköpsställe": "ROYALDESIGN",
        "länk": "https://royaldesign.se/solstickan-brandslackare-2-kg?p=186027"
    },
    {
        "namn": "THE KINFOLK HOME",
        "pris": 332,
        "inköpsställe": "ADLIBRIS",
        "länk": "https://www.adlibris.com/se/bok/the-kinfolk-home-9781579656652"
    },
    {
        "namn": "RIPPLE CHAMPAGNEGLAS (x2)",
        "pris": 429,
        "inköpsställe": "CERVERA",
        "länk": "https://www.cervera.se/produkt/ferm-ripple-champagneglas-15-cl-klar-2-pack?gclid=Cj0KCQiA5OuNBhCRARIsACgaiqW1wUEBl1QxAV1oh9cf2KrA-QDnLnZGGKs6PrfRqzJzyuF8ED4rJs8aAgH1EALw_wcB&gclsrc=aw.ds"
    },
    {
        "namn": "VAS DIANA LARGE - TRANSPARENT",
        "pris": 449,
        "inköpsställe": "ELLOS",
        "länk": "https://www.ellos.se/ellos-home/vas-diana-large/1578507-01"
    },
    {
        "namn": "MAME KARAFF M OYSTER",
        "pris": 386,
        "inköpsställe": "KITCHENTIME",
        "länk": "https://www.kitchentime.se/p/mame-karaff-m-oyster?gclid=Cj0KCQiA5OuNBhCRARIsACgaiqXbt5C3uEmAryShF8nNegjaOXH94B5ylRoKeG3V200RtEMDMW9biXsaAt-FEALw_wcB"
    },
    {
        "namn": "SÄNGBRICKA EK",
        "pris": 607,
        "inköpsställe": "KITCHENTIME",
        "länk": "https://www.kitchentime.se/p/sangbricka-ek-62x31x21-cm?gclid=Cj0KCQiA5OuNBhCRARIsACgaiqWK0JQLjvsaNxyMQkmI-MDOe5hXFp1yE7qyFVtWIj3Mu5XtuMKgLz4aArxUEALw_wcB"
    },
    {
        "namn": "SERVETT PEMBROKE 2-PACK (x4)",
        "pris": 119,
        "inköpsställe": "ELLOS",
        "länk": "https://www.ellos.se/ellos-home/servett-pembroke-i-lin-2-pack/1065570-11"
    },
    {
        "namn": "MENSOLAS VINSTÄLL",
        "pris": 359,
        "inköpsställe": "WINE AND BARRELS",
        "länk": "https://www.wineandbarrels.se/shop/209-mensolas-vinstall/1441-mensolas---9-flaskor---furu/"
    },
    {
        "namn": "PLISSÉ VATTENKOKARE - SVART",
        "pris": 899,
        "inköpsställe": "BAGAREN & KOCKEN",
        "länk": "https://bagarenochkocken.se/koksmaskiner/vattenkokare/alessi-mdl06-plisse-vattenkokare-1-liter-svart/?shopping_id_click=1067-21618-45913&gclid=Cj0KCQiA5OuNBhCRARIsACgaiqX4pXHaIUdMsrmehJOAU8mLPQlslUfivJqi2tcXn0qWs1a3lihqNc0aAkYOEALw_wcB"
    },
    {
        "namn": "VERTUO CARAFE SET",
        "pris": 429,
        "inköpsställe": "NESPRESSO",
        "länk": "https://www.nespresso.com/se/se/order/accessories/vertuo/vertuo-carafe-set"
    },
    {
        "namn": "AEROCCINO MJÖLKSKUMMARE - SVART",
        "pris": 699,
        "inköpsställe": "NESSPRESSO",
        "länk": "https://www.nespresso.com/se/se/order/accessories/original/aeroccino-3-svart-mjolkskummare"
    },
    {
        "namn": "PEPPARKVARN FABRICIUS",
        "pris": 289,
        "inköpsställe": "ELLOS",
        "länk": "https://www.ellos.se/bloomingville/pepparkvarn-fabricius/1619842-01"
    }
]


// Sortering från lägst till högsta pris
// önskelista.sort(function (a, b) {
//     return a.pris - b.pris;
// });

// Sortering från högsta till lägsta pris
// önskelista.sort(function (a, b) {
//     return b.pris - a.pris;
// });


let list = document.querySelector(".list")

function skapaLista(lista) {
    for(let i = 0; i < lista.length; i++) {

        let artikel = document.createElement("li");
        artikel.classList.add("item")

        let produktNamn = document.createElement("p");
        produktNamn.classList.add("item-produkt", "produkt");
        produktNamn.innerText = lista[i].namn

        let produktPris = document.createElement("p");
        produktPris.classList.add("item-pris", "pris");
        produktPris.innerText = lista[i].pris + " kr"
        
        let produktInköpsställe = document.createElement("a");
        produktInköpsställe.innerText = lista[i].inköpsställe
        produktInköpsställe.classList.add("item-insköpställen", "insköpställen");
        produktInköpsställe.setAttribute("href", lista[i].länk)
        produktInköpsställe.setAttribute("rel", "noreferrer noopener")
        produktInköpsställe.setAttribute("target", "_blank")


        artikel.appendChild(produktNamn)
        artikel.appendChild(produktPris)
        artikel.appendChild(produktInköpsställe)
        list.appendChild(artikel)
    }
}

skapaLista(önskelista)


let sorteringSelect = document.querySelector(".sortering-select")

sorteringSelect.addEventListener("change", function(){
    if(this.value == "Pris - Stigande") {
        list.innerHTML = ""

        önskelista.sort(function (a, b) {
            return a.pris - b.pris;
        });
        
        skapaLista(önskelista)
        
    } else if(this.value == "Pris - Fallande") {
        list.innerHTML = ""

        önskelista.sort(function (a, b) {
            return b.pris - a.pris;
        });
        
        skapaLista(önskelista)
    }
})
