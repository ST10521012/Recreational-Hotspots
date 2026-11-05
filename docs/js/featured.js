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

    if (!image || !title || !description || !nextButton) {
        console.error("One or more destination elements are missing!");
        return;
    }

    function displayDestination() {
        const destination = destination[currentDestination];
        image.src = destinations.image;
        title.textContent = destinations.name;
        description.textContent = destinations.description;
        image.alt = descriptions.name;

        console.log("Current destination: ", destination.name);
    }
    nextButton.addEventListener("click", function (){
        currentDestination = (currentDestination + 1) % destinations.length;
        displayDestination();
    });
});
