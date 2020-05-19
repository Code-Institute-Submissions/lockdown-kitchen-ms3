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
           $('.modal2').modal('open');
            console.log("SUCCESS", response);
        },
        function(error) {
            $('#modal1').modal('close');
            $('.modal3').modal('open');
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
