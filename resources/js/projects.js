/* by clicking on the title of projects, 
the section collapses or unfolds */


let titleHowest = document.getElementById("howestTitle");
let titleCodecademy = document.getElementById("codecademyTitle");
let projectHowest = document.getElementById("howestProjects");
let projectCodecademy = document.getElementById("codecademyProjects");

projectHowest.style.display = "none";
titleHowest.querySelector("i").classList.add('bi-caret-right');
projectCodecademy.style.display = "flex";
titleCodecademy.querySelector("i").classList.add('bi-caret-down');


function changeIcon(anchor) {
    let icon = anchor.querySelector("i");
    icon.classList.toggle('bi-caret-down');
    icon.classList.toggle('bi-caret-right');
  };

titleHowest.onclick = function () {
    if (projectHowest.style.display === "none") {
        projectHowest.style.display = "flex";
    } else {
        projectHowest.style.display = "none";
    }
    changeIcon(titleHowest);
};

titleCodecademy.onclick = function () {    
    if (projectCodecademy.style.display === "none") {
        projectCodecademy.style.display = "flex";
    } else {
        projectCodecademy.style.display = "none";
    }
    changeIcon(titleCodecademy);
};