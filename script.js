document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let employeeId = document.getElementById("employeeId").value;
    let password = document.getElementById("password").value;

    if (employeeId.length === 7 && password.length <= 30) {
        // Show success message and redirect to home page
        let messageBox = document.getElementById("messageBox");
        messageBox.classList.remove("hidden");
        messageBox.textContent = "Employee Registration successful.";

        // Simulate a delay before redirecting
        setTimeout(function() {
            window.location.href = "home.html"; // Redirect to Home Page
        }, 2000);
    } else {
        alert("Please provide valid credentials.");
    }
});
