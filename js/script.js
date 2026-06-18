// Productos:
const swiperProducts = new Swiper(".mySwiperNewProduct", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    740: { slidesPerView: 3, spaceBetween: 20 },
    1000: { slidesPerView: 4, spaceBetween: 20 },
    1224: { slidesPerView: 5, spaceBetween: 20 },
  },
});

// Comentarios:
const swiperTestimonials = new Swiper(".mySwiperTestimonials", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: { slidesPerView: 2, spaceBetween: 20 },
    1024: { slidesPerView: 3, spaceBetween: 20 },
  },
});

/* Fix Header & Scrollspy */
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 0) {
    header.classList.add("header-fix");
  } else {
    header.classList.remove("header-fix");
  }

  /* Scrollspy: actualizar enlace activo al hacer scroll */
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".menu li a");
  
  let current = "top";
  
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    // se le resta un margen para que se active antes de llegar exactamente al tope
    if (window.scrollY >= (sectionTop - 150)) {
      const id = section.getAttribute("id");
      if(id) current = id;
    }
  });

  if (window.scrollY < 100) {
    current = "top";
  }

  navLinks.forEach(a => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});
