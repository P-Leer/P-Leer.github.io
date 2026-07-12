document.getElementById("year").textContent = new Date().getFullYear();

const headerLinks = document.querySelectorAll('.site-nav a[href^="#"]');

headerLinks.forEach((link) => {
  link.addEventListener("click", () => link.blur());
});
