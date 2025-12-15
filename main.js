// -----------------------------
// 1) Active Link تلقائي
// -----------------------------
console.log("JavaScript is working!");

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

// -----------------------------
// 2) Smooth Scroll للروابط الداخلية
// -----------------------------
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

// -----------------------------
// 3) رسالة بسيطة لأي Form
// -----------------------------
const forms = document.querySelectorAll("form");

forms.forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
    form.reset();
  });
});

// -----------------------------
// 4) Animation بسيطة لصفحة المنتجات
// -----------------------------
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

// -----------------------------
// 6) Scroll لتحريك العناصر (اختياري وجميل)
// -----------------------------
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
