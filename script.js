/* =========================================
   EASY CUSTOMER CUSTOMIZATION
========================================= */

const birthdayData = {
    name: "pratibha",

    subtitle:
        "A little website made with a lot of love.",

    message:
        "You deserve all the beautiful things life has to offer. Keep smiling, keep dreaming and keep being the wonderful person you are.",

    letter:
        "May this year bring you countless reasons to smile, beautiful memories to keep, and dreams that slowly become reality.",

    finalMessage:
        "May your life always be filled with happiness, laughter and beautiful moments.",

    photos: [
        "./images/photo1.jpg",
        "./images/photo2.jpg",
        "./images/photo3.jpg",
        "./images/photo4.jpg",
    ]
};


/* =========================================
   ELEMENTS
========================================= */

const intro = document.getElementById("intro");

const startBtn =
    document.getElementById("startBtn");

const mainContent =
    document.getElementById("mainContent");

const beginBtn =
    document.getElementById("beginBtn");

const envelope =
    document.getElementById("envelope");

const clickHint =
    document.getElementById("clickHint");

const surpriseBtn =
    document.getElementById("surpriseBtn");

const surpriseOverlay =
    document.getElementById("surpriseOverlay");

const closeSurprise =
    document.getElementById("closeSurprise");

const burstContainer =
    document.getElementById("burstContainer");


/* =========================================
   APPLY CUSTOMER DATA
========================================= */

document.getElementById("heroName").textContent =
    birthdayData.name;

document.getElementById("finalName").textContent =
    birthdayData.name;

document.getElementById("heroSubtitle").textContent =
    birthdayData.subtitle;

document.getElementById("mainMessage").textContent =
    birthdayData.message;

document.getElementById("letterText").textContent =
    birthdayData.letter;

document.getElementById("finalMessage").textContent =
    birthdayData.finalMessage;


/* =========================================
   APPLY PHOTOS
========================================= */


const photoStage = document.getElementById("photoStage");

birthdayData.photos.forEach((photo, index) => {
    const card = document.createElement("div");

    card.className = "photo-card reveal";

    card.innerHTML = `
        <div class="photo-number">${String(index + 1).padStart(2, "0")}</div>
        <img src="${photo}" alt="Memory ${index + 1}">
    `;

    photoStage.appendChild(card);
});

/* =========================================
   CREATE FLOATING PARTICLES
========================================= */

const particleContainer =
    document.getElementById("particles");

for (let i = 0; i < 35; i++) {

    const particle =
        document.createElement("div");

    particle.className =
        "particle";

    particle.style.left =
        Math.random() * 100 + "%";

    particle.style.animationDuration =
        8 + Math.random() * 12 + "s";

    particle.style.animationDelay =
        Math.random() * 8 + "s";

    particle.style.width =
        2 + Math.random() * 4 + "px";

    particle.style.height =
        particle.style.width;

    particleContainer.appendChild(
        particle
    );

}


/* =========================================
   START EXPERIENCE
========================================= */

startBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    mainContent.classList.add("visible");

    setTimeout(() => {

        document.body.style.overflowY =
            "auto";

    }, 500);

});


/* =========================================
   BEGIN BUTTON
========================================= */

beginBtn.addEventListener("click", () => {

    document.getElementById("moments")
        .scrollIntoView({
            behavior: "smooth"
        });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ENVELOPE
========================================= */

envelope.addEventListener("click", () => {

    envelope.classList.toggle("open");

    if (envelope.classList.contains("open")) {

        clickHint.textContent =
            "Your little letter is open ✦";

    } else {

        clickHint.textContent =
            "Tap the envelope to open";

    }

});


/* =========================================
   SURPRISE
========================================= */

surpriseBtn.addEventListener("click", () => {

    surpriseOverlay.classList.add("show");

    createBurst();

});


/* =========================================
   CLOSE SURPRISE
========================================= */

closeSurprise.addEventListener("click", () => {

    surpriseOverlay.classList.remove("show");

    setTimeout(() => {

        document.getElementById("final")
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 400);

});


/* =========================================
   CREATE HEART BURST
========================================= */

function createBurst() {

    burstContainer.innerHTML = "";

    const symbols = [
        "♥",
        "✦",
        "♡",
        "✧",
        "✨"
    ];

    for (let i = 0; i < 35; i++) {

        const burst =
            document.createElement("span");

        burst.className =
            "burst";

        burst.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            100 +
            Math.random() * 300;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        burst.style.setProperty(
            "--x",
            x + "px"
        );

        burst.style.setProperty(
            "--y",
            y + "px"
        );

        burst.style.left =
            "50%";

        burst.style.top =
            "50%";

        burst.style.animationDelay =
            Math.random() * 0.3 + "s";

        burstContainer.appendChild(
            burst
        );

    }

}


/* =========================================
   FINAL STARS
========================================= */

const starsContainer =
    document.querySelector(".final-stars");

for (let i = 0; i < 30; i++) {

    const star =
        document.createElement("span");

    star.className =
        "star";

    star.textContent =
        Math.random() > 0.5
            ? "✦"
            : "·";

    star.style.left =
        Math.random() * 100 + "%";

    star.style.top =
        Math.random() * 100 + "%";

    star.style.fontSize =
        8 + Math.random() * 15 + "px";

    star.style.animationDelay =
        Math.random() * 2 + "s";

    starsContainer.appendChild(
        star
    );

}


/* =========================================
   PREVENT BROKEN IMAGE ICONS
========================================= */

/* =========================================
   PREVENT BROKEN IMAGE ICONS
========================================= */

const generatedPhotos = document.querySelectorAll("#photoStage img");

generatedPhotos.forEach(image => {

    image.addEventListener("error", () => {

        image.src =
            "data:image/svg+xml," +
            encodeURIComponent(`

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="700"
                    height="900"
                    viewBox="0 0 700 900"
                >

                    <defs>
                        <linearGradient
                            id="g"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="1"
                        >
                            <stop
                                offset="0"
                                stop-color="#421331"
                            />

                            <stop
                                offset="1"
                                stop-color="#100814"
                            />
                        </linearGradient>
                    </defs>

                    <rect
                        width="700"
                        height="900"
                        fill="url(#g)"
                    />

                    <text
                        x="350"
                        y="420"
                        text-anchor="middle"
                        fill="#ffc2df"
                        font-size="35"
                        font-family="Arial"
                    >
                        YOUR PHOTO
                    </text>

                    <text
                        x="350"
                        y="470"
                        text-anchor="middle"
                        fill="#a98a9d"
                        font-size="18"
                        font-family="Arial"
                    >
                        Add an image here
                    </text>

                </svg>

            `);

    });

});


/* =========================================
   MOUSE PARALLAX - DESKTOP ONLY
========================================= */

if (window.innerWidth > 800) {

    document.addEventListener(
        "mousemove",
        event => {

            const x =
                (event.clientX /
                    window.innerWidth -
                    0.5) *
                10;

            const y =
                (event.clientY /
                    window.innerHeight -
                    0.5) *
                10;

            document.querySelectorAll(
                ".ambient"
            ).forEach((element, index) => {

                const multiplier =
                    (index + 1) * 0.5;

                element.style.transform =
                    `translate(
                        ${x * multiplier}px,
                        ${y * multiplier}px
                    )`;

            });

        }
    );

}


/* =========================================
   ESCAPE KEY
========================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            surpriseOverlay.classList.contains(
                "show"
            )
        ) {

            surpriseOverlay.classList.remove(
                "show"
            );

        }

    }
);


/* =========================================
   INITIAL STATE
========================================= */

document.body.style.overflow =
    "hidden";