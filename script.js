const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const typewriter = document.getElementById("typewriter");
const bgMusic = document.getElementById("bgMusic");

const message = `Happy Birthday, Ayesha ❤️

Today is all about celebrating the beautiful person you are.

May Allah fill your life with happiness, peace, success and countless blessings.

Keep smiling because your smile makes the world brighter.

May every dream in your heart come true.

Never stop believing in yourself.

Have a wonderful birthday.

Ameen 🤲

✨ Enjoy Your Special Day ✨`;

let i = 0;

function typeEffect() {
    if (i < message.length) {
        if (message.charAt(i) === "\n") {
            typewriter.innerHTML += "<br>";
        } else {
            typewriter.innerHTML += message.charAt(i);
        }

        i++;
        setTimeout(typeEffect, 40);
    }
}

startBtn.addEventListener("click", () => {

    loader.style.display = "none";
    main.classList.remove("hidden");

    if (bgMusic) {
        bgMusic.volume = 0.5;
        bgMusic.play().catch(() => {});
    }

    typeEffect();

    setInterval(createHeart, 300);

});

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (18 + Math.random() * 22) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "999";
    heart.style.animation = "floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);

}

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp{

0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}

100%{
transform:translateY(-120vh) rotate(360deg);
opacity:0;
}

}
`;

document.head.appendChild(style);
