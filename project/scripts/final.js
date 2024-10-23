const navMenu = document.querySelector(".menu-links");
const navButton = document.querySelector("#menu");
const title = document.querySelector("#title");

navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("active");
});

navMenu.addEventListener("click", function(event) {
    if (event.target.tagName === 'A') {
        title.textContent = event.target.textContent;
        navMenu.classList.remove("show"); 
        navButton.classList.remove("active");
    }
});

const cards = [
    {
        title: "The Orphanage",
        text: "Hey guys! The name's Goob, but you probably already knew that. I live at the orphanage on Sixth Street, and that's alright.",
        img: "images/orphanage.png"
    },
    {
        title: "My Roommate",
        text: "My roomie is this guy named Lewis. Don't tell Lewis, but he can be a pain to share a room with. He's always up in the early hours of the morning tinkering away.",
        img: "images/lewis.jpg"
    },
    {
        title: "Baseball",
        text: "Lewis isn't all that bad though. Here's when he helped me get the winning catch!",
        img: "images/baseball.jpg"
    },
    {
        title: "My Favorites",
        text: "I play for the Dinos little league baseball team, man I love those guys. I'm number six! I also love puppies, apple juice, swings, and comic books.",
        img: "images/buds1.jpg"
    }
];

function createGoobCard(cardData) {
    let card = document.createElement("section");
    card.classList.add("goob-card");

    let img = document.createElement("img");
    img.src = cardData.img;
    img.alt = cardData.title;
    img.loading="lazy";

    let title = document.createElement("h3");
    title.textContent = cardData.title;

    let text = document.createElement("p");
    text.textContent = cardData.text;

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(text);
    
    document.querySelector(".about-me-grid").appendChild(card);
}

cards.forEach(createGoobCard);