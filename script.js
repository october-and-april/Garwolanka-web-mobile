const mobileMenu = document.querySelector(".button");
const menuList = document.querySelector(".menu-list");
const darkMode = document.querySelector(".dark-layer");
const menuElements = document.querySelector(".menu-list");
const closeIcon = document.querySelector(".menu-list img");
const popup = document.querySelector(".popup");
const popupPrices = document.querySelector(".popupPrices");
const contact = document.getElementById("contact");
const prices = document.querySelectorAll(".prices");

contact.addEventListener("click", () => {
  popup.style.display = "block";
  darkMode.classList.toggle("active");
  window.addEventListener("click", closeContact);
});

function closeContact(event) {
  if (!popup.contains(event.target) && event.target !== contact) {
    popup.style.display = "none";
    darkMode.classList.toggle("active");
    window.removeEventListener("click", closeContact);
  }
}
prices.forEach((price) => {
  price.addEventListener("click", () => {
    popupPrices.style.display = "block";
    darkMode.classList.toggle("active");
    window.addEventListener("click", closePrices);
  });
});

function closePrices(event) {
  const pricesArray = Array.from(prices)
  if (!popupPrices.contains(event.target) && !pricesArray.includes(event.target)) {
    popupPrices.style.display = "none";
    darkMode.classList.toggle("active");
    window.removeEventListener("click", closePrices);
  }
}
mobileMenu.addEventListener("click", () => {
  darkMode.classList.toggle("active");
  menuElements.style.display = "block";
  closeIcon.addEventListener("click", closeMenu);
});

const closeMenu = () => {
  darkMode.classList.toggle("active");
  menuElements.style.display = "none";
};
