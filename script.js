function validateForm() {
    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;
    let errorMessage = document.getElementById("error-message");

    // Check for empty fields
    if (!fname || !lname || !email || !phone || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return false;
    }

    // Validate email format
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = "Enter a valid email!";
        return false;
    }

    // Validate phone number
    if (phone.length !== 10 || isNaN(phone)) {
        errorMessage.textContent = "Enter a valid 10-digit phone number!";
        return false;
    }

    // Check password match
    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return false;
    }

    return true; // Allow form submission
}
