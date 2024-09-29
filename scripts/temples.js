const navMenu = document.querySelector(".menu-links");
const navButton = document.querySelector("#menu");
const title = document.querySelector("#title");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
})

window.addEventListener("resize", function() {
    if (this.window.innerWidth >= 740) {
        navMenu.classList.remove("show");
        navButton.classList.remove("show");
        navButton.style.display = "none";
        navMenu.style.display = "flex";
    } else {
        navButton.style.display = "block";
        navMenu.style.display = "none";
    }
})

navMenu.addEventListener("click", function(event) {
    if (event.target.tagName === 'A') {
        title.textContent = event.target.textContent;
    }
})