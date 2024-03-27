const slides = document.getElementsByClassName("slide");
const prev = document.getElementsByClassName("prev")[0];
const next = document.getElementsByClassName("next")[0];

slideIndex = 0;
showSlide(slideIndex);

prev.addEventListener("click", () => {
  showSlide((slideIndex -= 1));
});

next.addEventListener("click", () => {
  showSlide((slideIndex += 1));
});

function showSlide(n) {
  console.log(slideIndex);
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length;

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}
