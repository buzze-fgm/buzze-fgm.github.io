

// Change theme with button
let theme;
theme = localStorage.getItem('myTheme');

function toDark() {
    const colorsBlue = document.getElementsByClassName("cBlue");
    const colorsRed = document.getElementsByClassName("cRed");
    const bgsBlue = document.getElementsByClassName("bgBlue");
    const bgsYellow = document.getElementsByClassName("bgYellow");

    for (const colorBlue of colorsBlue) {
        colorBlue.style.color= "#d7e0f5";
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
}

function toLight() {
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

function toggleThemeClass() {
    document.querySelector('button').classList.toggle('darkTheme');
    document.querySelector('button').classList.toggle('lightTheme');
}

if (theme === "dark") {
    toDark();
    toggleThemeClass();
}

function changeTheme() {
    if (document.querySelector('button').className.includes("lightTheme")) {
        toDark();
        theme = "dark";
    } else {
        toLight();
        theme = "light";
    }
    toggleThemeClass();
    localStorage.setItem('myTheme', theme);
};

document.querySelector('button').onclick = changeTheme;


// responsive menu button

function showMenu() {
    let menu1 = document.getElementById("navLeft");
    let menu2 = document.getElementById("navRight");
    let menuIcon1 = document.getElementById("menuButton");
    let menuIcon2 = document.getElementById("menuX");

    menu1.style.display = "block";
    menu2.style.display = "block";
    menuIcon1.style.display = "none";
    menuIcon2.style.display = "block";
}

function closeMenu() {
    let menu1 = document.getElementById("navLeft");
    let menu2 = document.getElementById("navRight");
    let menuIcon1 = document.getElementById("menuButton");
    let menuIcon2 = document.getElementById("menuX");

    menu1.style.display = "none";
    menu2.style.display = "none";
    menuIcon1.style.display = "block";
    menuIcon2.style.display = "none";
}


let openEl = document.getElementById("menuButton");
openEl.onclick = showMenu;
let closeEl = document.getElementById("menuX");
closeEl.onclick = closeMenu;
