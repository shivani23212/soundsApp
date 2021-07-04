window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colours = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#60b2d3"
    ];

    // play sounds --> https://www.youtube.com/watch?v=MMb6CPU0vy8
    // arrow function --> https://www.w3schools.com/js/js_arrow_function.asp
    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
            sounds[index].currentTime = 0; // resets sound time 
            sounds[index].play();

            createBubbles(index); // calling funct and passing in index

        });
    });

    // visual bubbles
    const createBubbles = (index) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble); // append new div to 'visual' class
        bubble.style.backgroundColor = colours[index];

        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener("animationend", function() {
            visual.removeChild(this); // to remove div after it has disappeared from screen
            // 'this' keyword --> https://www.youtube.com/watch?v=qs3F-z6ridc
        })
    }
});