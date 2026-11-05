document.addEventListener("DOMContentLoaded", function() {
    const destinations = [
        {
            name: "Sun City Resort",
            image: "../images/Sun city resort.webp",
            description: "Discover an exciting holiday getawy fillled with entertainment and leisure."
        },
        {
            name: "uShaka Marine World",
            image: "../images/Ushaka marine.jpg",
            description: "Explore a marine-themed attraction with exciting aquatic experiences."
        },
        {
            name: "Gold Reef City",
            image: "../images/Gold reef enterance.webp",
            description: "Discover an entertainment destination with exciting attractions."
        },
        {
            name: "iSimangaliso Wetland Park",
            image: "../images/iSimangaliso game drive.webp",
            description: "Explore South Africa's natural beauty and wildlife experiences."
        },
        {
            name: "Kiara Lodge",
            image: "../images/Kiara lodge.webp",
            description: "Discover a relaxing accommodation destination."
        },
    ];

    let currentDestination = 0;

    const image = document.getElementById("featuredImage");
    const title = document.getElementById("featuredTitle");
    const description = document.getElementById("featuredDescription");
    const nextButton = document.getElementById("nextDestination");

    nextButton.addEventListener("click", function () {
        currentDestination++;
        if (currentDestination >= destinations.length) {
            currentDestination = 0;
        }

        image.src = destinations[currentDestination].image;
        title.textContent = destinations[currentDestination].name;
        description.textContent = destinations[currentDestination].description;
        image.alt = description[currentDestination].name;
    });
});