// Pick the skills section
var skillsSection = document.querySelector(".skills");

// Pick all skills which is spans
var allSkills = document.querySelectorAll(".progress span");

// Make the anonymous function do her work when I reach the skills section
window.onscroll = function () {
    if (window.scrollY >= skillsSection.offsetTop - 2){
        allSkills.forEach(skill => {

            // Change the color of the spans to the color of the custom attribute that I've put in each span.
            skill.style.width = skill.dataset.width;
        })
    }
};

// Get the desired date in milliseconds
var myBirthday = new Date("Aug 7, 2023 23:59:59").getTime();

// Make counter to get the units
var myCounter = setInterval(() => {

    // Get the current date
    var currentDate = new Date().getTime();

    // Subtract the desired date from the current date to get the remaining date.
    var reminDate = myBirthday - currentDate;

    // Change the remaining date which is in milliseconds to be days without decimals
    var days = Math.floor(reminDate / (1000 * 60 * 60 * 24));

    // Put the days unit in the html span
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

    // Get the remaining decimals from the days unit and change it to hours without decimals
    var hours = Math.floor(reminDate % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    // Put the hours unit in the html span
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

    // Get the remaining decimals from the hours unit and change it to minutes without decimals
    var minutes = Math.floor(reminDate % (1000 * 60 * 60) / (1000 * 60));

    // Put the minutes unit in the html span
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;

    // Get the remaining decimals from the minutes unit and change it to seconds without decimals
    var seconds = Math.floor(reminDate % (1000 * 60) / 1000);

    // Put the seconds unit in the html span
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    // checking if the remaining date equals zero, then clear the interval which is the counter that I've made.
    if (reminDate = 0){
        clearInterval(myCounter)
        document.querySelector(".birthday-hint").innerHTML = "It's my birthday 🎁🎈🎊"
        document.querySelector(".birthday-time").innerHTML = "Oh my god. I'm delighted right now, This moment is one of the happiest moments I've ever got in my life."
    }

}, 1000);