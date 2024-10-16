document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM content loaded");
    
    const selectOptions = document.querySelector("#product-name");
    console.log("Select element:", selectOptions);
    
    const products = [
        {
          id: 'fc-1888',
          name: "Flux Capacitor",
          avgRating: 4.5
        },
        {
          id: 'fc-2050',
          name: "Power Laces",
          avgRating: 4.7
        },
        {
          id: 'fs-1987',
          name: "Time Circuits",
          avgRating: 3.5
        },
        {
          id: 'ac-2000',
          name: "Low Voltage Reactor",
          avgRating: 3.9
        },
        {
          id: 'jj-1969',
          name: "Warp Equalizer",
          avgRating: 5.0
        }
    ];
  
    products.forEach(product => {
        const newOption = document.createElement("option");
        newOption.value = product.id;
        newOption.textContent = product.name;
      
        selectOptions.appendChild(newOption);
    });
  
    const form = document.getElementById("reviewForm");
    form.addEventListener('submit', function (event) {
        let reviewCount = parseInt(localStorage.getItem("reviewCounter")) || 0;
        console.log("Current review count:", reviewCount);
        localStorage.setItem("reviewCounter", ++reviewCount);
        console.log("Updated review count:", reviewCount);
    });
  });