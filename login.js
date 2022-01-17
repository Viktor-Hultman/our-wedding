function toSite(string) {
    let fullPage = string + ".html"
    window.location.href = fullPage
}

if(localStorage.getItem('logedInHoglinHoglin') == "true") {
    toSite("index")
}

let rightPassword = "XH3L8"

let passwordInput = document.querySelector("#password-input")
let loginButton = document.querySelector("#login-button")
let message = document.querySelector("#validation-message")


passwordInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        if(passwordInput.value == rightPassword) {
            localStorage.setItem("logedInHoglin", true)
            toSite('index')
        } else {
            message.classList.remove("hide")
        }
    }

})

loginButton.addEventListener("click", function() {
    if(passwordInput.value == rightPassword) {
        toSite('index')
        localStorage.setItem("logedInHoglin", true)
    } else {
        message.classList.remove("hide")
    }
})