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

let person1 = {
    person_1_namn: "",
    person_1_matpref: "",
    person_1_alkohol: null,
    person_1_sovplats: null,
};

let person2 = {
    person_2_namn: "",
    person_2_matpref: "",
    person_2_alkohol: null,
    person_2_sovplats: null,
};

let person3 = {
    person_3_namn: "",
    person_3_matpref: "",
    person_3_alkohol: null,
    person_3_sovplats: null,
};

let person4 = {
    person_4_namn: "",
    person_4_matpref: "",
    person_4_alkohol: null,
    person_4_sovplats: null,
};

let person5 = {
    person_5_namn: "",
    person_5_matpref: "",
    person_5_alkohol: null,
    person_5_sovplats: null,
};

let telefonnummer = ""
let låtönskan = ""
let godkänt = null
let antal = 1

let spanID = document.querySelector('.spanID')

antalSelect.addEventListener("change", function (){
    let antalVal = Number(antalSelect.value)
    for(let i = 0; i < personForms.length; i++){
        if(i < antalVal) {
            personForms[i].classList.remove("hide")
        } else {
            personForms[i].classList.add("hide")
        }
    }
    if(antalSelect.value == "1"){
        document.querySelectorAll(".vilken-person")[0].classList.add("hide")
        spanID.innerText = "JAG"
    } else {
        document.querySelectorAll(".vilken-person")[0].classList.remove("hide")
        spanID.innerText = "VI"
    }
    antal = antalVal
})


let person1namn = document.querySelector(".person-1 #Namn-1")

person1namn.addEventListener("input", function (){
    person1.person_1_namn = person1namn.value
})

let person1Matpref = document.querySelector(".person-1 #MatPref-1")

person1Matpref.addEventListener("input", function (){
    person1.person_1_matpref = person1Matpref.value
})

let person1AlkoJa = document.querySelector(".person-1 .alkohol-ja")
let person1AlkoNej = document.querySelector(".person-1 .alkohol-nej")

person1AlkoJa.addEventListener("click", function (){
    person1.person_1_alkohol = true
    this.firstElementChild.classList.add("selected")
    person1AlkoNej.firstElementChild.classList.remove("selected")
})

person1AlkoNej.addEventListener("click", function (){
    person1.person_1_alkohol = false
    this.firstElementChild.classList.add("selected")
    person1AlkoJa.firstElementChild.classList.remove("selected")
})

let person1SovPlatsJa = document.querySelector(".person-1 .sovplats-ja")
let person1SovPlatsNej = document.querySelector(".person-1 .sovplats-nej")

person1SovPlatsJa.addEventListener("click", function (){
    person1.person_1_sovplats = true
    this.firstElementChild.classList.add("selected")
    person1SovPlatsNej.firstElementChild.classList.remove("selected")
})

person1SovPlatsNej.addEventListener("click", function (){
    person1.person_1_sovplats = false
    this.firstElementChild.classList.add("selected")
    person1SovPlatsJa.firstElementChild.classList.remove("selected")
})

// Person 1 ^^

let person2namn = document.querySelector(".person-2 #Namn-2")

person2namn.addEventListener("input", function (){
    person2.person_2_namn = person2namn.value
})

let person2Matpref = document.querySelector(".person-2 #MatPref-2")

person2Matpref.addEventListener("input", function (){
    person2.person_2_matpref = person2Matpref.value
})

let person2AlkoJa = document.querySelector(".person-2 .alkohol-ja")
let person2AlkoNej = document.querySelector(".person-2 .alkohol-nej")

person2AlkoJa.addEventListener("click", function (){
    person2.person_2_alkohol = true
    this.firstElementChild.classList.add("selected")
    person2AlkoNej.firstElementChild.classList.remove("selected")
    
})

person2AlkoNej.addEventListener("click", function (){
    person2.person_2_alkohol = false
    this.firstElementChild.classList.add("selected")
    person2AlkoJa.firstElementChild.classList.remove("selected")
    
})

