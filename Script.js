document.getElementById("regForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
    let confirmError = document.getElementById("confirmError");
    let phoneError = document.getElementById("phoneError");
    let successMsg = document.getElementById("successMsg");

    // Clear errors
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmError.textContent = "";
    phoneError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;

    // Name
    if (name === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }

    // Email
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!email.match(emailPattern)) {
        emailError.textContent = "Invalid email";
        isValid = false;
    }

    // Password
    if (password.length < 6) {
        passwordError.textContent = "Minimum 6 characters";
        isValid = false;
    }

    // Confirm Password
    if (confirmPassword !== password) {
        confirmError.textContent = "Passwords do not match";
        isValid = false;
    }

    // Phone
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        phoneError.textContent = "Enter 10-digit number";
        isValid = false;
    }

    // Success
    if (isValid) {
        successMsg.textContent = "Registration Successful!";
    }
});