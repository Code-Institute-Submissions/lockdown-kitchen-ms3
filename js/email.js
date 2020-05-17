function sendMail(contactForm) {
    emailjs.init("user_UW97WmP3GsBepuyB8Vffd");
    var templateParams = {
        "from_name": contanctForm.name.value,
        "from_email": contactForm.email.value,
        "feedback": contactForm.feedback.value
    };
    // Sends the email through mailJS
    // Also makes the button responsive when clicked, if success the button will changed text
    // And become green
    emailjs.send("gmail", "lockdown_kitchen", templateParams)
        .then(
            function(response) {
                if(response) {
                    $(".feedback_button").text("Thank you");
                    $(".feedback_button").removeClass("btn-secondary");
                    $(".feedback_button").addClass("white_cl");
                    $(".feedback_button").addClass("dark_green_bg");
                }
            },
            // Change the color of button to red, with "Try Again Later"
            function(error) {
                if(error) {
                    $(".feedback_button").text("Try Again Later");
                    $(".feedback_button").removeClass("btn-secondary");
                    $(".feedback_button").addClass("white_cl");
                    $(".feedback_button").addClass("red_bg");
                }
            }
        );
    return false;  // To block from loading a new page

}