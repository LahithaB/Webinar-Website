
function calculateTimeRemaining() {
    const webinarDate = new Date("2023-08-31T11:00:00Z");
    const now = new Date();
    const timeRemaining = webinarDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeRemaining / (1000 * 60)) % 60);
    const seconds = Math.floor((timeRemaining / 1000) % 60);
    return { days, hours, minutes, seconds };
}

function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const { days, hours, minutes, seconds } = calculateTimeRemaining();
    
    if (days < 0 || hours < 0 || minutes < 0 || seconds < 0) {
        countdownElement.innerHTML = "Webinar has started!";
    } else {
        countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

let registeredAttendees = 0;
let viewersOnline = 0;

function updateAttendeesAndViews() {
    registeredAttendees++;
    viewersOnline = Math.floor(Math.random() * 100);
    
    document.getElementById("registered-attendees").textContent = registeredAttendees;
    document.getElementById("viewers-online").textContent = viewersOnline;
}

const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
    const answer = question.nextElementSibling;

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
        question.querySelector('.faq-toggle').textContent = answer.style.display === 'block' ? '-' : '+';
    });
});


function toggleForm() {
    var form = document.getElementById("registrationContainer");
    var button = document.getElementById("registerButton");

    if (form.style.display === "none" || form.style.display === "") {
        form.style.display = "block";
        button.innerHTML = "Hide Form";
        button.classList.remove("blinking");
    } else {
        form.style.display = "none";
        button.innerHTML = "Register Now for FREE";
        button.classList.add("blinking");
    }
}


setInterval(updateCountdown, 1000);
setInterval(updateAttendeesAndViews, 5000); 
updateCountdown();
updateAttendeesAndViews();
