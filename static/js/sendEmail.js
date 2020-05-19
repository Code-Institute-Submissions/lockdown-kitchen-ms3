function sendMail(contactForm) {
    emailjs.init("user_UW97WmP3GsBepuyB8Vffd");
    emailjs.send("gmail", "lockdown_kitchen", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
    .then(
        function(response) {
            $('#modal1').modal('close');
            Materialize.toast('Thanks for your feedback!', 4000) 
            console.log("SUCCESS", response);
        },
        function(error) {
            $('#modal1').modal('close');
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
