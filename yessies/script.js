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

/*let carouselIndex = 0;
showCarousel();

function moveSlide() {
  let j;
}*/

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