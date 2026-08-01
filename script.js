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

const text=`We met for the first time during exam duty, and I really liked you.
We spent a lot of time together, but that moment was limited to just that.`;

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