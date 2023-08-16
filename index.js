const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const times = document.querySelector(".times");
const creationCard = document.querySelector(".body div");

const toggler = () => {
	mobileMenu.classList.toggle("right");
	mobileMenu.classList.toggle("left");
};

hamburger.addEventListener("click", toggler);
times.addEventListener("click", toggler);
