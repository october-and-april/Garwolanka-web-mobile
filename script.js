const mobileMenu = document.querySelector(".button");
const darkMode = document.querySelector(".dark-layer");
const menuElements = document.querySelector(".menu-list");
const popup = document.querySelector(".popup");
const popupPrices = document.querySelector(".popupPrices");
const contact = document.getElementById("contact");
const prices = document.querySelectorAll(".prices");
const schoolPopup = document.querySelector(".schoolPopup");
const school = document.querySelectorAll(".school");
const reserv = document.querySelectorAll(".reserv");
const reservPopup = document.querySelector(".popupReserv");
const redButton = document.querySelector(".about");

function redirectToAboutPage() {
  window.location.href = "about.html";
}
function redirectToMain() {
  window.location.href = "index.html";
}
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
  const pricesArray = Array.from(prices);
  if (
    !popupPrices.contains(event.target) &&
    !pricesArray.includes(event.target)
  ) {
    popupPrices.style.display = "none";
    darkMode.classList.toggle("active");
    window.removeEventListener("click", closePrices);
  }
}

school.forEach((schl) => {
  schl.addEventListener("click", () => {
    schoolPopup.style.display = "block";
    darkMode.classList.toggle("active");
    window.addEventListener("click", closeSchool);
  });
});

function closeSchool(event) {
  const schoolArray = Array.from(school);
  if (
    !schoolPopup.contains(event.target) &&
    !schoolArray.includes(event.target)
  ) {
    schoolPopup.style.display = "none";
    darkMode.classList.toggle("active");
    window.removeEventListener("click", closeSchool);
  }
}

reserv.forEach((rv) => {
  rv.addEventListener("click", () => {
    reservPopup.style.display = "block";
    darkMode.classList.toggle("active");
    window.addEventListener("click", closeReserv);
  });
});

function closeReserv(event) {
  const reservArray = Array.from(reserv);
  if (
    !reservPopup.contains(event.target) &&
    !reservArray.includes(event.target)
  ) {
    reservPopup.style.display = "none";
    darkMode.classList.toggle("active");
    window.removeEventListener("click", closeReserv);
  }
}

mobileMenu.addEventListener("click", () => {
  darkMode.classList.toggle("active");
  menuElements.style.display = "block";
  window.addEventListener("click", closeMenu);
});

function closeMenu(event) {
  if (
    !menuElements.contains(event.target) &&
    !mobileMenu.includes(event.target)
  ) {
    darkMode.classList.toggle("active");
    menuElements.style.display = "none";
    window.removeEventListener("click", closeMenu);
  }
}
