document.addEventListener("DOMContentLoaded", function () {

    const feedbackForm = document.getElementById("feedbackForm");
    const formMessage = document.getElementById("formMessage");

    if (!feedbackForm || !formMessage) {
        console.error("Feedback form or message element not found.");
        return;
    }

    feedbackForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const name = document.getElementById("visitorName").value.trim();
        const email = document.getElementById("visitorEmail").value.trim();
        const message = document.getElementById("visitorMessage").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !email || !message) {
            showMessage("Please complete all fields.", "error");
            return;
        }

        if (!emailPattern.test(email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
        }

        if (message.length < 10) {
            showMessage("Feedback must contain at least 10 characters.", "error");
            return;
        }

        const endpoint = feedbackForm.getAttribute("action");

        if (!endpoint || endpoint.includes("YOUR_FORM_ID")) {
            showMessage("The Formspree connection has not been configured.", "error");
            return;
        }

        const submitButton = feedbackForm.querySelector('button[type="submit"]');

        if (submitButton) submitButton.disabled = true;

        showMessage("Sending your feedback...", "");

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                }, 
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                })
             });
             
            
            const result = await response.json().catch(() => ({}));

            console.log("Formspree response:", response.status, result);

            if (response.ok) {
                showMessage(
                    "Thank you, " + name + "! Your feedback was submitted successfully.",
                    "success"
                );

                feedbackForm.reset();

            } else {
                const details = result.errors
                    ? result.errors.map(error => error.message).join(" ")
                    : "Formspree returned error " + response.status + ".";

                showMessage(details, "error");
            }

        } catch (error) {
            console.error("Feedback submission error:", error);

            showMessage(
                "Connection failed. Check your internet connection and try again.",
                "error"
            );

        } finally {
            if (submitButton) submitButton.disabled = false;
        }
    });

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = "form-status " + type;
    }

});