let person2SovPlatsJa = document.querySelector(".person-2 .sovplats-ja")
let person2SovPlatsNej = document.querySelector(".person-2 .sovplats-nej")

person2SovPlatsJa.addEventListener("click", function (){
    person2.person_2_sovplats = true
    this.firstElementChild.classList.add("selected")
    person2SovPlatsNej.firstElementChild.classList.remove("selected")
    
})

person2SovPlatsNej.addEventListener("click", function (){
    person2.person_2_sovplats = false
    this.firstElementChild.classList.add("selected")
    person2SovPlatsJa.firstElementChild.classList.remove("selected")
    
})

// Person 2 ^^

let person3namn = document.querySelector(".person-3 #Namn-3")

person3namn.addEventListener("input", function (){
    person3.person_3_namn = person3namn.value
})

let person3Matpref = document.querySelector(".person-3 #MatPref-3")

person3Matpref.addEventListener("input", function (){
    person3.person_3_matpref = person3Matpref.value
})

let person3AlkoJa = document.querySelector(".person-3 .alkohol-ja")
let person3AlkoNej = document.querySelector(".person-3 .alkohol-nej")

person3AlkoJa.addEventListener("click", function (){
    person3.person_3_alkohol = true
    this.firstElementChild.classList.add("selected")
    person3AlkoNej.firstElementChild.classList.remove("selected")
    
})

person3AlkoNej.addEventListener("click", function (){
    person3.person_3_alkohol = false
    this.firstElementChild.classList.add("selected")
    person3AlkoJa.firstElementChild.classList.remove("selected")
    
})

let person3SovPlatsJa = document.querySelector(".person-3 .sovplats-ja")
let person3SovPlatsNej = document.querySelector(".person-3 .sovplats-nej")

person3SovPlatsJa.addEventListener("click", function (){
    person3.person_3_sovplats = true
    this.firstElementChild.classList.add("selected")
    person3SovPlatsNej.firstElementChild.classList.remove("selected")
    
})

person3SovPlatsNej.addEventListener("click", function (){
    person3.person_3_sovplats = false
    this.firstElementChild.classList.add("selected")
    person3SovPlatsJa.firstElementChild.classList.remove("selected")
    
})

// Person 3 ^^

let person4namn = document.querySelector(".person-4 #Namn-4")

person4namn.addEventListener("input", function (){
    person4.person_4_namn = person4namn.value
})

let person4Matpref = document.querySelector(".person-4 #MatPref-4")

person4Matpref.addEventListener("input", function (){
    person4.person_4_matpref = person4Matpref.value
})

let person4AlkoJa = document.querySelector(".person-4 .alkohol-ja")
let person4AlkoNej = document.querySelector(".person-4 .alkohol-nej")

person4AlkoJa.addEventListener("click", function (){
    person4.person_4_alkohol = true
    this.firstElementChild.classList.add("selected")
    person4AlkoNej.firstElementChild.classList.remove("selected")
    
})

person4AlkoNej.addEventListener("click", function (){
    person4.person_4_alkohol = false
    this.firstElementChild.classList.add("selected")
    person4AlkoJa.firstElementChild.classList.remove("selected")
    
})

let person4SovPlatsJa = document.querySelector(".person-4 .sovplats-ja")
let person4SovPlatsNej = document.querySelector(".person-4 .sovplats-nej")

person4SovPlatsJa.addEventListener("click", function (){
    person4.person_4_sovplats = true
    this.firstElementChild.classList.add("selected")
    person4SovPlatsNej.firstElementChild.classList.remove("selected")
    
})

person4SovPlatsNej.addEventListener("click", function (){
    person4.person_4_sovplats = false
    this.firstElementChild.classList.add("selected")
    person4SovPlatsJa.firstElementChild.classList.remove("selected")
    
})

// Person 4 ^^

let person5namn = document.querySelector(".person-5 #Namn-5")

person5namn.addEventListener("input", function (){
    person5.person_5_namn = person5namn.value
})

let person5Matpref = document.querySelector(".person-5 #MatPref-5")

