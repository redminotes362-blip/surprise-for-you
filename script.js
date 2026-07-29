// ---------- Change Page ----------
function nextPage(page){

document.querySelectorAll(".page").forEach(p=>{
p.classList.remove("active");
});

document.getElementById("page"+page).classList.add("active");

}

// ---------- Gift Open ----------

function openGift(){

const gift=document.querySelector(".gift");

gift.innerHTML="💖";
gift.style.transform="scale(1.4)";

setTimeout(()=>{
nextPage(3);
typeWriter();
},1000);

}

// ---------- Typewriter ----------

const text=`Who knew meeting you in college would become the most beautiful part of my life.

From silly jokes to endless flirting...
every notification from you makes my day better.

You are my favourite person ❤️`;

let i=0;

function typeWriter(){

const target=document.getElementById("typewriter");

target.innerHTML="";

i=0;

let timer=setInterval(()=>{

if(i<text.length){

target.innerHTML+=text.charAt(i);

i++;

}else{

clearInterval(timer);

}

},40);

}

// ---------- Floating Hearts ----------

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

},1000);
function love() {

    nextPage(5);

    for (let i = 0; i < 100; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.className = "heart";
            heart.innerHTML = "❤️";

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (20 + Math.random() * 30) + "px";

            document.body.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 80);

    }

}