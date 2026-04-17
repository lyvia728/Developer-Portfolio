
// HOME NAME TYPING
let nameElement = document.querySelector(".typing-name");

if (nameElement) {
    let nameText = nameElement.textContent;

    nameElement.textContent = "";

    let nameTypewriter = new Typewriter(nameElement, {
        autoStart: true,
        delay: 90,
        cursor: ""
    });

    nameTypewriter.typeString(nameText).start();
}

// ABOUT LINE TYPING
let aboutLine = document.querySelector(".typing-line");

if (aboutLine) {
    let aboutText = aboutLine.innerHTML;

    aboutLine.innerHTML = "";

    let aboutTypewriter = new Typewriter(aboutLine, {
        autoStart: true,
        delay: 35,
        cursor: ""
    });

    aboutTypewriter.typeString(aboutText).start();
}

function openForm() {
    document.getElementById("hireForm").style.display = "flex";
}

function closeForm() {
    document.getElementById("hireForm").style.display = "none";
}