person5Matpref.addEventListener("input", function (){
    person5.person_5_matpref = person5Matpref.value
})

let person5AlkoJa = document.querySelector(".person-5 .alkohol-ja")
let person5AlkoNej = document.querySelector(".person-5 .alkohol-nej")

person5AlkoJa.addEventListener("click", function (){
    person5.person_5_alkohol = true
    this.firstElementChild.classList.add("selected")
    person5AlkoNej.firstElementChild.classList.remove("selected")
    
})

person5AlkoNej.addEventListener("click", function (){
    person5.person_5_alkohol = false
    this.firstElementChild.classList.add("selected")
    person5AlkoJa.firstElementChild.classList.remove("selected")
    
})

let person5SovPlatsJa = document.querySelector(".person-5 .sovplats-ja")
let person5SovPlatsNej = document.querySelector(".person-5 .sovplats-nej")

person5SovPlatsJa.addEventListener("click", function (){
    person5.person_5_sovplats = true
    this.firstElementChild.classList.add("selected")
    person5SovPlatsNej.firstElementChild.classList.remove("selected")
    
})

person5SovPlatsNej.addEventListener("click", function (){
    person5.person_5_sovplats = false
    this.firstElementChild.classList.add("selected")
    person5SovPlatsJa.firstElementChild.classList.remove("selected")
    
})

// Person 5 ^^

let låtÖnskan = document.querySelector("#låtÖnskan")

låtÖnskan.addEventListener("input", function (){
    låtönskan = låtÖnskan.value
})

let telefonInput = document.querySelector("#telefon")

telefonInput.addEventListener("input", function (){
    telefonnummer = telefonInput.value
})

let godkännelse = document.querySelector(".filmning-ja")

godkännelse.addEventListener("click", function (){
    godkänt = !godkänt;
    this.firstElementChild.classList.toggle("selected")
})

let anmälanBtn = document.querySelector(".anmälan-button")
let validationMsg = document.querySelector("#validation-message")

function allFieldsFilled(obj) {
    // Line below checks if any key is not 'null' or an empty string
    if(!Object.values(obj).some(key => (key === null || key === ''))) {
        return true
    }
    return false
}

