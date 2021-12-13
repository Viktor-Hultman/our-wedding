function toSite(string) {
    let fullPage = string + ".html"
    window.location.href = fullPage
}

let antalSelect = document.querySelector("#antal")
let personForms = document.getElementsByClassName("person")

antalSelect.addEventListener("change", function (){
    let antal = Number(antalSelect.value)
    for(let i = 0; i < personForms.length; i++){
        if(i < antal) {
            console.log("Show person" + [i]);
            personForms[i].classList.remove("hide")
        } else {
            console.log(antal);
            console.log("Hide person" + [i]);
            personForms[i].classList.add("hide")
        }
    }
})