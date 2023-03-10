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

let antalSelect = document.querySelector("#antal")
let personForms = document.querySelectorAll(".person")
let antal = 1

let godkännelse = document.querySelector(".godkännelse")

antalSelect.addEventListener("change", function (){
    let antalVal = Number(antalSelect.value)
    for(let i = 0; i < personForms.length; i++){
        if(i < antalVal) {
            personForms[i].classList.remove("hide")
            let inputs = personForms[i].getElementsByTagName("input")
            for (let j = 0; j < inputs.length; j++) {
                inputs[j].required = true;
            }
        } else {
            personForms[i].classList.add("hide")
            let inputs = personForms[i].getElementsByTagName("input")
            for (let j = 0; j < inputs.length; j++) {
                inputs[j].required = false;
            }
        }
    }
    if(antalSelect.value == "1"){
        document.querySelectorAll(".vilken-person")[0].classList.add("hide")
        godkännelse.innerText = "JAG GODKÄNNER HÄRMED ATT BLI FILMAD OCH FOTOGRAFERAD UNDER BRÖLLOPSDAGEN"
    } else {
        document.querySelectorAll(".vilken-person")[0].classList.remove("hide")
        godkännelse.innerText = "VI GODKÄNNER HÄRMED ATT BLI FILMADE OCH FOTOGRAFERADE UNDER BRÖLLOPSDAGEN"
    }
    antal = antalVal
})