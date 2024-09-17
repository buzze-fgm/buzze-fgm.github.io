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

// Change theme with button

function changeTheme() {
    if (document.querySelector('button').className.includes("lightTheme")) {
        const colorsBlue = document.getElementsByClassName("cBlue");
        const colorsRed = document.getElementsByClassName("cRed");
        const bgsBlue = document.getElementsByClassName("bgBlue");
        const bgsYellow = document.getElementsByClassName("bgYellow");

        for (const colorBlue of colorsBlue) {
            colorBlue.style.color= "#b7c4e1";
        }
        for (const colorRed of colorsRed) {
            colorRed.style.color= "#da7b58";
        }
        for (const bgBlue of bgsBlue) {
            bgBlue.style.backgroundColor= "#48536c";
        }
        for (const bgYellow of bgsYellow) {
            bgYellow.style.backgroundColor= "#645e40";
        }
        document.querySelector('html').style.backgroundColor = "#2c2c2c";
    } else {
        let colorsBlue = document.getElementsByClassName('cBlue');
        let colorsRed = document.getElementsByClassName('cRed');
        let bgsBlue = document.getElementsByClassName('bgBlue');
        let bgsYellow = document.getElementsByClassName('bgYellow');

        for (const colorBlue of colorsBlue) {
            colorBlue.style.color= "";
        }
        for (const colorRed of colorsRed) {
            colorRed.style.color= "";
        }
        for (const bgBlue of bgsBlue) {
            bgBlue.style.backgroundColor= "";
        }
        for (const bgYellow of bgsYellow) {
            bgYellow.style.backgroundColor= "";
        }
        document.querySelector('html').style.backgroundColor = "";
        
    }
    document.querySelector('button').classList.toggle('darkTheme');
    document.querySelector('button').classList.toggle('lightTheme');
};

document.querySelector('button').onclick = changeTheme;