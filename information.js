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

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";
}

//Automatic slides
autoSlides()

function autoSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(autoSlides, 5000);
}

