// Show current date and time in footer
function showDateTime() {
    let footerDate = document.getElementById("footerDate");

    if (footerDate) {
        let now = new Date();
        footerDate.innerText = "Current Date and Time: " + now.toLocaleString();
    }
}

showDateTime();
setInterval(showDateTime, 1000);


// Plant Matchmaker quiz
let quizBtn = document.getElementById("quizBtn");

if (quizBtn) {
    quizBtn.addEventListener("click", function () {
        let sunlight = document.getElementById("sunlight").value;
        let care = document.getElementById("care").value;
        let pet = document.getElementById("pet").value;
        let quizResult = document.getElementById("quizResult");

        if (sunlight === "" || care === "" || pet === "") {
            quizResult.innerText = "Please answer all questions.";
            return;
        }

        if (pet === "yes") {
            quizResult.innerText = "Recommended Plant: Spider Plant. It is pet-friendly and easy to care for.";
        } else if (sunlight === "low" && care === "easy") {
            quizResult.innerText = "Recommended Plant: Snake Plant. It grows well in low light and needs little care.";
        } else if (sunlight === "bright" && care === "medium") {
            quizResult.innerText = "Recommended Plant: Monstera. It loves bright indirect light.";
        } else {
            quizResult.innerText = "Recommended Plant: Peace Lily. It is a beautiful indoor plant.";
        }
    });
}


// Contact form validation
let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();
        let address = document.getElementById("address").value.trim();
        let message = document.getElementById("message").value.trim();

        // Get error fields
        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let phoneError = document.getElementById("phoneError");
        let addressError = document.getElementById("addressError");
        let messageError = document.getElementById("messageError");

        // Clear old error messages
        nameError.innerText = "";
        emailError.innerText = "";
        phoneError.innerText = "";
        addressError.innerText = "";
        messageError.innerText = "";

        let isValid = true;

        // Name validation
        if (name === "") {
            nameError.innerText = "Name cannot be empty.";
            isValid = false;
        }

        // Email validation
        if (email === "") {
            emailError.innerText = "Email cannot be empty.";
            isValid = false;
        } else if (!email.includes("@") || !email.includes(".")) {
            emailError.innerText = "Please enter a valid email.";
            isValid = false;
        }

        // Phone validation
        if (phone === "") {
            phoneError.innerText = "Phone cannot be empty.";
            isValid = false;
        }

        // Address validation
        if (address === "") {
            addressError.innerText = "Address cannot be empty.";
            isValid = false;
        }

        // Message validation
        if (message === "") {
            messageError.innerText = "Message cannot be empty.";
            isValid = false;
        }

        // If all fields are valid
        if (isValid) {
            alert("Thank you! Your message has been submitted successfully.");
            contactForm.reset();
        }
    });
}
