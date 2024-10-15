document.getElementById("transactionForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Collecting the form data
    let transactionData = {
        transactionId: document.getElementById("transactionId").value,
        ssnId: document.getElementById("ssnId").value,
        customerName: document.getElementById("customerName").value,
        accountId: document.getElementById("accountId").value,
        adhaarCard: document.getElementById("adhaarCard").value,
        panCard: document.getElementById("panCard").value,
        address: document.getElementById("address").value,
        date: document.getElementById("date").value,
        contactNumber: document.getElementById("contactNumber").value,
        transactionMode: document.getElementById("transactionMode").value,
        amount: document.getElementById("amount").value,
    };

    // Show success message
    let messageBox = document.getElementById("messageBox");
    messageBox.classList.remove("hidden");
    messageBox.textContent = "Transaction submitted successfully!";

    // Simulate storing data (could be sent to a server here)
    console.log("Transaction Data: ", transactionData);

    // Clear the form after submission
    document.getElementById("transactionForm").reset();
});
