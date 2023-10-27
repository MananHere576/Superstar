$(document).ready(function() {
    // Function to handle form submission
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values of the input fields
        const userName = $(".form-input[placeholder='User Name']").val();
        const password = $(".form-input[placeholder='Password']").val();

        // You can add your login validation logic here
        if (userName === "your_username" && password === "your_password") {
            // Replace 'your_username' and 'your_password' with actual credentials in database
            alert("Login successful!"); // You can customize this part
        } else {
            alert("Invalid username or password."); // You can customize this part
        }
    });

    // Function to handle the "Reset" button
    $(".form-button:contains('Reset')").click(function() {
        $("form")[0].reset(); // Reset the form fields
    });
});
