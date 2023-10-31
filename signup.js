$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent default submission 
        
        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();
        const email = $("#email").val();
        const password = $("#password").val();
        const confirmPassword = $("#confirmPassword").val();

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        // If all validation passes, you can submit the form to a server or perform other actions
        alert("Form submitted successfully!");
        
        $(this).trigger("reset");
    });
});
