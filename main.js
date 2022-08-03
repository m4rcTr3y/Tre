const navbar = document.querySelector(".navbar");

const navbarTop = navbar.offsetTop;

window.addEventListener("scroll",function(){
    if(window.pageYOffset>navbarTop){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky")
    }
    
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


 window.addEventListener('load',()=>{
  setInterval(function(){
    showSlides(slideIndex+=1);
  },5000);

 });
 


// Thumbnail image controls
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