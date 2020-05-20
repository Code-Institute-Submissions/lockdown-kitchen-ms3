var success = document.querySelector("#modal2");
var modalClose = document.querySelector("#modal1");


function sendMail(contactForm) {
    emailjs.init("user_UW97WmP3GsBepuyB8Vffd");
    emailjs.send("gmail", "lockdown_kitchen", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "feedback": contactForm.feedback.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
            modalClose.style.display = "none";
            success.style.display = "block";
            setTimeout(function() {
            success.style.display = "none";
            }, 3500);
        },
        
        function(error) {
            $('#modal1').modal('close');
            $('#modal3').modal('open');
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}
