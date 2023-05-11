//slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("taustakuva");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000);
}

//karuselli
let carouselIndex = 1;
nextSet(carouselIndex);

function currentSet(n) {
  nextSet(carouselIndex = n);
}

function nextSet(n) {
  let j;
  let set = document.getElementsByClassName("karuselli");
  let dot = document.getElementsByClassName("dot");
  if (n > set.length) {
    carouselIndex = 1
  }
  if (n < 1) {
    carouselIndex = set.length
  }
  for (j = 0; j < set.length; ++j) {
    set[j].style.display = "none";
  }
  for (j = 0; j < dot.length; j++) {
    dot[j].className = dot[j].className.replace("active", "");
  }
  set[carouselIndex-1].style.display = "block";  
  dot[carouselIndex-1].className += " active";
}

//popup
let popup1 = document.getElementById("popup1");

function openPopup1(){
  popup1.classList.add("open-popup")
}

function closePopup1(){
  popup1.classList.remove("open-popup")
}

let popup2 = document.getElementById("popup2");

function openPopup2(){
  popup2.classList.add("open-popup")
}

function closePopup2(){
  popup2.classList.remove("open-popup")
}

let popup3 = document.getElementById("popup3");

function openPopup3(){
  popup3.classList.add("open-popup")
}

function closePopup3(){
  popup3.classList.remove("open-popup")
}