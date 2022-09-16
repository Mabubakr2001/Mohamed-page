var targetDate = new Date("Aug 6, 2023 23:59:59").getTime();
var allUnits = document.querySelectorAll(".unit span");

var birthdayCounter = setInterval(() => {
    var currentDate = new Date().getTime();
    var reminDate = targetDate - currentDate;

    var days = Math.floor(reminDate / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

    var hours = Math.floor((reminDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

    var minutes = Math.floor((reminDate % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;

    var seconds = Math.floor((reminDate % (1000 * 60)) / 1000);
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (reminDate < 0){
        clearInterval(birthdayCounter);
        allUnits.forEach(unit => unit.innerHTML = "00");
        document.querySelector(".birthday-hint").innerHTML = "It's my birthday 🎊🎁🎈";
        document.querySelector(".birthday-time").innerHTML = "Oh my god, I'm delighted right now, this moment is one of the happiest moments I've ever got in my life.";
    };
}, 1000);



var toUpbutton = document.querySelector(".go-to--up");
var skillsSection = document.querySelector(".skills");
var allSkills = document.querySelectorAll(".progress span");
var statsSection = document.querySelector(".stats");
var allStats = document.querySelectorAll(".state .number");
var isFunctionstarted = false;

function startCount(element){
    var targetNumber = element.dataset.target;
    var numberCounter = setInterval(() => {
        element.textContent++;
        if (element.textContent === targetNumber) {
            clearInterval(numberCounter);
        };
    }, 1000 / targetNumber)
};

window.onscroll = function () {
    if (this.scrollY >= 700) {
        toUpbutton.classList.add("show-up--button");
    }else{
        toUpbutton.classList.remove("show-up--button");
    }

    toUpbutton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    if (this.scrollY >= skillsSection.offsetTop - 2) {
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });
    };

    if (this.scrollY >= statsSection.offsetTop - 2) {
        if (!isFunctionstarted) {
            allStats.forEach(state => startCount(state));
        };
        isFunctionstarted = true;
    };
};