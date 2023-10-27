$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission 
        
        // Get form input values
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        // You can add more validation here, e.g., checking if passwords match
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        // You can add more validation as needed

        // If all validation passes, you can submit the form to a server or perform other actions
        // For now, let's just display a success message
        alert("Form submitted successfully!");

        // You can also reset the form if needed
        $(this).trigger("reset");
    });
});