function sendEmail() {
    if (antal == 1) {
        Email.send({
            Host: "smtp.mailtrap.io",
            Username: "ff12ecb9d9dc09",
            Password: "e7b06dd8e28b1d",
            To: "viktor@gmail.com",
            From: "guest@gmail.com",
            Subject: "Bröllopsanmälan",
            Body: "Antal: " + antal + "<br>" + "<br>" + "Namn: " + person1.person_1_namn + "<br>" + "Specialkost/Allergi: " + person1.person_1_matpref + "<br>" + "Alkohol: " + person1.person_1_alkohol + "<br>" + "Sovplats: " + person1.person_1_sovplats + "<br>" + "<br>" + "Låtönskan: " + låtönskan + "<br>" + "<br>" + "TelefonNummer: " + telefonnummer
        })
    }

    if (antal == 2) {
        Email.send({
            Host: "smtp.mailtrap.io",
            Username: "ff12ecb9d9dc09",
            Password: "e7b06dd8e28b1d",
            To: "viktor@gmail.com",
            From: "guest@gmail.com",
            Subject: "Bröllopsanmälan",
            Body: "Antal: " + antal + "<br>" + "<br>" + "Person 1" + "<br>" + "Namn: " + person1.person_1_namn + "<br>" + "Specialkost/Allergi: " + person1.person_1_matpref + "<br>" + "Alkohol: " + person1.person_1_alkohol + "<br>" + "Sovplats: " + person1.person_1_sovplats + "<br>" + "<br>" + "Person 2" + "<br>" + "Namn: " + person2.person_2_namn + "<br>" + "Specialkost/Allergi: " + person2.person_2_matpref + "<br>" + "Alkohol: " + person2.person_2_alkohol + "<br>" + "Sovplats: " + person2.person_2_sovplats + "<br>" + "<br>" + "Låtönskan: " + låtönskan + "<br>" + "<br>" + "Telefonnummer: " + telefonnummer
        })
    }

    if (antal == 3) {
        Email.send({
            Host: "smtp.mailtrap.io",
            Username: "ff12ecb9d9dc09",
            Password: "e7b06dd8e28b1d",
            To: "viktor@gmail.com",
            From: "guest@gmail.com",
            Subject: "Bröllopsanmälan",
            Body: "Antal: " + antal + "<br>" + "<br>" + "Person 1" + "<br>" + "Namn: " + person1.person_1_namn + "<br>" + "Specialkost/Allergi: " + person1.person_1_matpref + "<br>" + "Alkohol: " + person1.person_1_alkohol + "<br>" + "Sovplats: " + person1.person_1_sovplats + "<br>" + "<br>" + "Person 2" + "<br>" + "Namn: " + person2.person_2_namn + "<br>" + "Specialkost/Allergi: " + person2.person_2_matpref + "<br>" + "Alkohol: " + person2.person_2_alkohol + "<br>" + "Sovplats: " + person2.person_2_sovplats + "<br>" + "<br>" + "Person 3" + "<br>" + "Namn: " + person3.person_3_namn + "<br>" + "Specialkost/Allergi: " + person3.person_3_matpref + "<br>" + "Alkohol: " + person3.person_3_alkohol + "<br>" + "Sovplats: " + person3.person_3_sovplats + "<br>" + "<br>" + "Låtönskan: " + låtönskan + "<br>" + "<br>" + "Telefonnummer: " + telefonnummer
        })
    }

    if (antal == 4) {
        Email.send({
            Host: "smtp.mailtrap.io",
            Username: "ff12ecb9d9dc09",
            Password: "e7b06dd8e28b1d",
            To: "viktor@gmail.com",
            From: "guest@gmail.com",
            Subject: "Bröllopsanmälan",
            Body: "Antal: " + antal + "<br>" + "<br>" + "Person 1" + "<br>" + "Namn: " + person1.person_1_namn + "<br>" + "Specialkost/Allergi: " + person1.person_1_matpref + "<br>" + "Alkohol: " + person1.person_1_alkohol + "<br>" + "Sovplats: " + person1.person_1_sovplats + "<br>" + "<br>" + "Person 2" + "<br>" + "Namn: " + person2.person_2_namn + "<br>" + "Specialkost/Allergi: " + person2.person_2_matpref + "<br>" + "Alkohol: " + person2.person_2_alkohol + "<br>" + "Sovplats: " + person2.person_2_sovplats + "<br>" + "<br>" + "Person 3" + "<br>" + "Namn: " + person3.person_3_namn + "<br>" + "Specialkost/Allergi: " + person3.person_3_matpref + "<br>" + "Alkohol: " + person3.person_3_alkohol + "<br>" + "Sovplats: " + person3.person_3_sovplats + "<br>" + "<br>" + "Person 4" + "<br>" + "Namn: " + person4.person_4_namn + "<br>" + "Specialkost/Allergi: " + person4.person_4_matpref + "<br>" + "Alkohol: " + person4.person_4_alkohol + "<br>" + "Sovplats: " + person4.person_4_sovplats + "<br>" + "<br>" + "Låtönskan: " + låtönskan + "<br>" + "<br>" + "Telefonnummer: " + telefonnummer 
        })
    }

    if (antal == 5) {
        Email.send({
            Host: "smtp.mailtrap.io",
            Username: "ff12ecb9d9dc09",
            Password: "e7b06dd8e28b1d",
            To: "viktor@gmail.com",
            From: "guest@gmail.com",
            Subject: "Bröllopsanmälan",
            Body: "Antal: " + antal + "<br>" + "<br>" + "Person 1" + "<br>" + "Namn: " + person1.person_1_namn + "<br>" + "Specialkost/Allergi: " + person1.person_1_matpref + "<br>" + "Alkohol: " + person1.person_1_alkohol + "<br>" + "Sovplats: " + person1.person_1_sovplats + "<br>" + "<br>" + "Person 2" + "<br>" + "Namn: " + person2.person_2_namn + "<br>" + "Specialkost/Allergi: " + person2.person_2_matpref + "<br>" + "Alkohol: " + person2.person_2_alkohol + "<br>" + "Sovplats: " + person2.person_2_sovplats + "<br>" + "<br>" + "Person 3" + "<br>" + "Namn: " + person3.person_3_namn + "<br>" + "Specialkost/Allergi: " + person3.person_3_matpref + "<br>" + "Alkohol: " + person3.person_3_alkohol + "<br>" + "Sovplats: " + person3.person_3_sovplats + "<br>" + "<br>" + "Person 4" + "<br>" + "Namn: " + person4.person_4_namn + "<br>" + "Specialkost/Allergi: " + person4.person_4_matpref + "<br>" + "Alkohol: " + person4.person_4_alkohol + "<br>" + "Sovplats: " + person4.person_4_sovplats + "<br>" + "<br>" + "Person 5" + "<br>" + "Namn: " + person5.person_5_namn + "<br>" + "Specialkost/Allergi: " + person5.person_5_matpref + "<br>" + "Alkohol: " + person5.person_5_alkohol + "<br>" + "Sovplats: " + person5.person_5_sovplats + "<br>" + "<br>" + "Låtönskan: " + låtönskan + "<br>" + "<br>" + "Telefonnummer: " + telefonnummer
        })
    }
}

