$(document).ready(function() {
    $("form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission
        
        const userName = $(".form-input[placeholder='User Name']").val();
        const password = $(".form-input[placeholder='Password']").val();

        if (userName === "your_username" && password === "your_password") 
        {
            // Replace 'your_username' and 'your_password' with actual credentials in database
            alert("Login successful!");
        } else 
        {
            alert("Invalid username or password.");
        }
    });

    $(".form-button:contains('Reset')").click(function() {
        $("form")[0].reset();
    });
});
