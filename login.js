function toSite(string) {
    let fullPage = string + ".html"
    window.location.href = fullPage
}

if(localStorage.getItem('logedInHoglin') == "true") {
    toSite("index")
}

let rightPassword = "XH3L8"

let passwordInput = document.querySelector("#password-input")
let loginButton = document.querySelector("#login-button")
let message = document.querySelector("#validation-message")


passwordInput.addEventListener("keypress", function(e) {
    if (e.key === 'Enter') {
        let enteredPassword = passwordInput.value.toUpperCase()
        if(enteredPassword == rightPassword) {
            localStorage.setItem("logedInHoglin", true)
            toSite('index')
        } else {
            message.classList.remove("hide")
        }
    }

})

loginButton.addEventListener("click", function() {
    let enteredPassword = passwordInput.value.toUpperCase()
    if(enteredPassword == rightPassword) {
        toSite('index')
        localStorage.setItem("logedInHoglin", true)
    } else {
        message.classList.remove("hide")
    }
})