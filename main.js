const skillsSection = document.querySelector(".skills");
const allSkills = document.querySelectorAll(".progress span");
const statsSection = document.querySelector(".stats");
const allStats = document.querySelectorAll(".state .number");
let isFunctionStarted = false;
const toUpbutton = document.querySelector(".go-to--up");

function startCount(element){
    const targetNumber = element.dataset.target;
    const numberCounter = setInterval(() => {
        element.textContent++;
        if (element.textContent === targetNumber){
            clearInterval(numberCounter);
        };
    }, 1000 / targetNumber);
};

window.onscroll = function () {
    if (this.scrollY >= skillsSection.offsetTop - 2) {
        allSkills.forEach(skill => {
            skill.style.width = skill.dataset.width;
        });
    };

    if (this.scrollY >= statsSection.offsetTop - 2) {
        if (!isFunctionStarted){
            allStats.forEach(state => startCount(state));
        };
        isFunctionStarted = true;
    };

    this.scrollY >= 700 ? toUpbutton.classList.add("show-up--button") : toUpbutton.classList.remove("show-up--button");
    toUpbutton.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
};

const targetDate = new Date("Aug 6, 2023 23:59:59").getTime();
const allUnits = document.querySelectorAll(".unit span");

const birthdayCounter = setInterval(() => {
    const currentDate = new Date().getTime();
    const reminDate = targetDate - currentDate;

    const days = Math.floor(reminDate / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

    const hours = Math.floor((reminDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

    const minutes = Math.floor((reminDate % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    
    const seconds = Math.floor((reminDate % (1000 * 60)) / 1000);
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (reminDate < 0) {
        clearInterval(birthdayCounter);
        allUnits.forEach(unit => unit.innerHTML = "00");
        document.querySelector(".birthday-hint").innerHTML = "It's my birthday 🎊🎁🎈";
        document.querySelector(".birthday-time").innerHTML = "Oh my god, I'm delighted right now, this moment is one of the happiest moments I've ever got in my life.";
    };
}, 1000);