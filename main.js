var skills_section = document.querySelector(".skills");
var allSkills_span = document.querySelectorAll(".progress span");

window.onscroll = function () {
    if (window.scrollY >= skills_section.offsetTop - 1){
        allSkills_span.forEach(skill => {
            skill.style.width = skill.dataset.width;
        })
    }
};