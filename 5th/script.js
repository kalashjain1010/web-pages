// Loan Request Submission
document.getElementById('loanInitiationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Loan Request Submitted Successfully!');
    document.getElementById('loanInitiationForm').reset();
});

// View Loan Details
function viewLoanDetails() {
    let ssn = document.getElementById("viewSSN").value;
    if (!ssn) {
        alert("Please enter SSN ID to view details.");
        return;
    }

    // Simulating fetched loan details from a database
    let loanDetails = {
        customerName: "John Doe",
        loanAmount: 50000,
        loanDuration: 36
    };

    document.getElementById("customerNameUpdate").value = loanDetails.customerName;
    document.getElementById("loanAmountUpdate").value = loanDetails.loanAmount;
    document.getElementById("loanDurationUpdate").value = loanDetails.loanDuration;
    document.getElementById("loanDetails").classList.remove("hidden");
}

// Update Loan Request
function updateLoan() {
    let customerName = document.getElementById("customerNameUpdate").value;
    let loanAmount = document.getElementById("loanAmountUpdate").value;
    let loanDuration = document.getElementById("loanDurationUpdate").value;

    if (customerName && loanAmount && loanDuration) {
        alert("Loan Request Updated Successfully!");
        document.getElementById("updateMessageBox").classList.remove("hidden");
    } else {
        alert("Error: Please enter valid details.");
    }
}

// Cancel Loan Request
function cancelLoan() {
    let confirmCancel = confirm("Are you sure you want to cancel the loan request?");
    if (confirmCancel) {
        alert("Loan Request Cancelled Successfully!");
        document.getElementById("cancelMessageBox").classList.remove("hidden");
        document.getElementById("loanDetails").classList.add("hidden");
    }
}
