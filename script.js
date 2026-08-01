const startBtn = document.getElementById("startBtn");
const loader = document.getElementById("loader");
const main = document.getElementById("main");
const typewriter = document.getElementById("typewriter");

const message = `Happy Birthday, Ayesha ❤️

Today is all about celebrating the wonderful person you are.

May Allah bless you with happiness, peace, success, good health and endless smiles.

Thank you for being such a special part of life.

Keep smiling, keep shining and always believe in yourself.

May every dream in your heart come true.

Ameen 🤲

✨ Have a Beautiful Birthday ✨`;

let i = 0;

function typeEffect() {
    if (i < message.length) {
        typewriter.innerHTML += message.charAt(i) === "\n" ? "<br>" : message.charAt(i);
        i++;
        setTimeout(typeEffect, 40);
    }
}

startBtn.onclick = () => {
    loader.style.display = "none";
    main.classList.remove("hidden");
    typeEffect();

    setInterval(createHeart, 300);
};

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random()*100+"vw";
    heart.style.top = "100vh";
    heart.style.fontSize = (20+Math.random()*20)+"px";
    heart.style.pointerEvents="none";
    heart.style.animation="floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatUp{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}

}

`;

document.head.appendChild(style);
