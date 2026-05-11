// bouton pour les petits écrans
const btn = document.getElementById("menuBtn");
const menu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeMenu");
btn.addEventListener("click", () => {
  menu.classList.toggle("translate-x-full");
});

// Animation
new Typed("#type", {
  strings: ["Déveloper", "Designer", "Abdou Karim"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
// fin de l'animation

// pour que le navbar soit fixe est change de couleur dans les autres sections
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    navbar.classList.add("bg-white", "shadow-lg");
    navbar.classList.remove("text-white");
  } else {
    navbar.classList.remove("bg-white", "shadow-lg");
    navbar.classList.add("text-white");
  }
});
//fin de l'animation du navbar

//pour l'animation des barres
const bars = document.querySelectorAll(".skill-bar");
function animateBars() {
  bars.forEach(bar => {
    const rect = bar.getBoundingClientRect();

    if (rect.top < window.innerHeight - 100) {
      bar.style.width = bar.getAttribute("data-width");
    }
  });
}
window.addEventListener("scroll", animateBars);
window.addEventListener("load", animateBars);
//fin de l'animation du des barres

//animation du fittre des 
const buttons = document.querySelectorAll("#work button");
const items = document.querySelectorAll("#work .grid > div");
const filters = ["all", "brand", "design", "graphic"];
items.forEach((item, index) => {
  const categories = ["brand", "design", "graphic"];
  item.classList.add(categories[index % 3]);
});
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    const filter = filters[index];
    items.forEach(item => {
      if (filter === "all") {
        item.style.display = "block";
      } else {
        item.style.display = item.classList.contains(filter)
          ? "block"
          : "none";
      }
    });
  });
});
//fin du filtre

// l'animation des chiffres statistiques
const counters = document.querySelectorAll(".counter");
let started = false;

function startCounter() {
  counters.forEach(counter => {
    const target = +counter.getAttribute("data-target");
    let count = 0;

    const update = () => {
      const increment = target / 100;

      count += increment;

      if (count < target) {
        counter.innerText = Math.floor(count);
        requestAnimationFrame(update);
      } else {

        counter.innerText = target;
      }
    };

    update();
  });
}

window.addEventListener("scroll", () => {
  const section = document.getElementById("stats");
  const sectionTop = section.offsetTop;

  if (window.scrollY > sectionTop - 300 && !started) {
    startCounter();
    started = true;
  }
});
//fin de l'animation



// Slides container
const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let index = 0;
const total = dots.length;
function updateCarousel() {
  slides.style.transform =
    `translateX(-${index * 100}%)`;


        // Reset all dots
  dots.forEach(dot => {

    dot.classList.remove('bg-black');

    dot.classList.add('bg-gray-400');

  });


        
  dots[index].classList.remove('bg-gray-400');

  dots[index].classList.add('bg-black');
}
setInterval(() => {
  index++;
  if (index >= total) {
    index = 0;
  }
  updateCarousel();
}, 3000);


