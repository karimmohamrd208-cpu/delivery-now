console.log("JavaScript is working!");
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    const block = document.querySelector(this.getAttribute("href"));
    if (block) {
      block.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}); 
const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    form.reset();
  });
}); 
const cards = document.querySelectorAll(".product-card");

cards.forEach((card, i) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  
  setTimeout(() => {
    card.style.transition = "0.5s";
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  }, i * 120);
});
const reveal = document.querySelectorAll(".reveal");

window.addEventListener("scroll", function () {
  let windowHeight = window.innerHeight;

  reveal.forEach(el => {
    let top = el.getBoundingClientRect().top;
    if (top < windowHeight - 50) {
      el.classList.add("show");
    }
  });
});
