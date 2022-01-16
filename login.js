function toSite(string) {
    let fullPage = string + ".html"
    window.location.href = fullPage
}

if(localStorage.getItem('logedIn') == "true") {
    toSite("index")
}

let rightPassword = "XH3L8"

let passwordInput = document.querySelector("#password-input")
let loginButton = document.querySelector("#login-button")
let message = document.querySelector("#validation-message")


passwordInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        if(passwordInput.value == rightPassword) {
            toSite('index')
            localStorage.setItem("logedIn", true)
        } else {
            message.classList.remove("hide")
        }
    }

})

loginButton.addEventListener("click", function() {
    if(passwordInput.value == rightPassword) {
        toSite('index')
        localStorage.setItem("logedIn", true)
    } else {
        message.classList.remove("hide")
    }
})