const slides = document.getElementsByClassName("slide");
const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];
const dots = Array.from(document.getElementsByClassName("dot"));
slideIndex = 0;
showSlide(slideIndex);

prev.addEventListener("click", () => {
  showSlide((slideIndex -= 1));
});

next.addEventListener("click", () => {
  showSlide((slideIndex += 1));
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide((slideIndex = index));
  });
});

function showSlide(n) {
  // console.log(slideIndex);
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "block";
  dots[slideIndex].className += " active";
}
