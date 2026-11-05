document.addEventListener("DOMContentLoaded", function () {

    // Get the pop-up elements from gallery.html
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");
    const popupCaption = document.getElementById("popupCaption");
    const closeButton = document.getElementById("closePopup");

    // Stop if any required HTML element is missing
    if (!popup || !popupImage || !popupCaption || !closeButton) {
        console.error("Image pop-up error: Check the pop-up HTML IDs.");
        return;
    }

    let previousElement = null;

    // OPEN THE POP-UP
    function openPopup(image) {
        previousElement = image;

        popupImage.src = image.src;
        popupImage.alt = image.alt;
        popupCaption.textContent = image.alt;

        popup.classList.add("is-open");
        popup.setAttribute("aria-hidden", "false");

        closeButton.focus();
    }

    // CLOSE THE POP-UP
    function closePopup() {
        if (!popup.classList.contains("is-open")) {
            return;
        }

        popup.classList.remove("is-open");
        popup.setAttribute("aria-hidden", "true");

        popupImage.removeAttribute("src");

        if (previousElement) {
            previousElement.focus();
        }
    }

    // OPEN WHEN A GALLERY IMAGE IS CLICKED
    document.addEventListener("click", function (event) {
        const image = event.target.closest(".gallery-image");

        if (image) {
            openPopup(image);
        }
    });

    // CLOSE WHEN THE X BUTTON IS CLICKED
    closeButton.addEventListener("click", function () {
        closePopup();
    });

    // CLOSE WHEN THE DARK BACKGROUND IS CLICKED
    popup.addEventListener("click", function (event) {
        if (event.target === popup) {
            closePopup();
        }
    });

    // CLOSE WHEN THE ESCAPE KEY IS PRESSED
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closePopup();
        }
    });

});