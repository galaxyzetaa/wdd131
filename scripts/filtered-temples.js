const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
   
    {
        templeName: "Gilbert Arizona",
        location: "Gilbert, Arizona",
        dedicated: "2014, March, 2",
        area: 85000,
        imageUrl: 
        "https://churchofjesuschristtemples.org/assets/img/temples/gilbert-arizona-temple/gilbert-arizona-temple-31478-thumb.jpg"
      },
  
      {
        templeName: "Mesa Arizona",
        location: "Mesa, Arizona",
        dedicated: "1927, October, 23",
        area: 113916 ,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/mesa-arizona-temple/mesa-arizona-temple-22546-thumb.jpg"
      },
  
      {
        templeName: "Rexburg Idaho",
        location: "Rexburg, Idaho",
        dedicated: "2008, February, 10",
        area: 57504,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/rexburg-idaho-temple/rexburg-idaho-temple-33444-thumb.jpg"
      }
  ];
  
  createTempleCard();
  
  function createTempleCard(temple) {
  temples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let img = document.createElement("img");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    
  
    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", '${temple.templeName} Temple');
    img.setAttribute("loading", "lazy");
  
    
    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
  
  
    document.querySelector(".temple-grid").appendChild(card); 
  
  });
  }
  
  
  
  const navMenu = document.querySelector(".menu-links");
  const navButton = document.querySelector("#menu");
  const title = document.querySelector("#title");
  const homeLink = document.querySelector("#home");
  const oldLink = document.querySelector("#old");
  const newLink = document.querySelector("#new");
  const largeLink = document.querySelector("#large");
  const smallLink = document.querySelector("#small");
  
  navButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    navButton.classList.toggle("show");
  })
  
  
  window.addEventListener("resize", function() {
    if (this.window.innerWidth >= 740) {
        navMenu.classList.remove("show");
       /*navButton.classList.remove("show"); */
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
  
  //Menu selection code
  function removeShowClass() {
    navMenu.classList.remove("show");
    navButton.classList.remove("show");
  }
  
  homeLink.addEventListener("click", () => {
    displayTemples(temples);
    title.textContent = "Home";
    removeShowClass();
  });
  
  oldLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (parseInt(temple.dedicated) < 1900)));
    title.textContent = "Old";  
    removeShowClass();  
  });
  
  newLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (parseInt(temple.dedicated) > 2000)));
    title.textContent = "New";
    removeShowClass();    
  });
  
  largeLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (temple.area > 90000)));
    title.textContent = "Large";   
    removeShowClass();  
  });
  
  smallLink.addEventListener("click", () => {
    displayTemples(temples.filter(temple => (temple.area < 10000)));
    title.textContent = "Small";  
    removeShowClass(); 
  });
  
  
  
  
  //temple card details
  displayTemples(temples);
  
  function displayTemples(templeList) {
    const templeCardContainer = document.querySelector(".temple-grid");
    templeCardContainer.innerHTML = "";
    templeList.forEach(temple => {
        //card elements
        const templeCard = document.createElement("figure");
        const templeHeading = document.createElement("h3");
        const templeImg = document.createElement("img");
        const templeLocation = document.createElement("p");
        const templeDedicated = document.createElement("p");
        const templeSize = document.createElement("p");
  
  
        templeCard.className = "temple-card";
  
        //card title
        templeHeading.textContent = temple.templeName;
        templeHeading.className = "card-title";
        templeCard.appendChild(templeHeading);
  
        //card details
        templeLocation.innerHTML = `<span class="label">Location: </span>${temple.location}`;
        templeCard.appendChild(templeLocation);
  
        templeDedicated.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
        templeCard.appendChild(templeDedicated);
  
        templeSize.innerHTML = `<span class="label">Size: </span>${temple.area} sq ft`;
        templeCard.appendChild(templeSize);
  
        templeImg.setAttribute("src", temple.imageUrl);
        templeImg.setAttribute("alt", `Picture of ${temple.templeName} Temple`);
        templeImg.setAttribute("loading", "lazy");
        templeImg.width = 100; //CHECK//
        templeImg.height = 250; //CHECK//
        templeCard.appendChild(templeImg);
  
        templeCardContainer.appendChild(templeCard);
    });
  }