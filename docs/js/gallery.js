document.addEventListener("DOMContentLoaded", function () {

    //Provinces and attractions

    const provinces = {
        "Eastern Cape": [
            {
                name: "Addo Elephant National Park",
                description: "Discover elephants and other wildlife in a famous conservation area.",
                image: "Addo Elephant National Park",
                file: "addo-elephant-national-park.jpg"
            },
            {
                name: "Hole in the Wall",
                description: "Explore a spectaculare natural rock formation along the Wild Coast.",
                file: "Hole in the Wall.webp"
            }
        ],

        "FreeState": [
            {
                name: "Golden Gate Highlands National Park",
                description: "Experience beautiful sandstone cliffs and mountain scenery.",
                file: "Golden Gate Highlands National Park.jpg"
            },
            {
                name: "Clarens",
                description: "Visit a charming village known for its art, scenery and outdoor activities.",
                file: "Clarens.jpeg"
            }
        ],

        "Gauteng": [
            {
                name: "Gold Reef City",
                description: "Enjoy thrilling rides and discover Johannesburg's gold-mining history.",
                file: "Gold reef enterance.webp"
            },
            {
                name: "Apartheid Museum",
                description: "Learn about South Africa's history through important exhibitions.",
                file: "Apartheid Museum.jpg"
            }
        ],

        "KwaZulu-Natal": [
            {
                name: "uShaka Marine World",
                description: "Enjoy marine attractions, water slides and ocean experiences.",
                file: "Ushaka marine.jpg"
            },
            {
                name: "iSimangaliso Wetland Park",
                description: "Explore wetlands, wildlife and beautiful coastal environments.",
                file: "iSimangliso Waterland Park.webp"
            }
        ],

        "Limpopo": [
            {
                name: "Mapungubwe National Park",
                description: "Discover an important archaeological and natural heritage destination.",
                file: "Mapungubwe National Park.jpg"
            },
            {
                name: "Magoebaskloof",
                description: "Experience forests, mountain scenery and outdoor activities.",
                file: "Magoebaskloof.jpg"
            }
        ],

        "Mpumalanga": [
            {
                name: "Blyde River Canyon",
                description: "Explore one of South Africa's most spectacular natural landscapes.",
                file: "Blyde River Canyon.jpg"
            },
            {
                name: "God's Window",
                description: "Enjoy breathtaking views across the Mpumalanga escarpment.",
                file: "God's Window.jpg"
            }
        ],

        "Northern Cape": [
            {
                name: "Augrabies Falls National Park",
                description: "Witness impressive waterfalls and dramatic river scenery.",
                file: "Augrabies Falls National Park.jpg"
            },
            {
                name: "Kgalagadi Transfrontier Park",
                description: "Discover desert landscapes and remarkable wildlife.",
                file: "Kgalagadi Transfrontier Park.jpg"
            }
        ],

        "North West": [
            {
                name: "Sun City Resort",
                description: "Enjoy entertainment, accommodation and recreational activities.",
                file: "Sun city resort.webp"
            },
            {
                name: "Pilanesberg National Park",
                description: "Explore wildlife and enjoy a memorable safari experience.",
                file: "Pilanesberg National Park.jpg"
            }
        ],

        "Western Cape": [
            {
                name: "Table Mountain",
                description: "Experience iconic mountain scenery overlooking Cape Town.",
                file: "Table Mountain.jpg"
            },
            {
                name: "Robben Island",
                description: "Visit a historic island associated with South Africa's struggle for freedom.",
                file: "Robben Island.jpg"
            }
        ]

    };


    // =====================================
    // 2. GET HTML ELEMENTS
    // =====================================

    const provinceButtons =
        document.getElementById("provinceButtons");

    const attractionContainer =
        document.getElementById("attractionContainer");

    const provinceHeading =
        document.getElementById("provinceHeading");

    const searchInput =
        document.getElementById("attractionSearch");

    const searchMessage =
        document.getElementById("searchMessage");


    // =====================================
    // 3. CREATE PROVINCE BUTTONS
    // =====================================

    Object.keys(provinces).forEach(function (province) {

        const button = document.createElement("button");

        button.textContent = province;
        button.classList.add("province-button");

        button.addEventListener("click", function () {

            searchInput.value = "";

            displayAttractions(province);

        });

        provinceButtons.appendChild(button);

    });


    // =====================================
    // 4. DISPLAY ATTRACTIONS
    // =====================================

    function displayAttractions(province) {

        attractionContainer.innerHTML = "";

        provinceHeading.textContent =
            "Attractions in " + province;

        const attractions = provinces[province];

        attractions.forEach(function (attraction) {

            const card = document.createElement("article");

            card.classList.add("card");

            const image = document.createElement("img");

            image.src =
                "../../images/" + encodeURIComponent(attraction.file);

            image.alt = attraction.name;

            image.classList.add("gallery-image");

            image.loading = "lazy";

            const title = document.createElement("h3");

            title.textContent = attraction.name;

            const description = document.createElement("p");

            description.textContent = attraction.description;

            card.appendChild(image);
            card.appendChild(title);
            card.appendChild(description);

            attractionContainer.appendChild(card);

        });

        searchMessage.textContent =
            attractions.length + " attractions available.";

    }


    // =====================================
    // 5. SEARCH ALL ATTRACTIONS
    // =====================================

    searchInput.addEventListener("input", function () {

        const searchText =
            searchInput.value.toLowerCase().trim();

        attractionContainer.innerHTML = "";

        let matches = 0;

        Object.keys(provinces).forEach(function (province) {

            provinces[province].forEach(function (attraction) {

                const searchableText =
                    (attraction.name + " " +
                     attraction.description + " " +
                     province).toLowerCase();

                if (searchableText.includes(searchText)) {

                    const card = document.createElement("article");

                    card.classList.add("card");

                    const image = document.createElement("img");

                    image.src =
                        "../../images/" +
                        encodeURIComponent(attraction.file);

                    image.alt = attraction.name;

                    image.classList.add("gallery-image");

                    image.loading = "lazy";

                    const title = document.createElement("h3");

                    title.textContent = attraction.name;

                    const description = document.createElement("p");

                    description.textContent =
                        province + " - " + attraction.description;

                    card.appendChild(image);
                    card.appendChild(title);
                    card.appendChild(description);

                    attractionContainer.appendChild(card);

                    matches++;

                }

            });

        });

        searchMessage.textContent = matches === 0
            ? "No attractions found. Try another search."
            : matches + " attraction(s) found.";

    });


    // =====================================
    // 6. INITIAL DISPLAY
    // =====================================

    displayAttractions("Gauteng");

});

    