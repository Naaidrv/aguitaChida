// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle")
    const mobileMenu = document.getElementById("mobile-menu")
    const menuIcon = document.querySelector(".menu-icon")
    const closeIcon = document.querySelector(".close-icon")
  
    if (menuToggle && mobileMenu) {
      menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden")
        menuIcon.classList.toggle("hidden")
        closeIcon.classList.toggle("hidden")
      })
    }
  
    // Set current year in footer
    const yearElement = document.getElementById("current-year")
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear()
    }
  
    // Agregar clase 'active' al enlace actual
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-link, .mobile-nav-link").forEach(link => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});

    // Add fade-in animation to sections
    const sections = document.querySelectorAll("section")
  
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)
  
    sections.forEach((section) => {
      observer.observe(section)
    })

    const logoLink = document.getElementById("logo-link");

    if (logoLink) {
      logoLink.addEventListener("click", function (e) {
        const isHome = window.location.pathname.endsWith("index.html") || window.location.pathname === "/";
        if (isHome) {
          e.preventDefault(); // Evita recargar
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      });
    }
  })

  