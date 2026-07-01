const words = [
  "AI & ML Student",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  const currentWord = words[wordIndex];

  if (isDeleting) {
    typing.textContent = currentWord.substring(0, charIndex--);
  } else {
    typing.textContent = currentWord.substring(0, charIndex++);
  }

  let speed = isDeleting ? 70 : 120;

  if (!isDeleting && charIndex === currentWord.length + 1) {
    speed = 1200;
    isDeleting = true;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex++;

    if (wordIndex === words.length) {
      wordIndex = 0;
    }
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

const button = document.getElementById("darkMode");

if(button){
button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});
}
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15,23,42,0.9)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
    } else {
        navbar.style.background = "rgba(15,23,42,0.45)";
        navbar.style.boxShadow = "none";
    }
});