let anmälanContainer = document.querySelector(".anmälan-container")

let infoDiv = document.createElement("div");
infoDiv.classList.add("anmälan-info")

let infoPara = document.createElement("P");
infoPara.classList.add("anmälan-para")
infoPara.innerHTML = "Tack för er anmälan, vi ser fram emot att ha er med på vår stora dag!" + "<br>" + "Om du vill hålla tal eller hitta på något annat roligt, vänligen kontakta toastmaster David på telefonnummer 0737519312"

infoDiv.appendChild(infoPara)

anmälanBtn.addEventListener("click", function () {
    if (antal == 1) {
        if(allFieldsFilled(person1) && godkänt){
            validationMsg.classList.add("hide");
            sendEmail();
            anmälanContainer.innerHTML = "";
            anmälanContainer.appendChild(infoDiv);
        } else {
            validationMsg.classList.remove("hide")
        }
    } 
    
    if (antal == 2) {
        if(allFieldsFilled(person1) && allFieldsFilled(person2) && godkänt){
            validationMsg.classList.add("hide")
            sendEmail()
            anmälanContainer.innerHTML = "";
            anmälanContainer.appendChild(infoDiv);
        } else {
            validationMsg.classList.remove("hide")
        }
    }

    if (antal == 3) {
        if(allFieldsFilled(person1) && allFieldsFilled(person2) && allFieldsFilled(person3) && godkänt){
            validationMsg.classList.add("hide")
            sendEmail()
            anmälanContainer.innerHTML = "";
            anmälanContainer.appendChild(infoDiv);
        } else {
            validationMsg.classList.remove("hide")
        }
    }

    if (antal == 4) {
        if(allFieldsFilled(person1) && allFieldsFilled(person2) && allFieldsFilled(person3) && allFieldsFilled(person4) && godkänt){
            validationMsg.classList.add("hide")
            sendEmail()
            anmälanContainer.innerHTML = "";
            anmälanContainer.appendChild(infoDiv);
        } else {
            validationMsg.classList.remove("hide")
        }
    }

    if (antal == 5) {
        if(allFieldsFilled(person1) && allFieldsFilled(person2) && allFieldsFilled(person3) && allFieldsFilled(person4) && allFieldsFilled(person5) && godkänt){
            validationMsg.classList.add("hide")
            sendEmail()
            anmälanContainer.innerHTML = "";
            anmälanContainer.appendChild(infoDiv);
        } else {
            validationMsg.classList.remove("hide")
        }
    }
})