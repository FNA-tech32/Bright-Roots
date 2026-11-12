// Mobile Menu Navigation Logic
var menuBox = document.getElementById("menu-bar");
var menutick = false;

function crossBar() {
    menuBox.style.transform = "translate(-100%, 0px)";
    menutick = false;
}

function menuBar() {
    if (menutick === false) {
        menuBox.style.transform = "translate(0px, 0px)";
        menutick = true;
    } else {
        menuBox.style.transform = "translate(-100%, 0px)";
        menutick = false;
    }
}

function menuBarClose() {
    menuBox.style.transform = "translate(-100%, 0px)";
    menutick = false;
}

// Appointment Form Interactive Handler
document.addEventListener("DOMContentLoaded", function () {
    var appointmentForm = document.getElementById("appointmentForm");
    var formStatus = document.getElementById("formStatus");

    if (appointmentForm && formStatus) {
        appointmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            var nameInput = document.getElementById("name");
            var serviceInput = document.getElementById("service");
            var dateInput = document.getElementById("date");
            var timeInput = document.getElementById("time");

            var patientName = nameInput ? nameInput.value : "Valued Patient";
            var serviceName = serviceInput && serviceInput.value ? serviceInput.value : "Dental Consultation";
            var apptDate = dateInput ? dateInput.value : "Upcoming Date";
            var apptTime = timeInput ? timeInput.value : "Scheduled Time";

            formStatus.style.display = "block";
            formStatus.innerHTML = "<strong>Thank you, " + patientName + "!</strong> Your booking request for <em>" + serviceName + "</em> on " + apptDate + " at " + apptTime + " has been received. Our Bright Rootes team will call or email you shortly to confirm.";

            appointmentForm.reset();

            // Auto-scroll to status message
            formStatus.scrollIntoView({ behavior: "smooth", block: "nearest" });

            setTimeout(function () {
                formStatus.style.display = "none";
            }, 8000);
        });
    }
});