var success = document.querySelector("#modal2");
var modalClose = document.querySelector("#modal1");
var fail = document.querySelector("#modal3")


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
             console.log("FAILED", error);
             modalClose.style.display = "none";
            fail.style.display = "block";
            setTimeout(function() {
            fail.style.display = "none";
            }, 5000);
        }
    );
    return false;  // To block from loading a new page
}
