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

    // Display all details in an alert
    alert(`Transaction Details:\n\n
    Transaction ID: ${transactionData.transactionId}\n
    Customer SSN ID: ${transactionData.ssnId}\n
    Customer Name: ${transactionData.customerName}\n
    Account ID: ${transactionData.accountId}\n
    Adhaar Card No.: ${transactionData.adhaarCard}\n
    Pan Card No.: ${transactionData.panCard}\n
    Address: ${transactionData.address}\n
    Date: ${transactionData.date}\n
    Contact Number: ${transactionData.contactNumber}\n
    Mode of Transaction: ${transactionData.transactionMode}\n
    Amount: ${transactionData.amount}`);

    // Clear the form after submission
    document.getElementById("transactionForm").reset();
});
