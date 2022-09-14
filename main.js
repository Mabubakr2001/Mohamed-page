var allUnits_span = document.querySelectorAll(".unit span");
var myBirthday = new Date("Aug 6, 2023 23:59:59").getTime();
var myCounter = setInterval(() => {
    var currentDate = new Date().getTime();
    var reminDate = myBirthday - currentDate;
    
    var days = Math.floor(reminDate / (1000 * 60 * 60 * 24));
    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;

    var hours = Math.floor((reminDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;

    var minutes = Math.floor((reminDate % (1000 * 60 * 60)) / (1000 * 60));
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;

    var seconds = Math.floor((reminDate % (1000 * 60)) / 1000);
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (reminDate < 0){
        clearInterval(myCounter)
        allUnits_span.forEach(unit => unit.innerHTML = "00")
        document.querySelector(".birthday-hint").innerHTML = "Oh, It's my birthday 🎊🎁🎈"
        document.querySelector(".birthday-time").innerHTML = "Oh my god, I'm delighted right now, this moment is one of the happiest moments I've got in my life."
    }
}, 1000)


var skillsSection_section = document.querySelector(".skills");
var allSkills_span = document.querySelectorAll(".progress span");
var statsSection_section = document.querySelector(".stats");
var allNumbers_span = document.querySelectorAll(".state .number");
var isfunctionStarted = false;

function startCount(element){
    var targetNumber = element.dataset.target;
    var numberCounter = setInterval(() => {
        element.textContent++;
        if (element.textContent === targetNumber){
            clearInterval(numberCounter)
        }
    }, 2000 / targetNumber)
}

window.onscroll = function () {
    if (window.scrollY >= statsSection_section.offsetTop - 2){
        if (!isfunctionStarted){
            allNumbers_span.forEach(number => startCount(number))
        }
        isfunctionStarted = true
    }

    if (window.scrollY >= skillsSection_section.offsetTop - 2){
        allSkills_span.forEach(skill => {
            skill.style.width = skill.dataset.width;
        })
    }
}