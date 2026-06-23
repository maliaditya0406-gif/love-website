/* ==========================================
   LOADER
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        }, 800);

    }, 2000);

});

/* ==========================================
   PASSWORD
========================================== */

const unlockBtn = document.getElementById("unlock");

unlockBtn.addEventListener("click", () => {

    const pass = document.getElementById("password").value;

    if (pass === "01062026") {

        document.getElementById("password-page").style.display = "none";

        document.getElementById("website").style.display = "block";

    } else {

        alert("Wrong Password ❤️");

    }

});

/* ==========================================
   LOVE TIMER
========================================== */

const startDate = new Date("June 1, 2026 00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;

    document.getElementById("hours").innerText = hours;

    document.getElementById("minutes").innerText = minutes;

    document.getElementById("seconds").innerText = seconds;

}

setInterval(updateTimer, 1000);

updateTimer();

/* ==========================================
   FLOATING HEARTS
========================================== */

const heartsContainer = document.getElementById("hearts-container");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    heart.style.fontSize = (15 + Math.random() * 25) + "px";

    heartsContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 350);

/* ==========================================
   SURPRISE
========================================== */

const surpriseBtn = document.getElementById("surpriseBtn");

const hiddenMessage = document.getElementById("hiddenMessage");

surpriseBtn.addEventListener("click", () => {

    hiddenMessage.style.display = "block";

    hiddenMessage.scrollIntoView({

        behavior: "smooth"

    });

});

/* ==========================================
   SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll(".section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(80px)";

    section.style.transition = "1s";

    observer.observe(section);

});
/* ==========================================
   SHOOTING STARS
========================================== */

const starsContainer = document.getElementById("stars");

function createStar() {

    const star = document.createElement("div");

    star.classList.add("shooting-star");

    star.style.left = Math.random() * window.innerWidth + "px";

    star.style.top = Math.random() * 200 + "px";

    star.style.animationDuration = (2 + Math.random() * 2) + "s";

    starsContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 4000);

}

setInterval(createStar, 2000);


/* ==========================================
   CURSOR HEART EFFECT
========================================== */

document.addEventListener("mousemove", function(e){

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    heart.innerHTML = "❤";

    heart.style.left = e.pageX + "px";

    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 1000);

});


/* ==========================================
   GALLERY CLICK ZOOM
========================================== */

const galleryImages = document.querySelectorAll(".photo img");

galleryImages.forEach((img)=>{

    img.addEventListener("click",()=>{

        const overlay=document.createElement("div");

        overlay.className="image-overlay";

        const image=document.createElement("img");

        image.src=img.src;

        overlay.appendChild(image);

        document.body.appendChild(overlay);

        overlay.addEventListener("click",()=>{

            overlay.remove();

        });

    });

});


/* ==========================================
   MUSIC BUTTON
========================================== */

const musicButton=document.querySelector(".music-card button");

musicButton.addEventListener("click",()=>{

    window.open(
        "https://youtu.be/d_Xbd2I5Zxk?si=SE87VgLGJUnZiDZ-",
        "_blank"
    );

});


/* ==========================================
   SECRET HEART CLICK
========================================== */

let clickCount=0;

const logo=document.querySelector(".logo");

logo.addEventListener("click",()=>{

clickCount++;

if(clickCount===7){

alert(
"❤️ Secret Unlocked ❤️\n\nI Love You Forever Shruti ❤️"
);

clickCount=0;

}

});


/* ==========================================
   RANDOM LOVE QUOTES
========================================== */

const quotes=[

"Every moment with you is my favorite memory ❤️",

"You are my today and all my tomorrows 💕",

"I choose you. Again and again. Forever ❤️",

"Every heartbeat whispers your name ❤️",

"My happiest place is beside you 💖"

];

function randomQuote(){

const p=document.querySelector(".hero-content p");

if(!p) return;

const random=Math.floor(Math.random()*quotes.length);

p.innerHTML=quotes[random];

}

setInterval(randomQuote,6000);


/* ==========================================
   ANNIVERSARY WISH
========================================== */

const today=new Date();

if(today.getMonth()===5 && today.getDate()===1){

setTimeout(()=>{

alert("❤️ Happy Anniversary Aditya & Shruti ❤️");

},4000);

}


/* ==========================================
   END OF PART 2
========================================== */
