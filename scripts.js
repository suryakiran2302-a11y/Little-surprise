/* =================================
   NETFLIX STYLE SCROLL REVEAL
================================= */

const cinematicItems = document.querySelectorAll(
    ".section-heading, .episode-card, .gallery-item"
);

const cinematicObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("cinematic-visible");
            }
        });
    },
    {
        threshold: 0.15
    }
);

cinematicItems.forEach((item) => {
    item.classList.add("cinematic-hidden");
    cinematicObserver.observe(item);
});

/* =================================
SMOOTH SCROLL
================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

link.addEventListener("click", function (e) {

    const targetId = this.getAttribute("href");
    const target = document.querySelector(targetId);

    if (target) {

        e.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

});

});

/* =================================
SCROLL REVEAL
================================= */

const revealElements = document.querySelectorAll(
".section-heading, .episode-card, .gallery-item"
);

revealElements.forEach(element => {
element.classList.add("hidden");
});

const revealObserver = new IntersectionObserver(
entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

            revealObserver.unobserve(entry.target);

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

/* =================================
HERO IMAGE PARALLAX
================================= */

const heroImage =
document.querySelector(".hero-image img");

window.addEventListener("scroll", () => {

if (!heroImage) return;

const scrollY = window.scrollY;

if (scrollY < window.innerHeight) {

    heroImage.style.transform =
        `translateY(${scrollY * 0.08}px) scale(1.02)`;

}

});

/* =================================
GALLERY LIGHTBOX
================================= */

const galleryImages =
document.querySelectorAll(".gallery-item img");

const galleryLightbox =
document.getElementById("galleryLightbox");

const lightboxImage =
document.getElementById("lightboxImage");

const galleryClose =
document.getElementById("galleryClose");

const galleryPrev =
document.getElementById("galleryPrev");

const galleryNext =
document.getElementById("galleryNext");

const galleryCounter =
document.getElementById("galleryCounter");

let currentGalleryIndex = 0;

/* Show selected gallery image */

function showGalleryImage(index) {

if (!galleryImages.length) return;

currentGalleryIndex =
    (index + galleryImages.length) %
    galleryImages.length;


const selectedImage =
    galleryImages[currentGalleryIndex];


lightboxImage.src =
    selectedImage.src;


lightboxImage.alt =
    selectedImage.alt;


galleryCounter.textContent =
    `${String(currentGalleryIndex + 1).padStart(2, "0")} / ${String(galleryImages.length).padStart(2, "0")}`;

}

/* Open gallery */

function openGallery(index) {

showGalleryImage(index);

galleryLightbox.classList.add("active");

document.body.style.overflow = "hidden";

}

/* Close gallery */

function closeGallery() {

galleryLightbox.classList.remove("active");

document.body.style.overflow = "";

}

/* Click gallery image */

galleryImages.forEach((image, index) => {

image.addEventListener("click", () => {

    openGallery(index);

});

});

/* Close button */

if (galleryClose) {

galleryClose.addEventListener(
    "click",
    closeGallery
);

}

/* Previous button */

if (galleryPrev) {

galleryPrev.addEventListener("click", () => {

    showGalleryImage(
        currentGalleryIndex - 1
    );

});

}

/* Next button */

if (galleryNext) {

galleryNext.addEventListener("click", () => {

    showGalleryImage(
        currentGalleryIndex + 1
    );

});

}

/* Click outside image */

if (galleryLightbox) {

galleryLightbox.addEventListener(
    "click",
    event => {

        if (
            event.target === galleryLightbox
        ) {

            closeGallery();

        }

    }
);

}

/* =================================
GALLERY KEYBOARD CONTROLS
================================= */

document.addEventListener("keydown", event => {

if (
    !galleryLightbox ||
    !galleryLightbox.classList.contains("active")
) {
    return;
}


/* Escape */

if (event.key === "Escape") {

    closeGallery();

}


/* Next */

if (event.key === "ArrowRight") {

    showGalleryImage(
        currentGalleryIndex + 1
    );

}


/* Previous */

if (event.key === "ArrowLeft") {

    showGalleryImage(
        currentGalleryIndex - 1
    );

}

});

/* =================================
LETTER CINEMATIC REVEAL
================================= */

const letterSection =
document.querySelector(".letter-section");

if (letterSection) {

const letterObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    letterSection.classList.add(
                        "show"
                    );

                    letterObserver.unobserve(
                        letterSection
                    );

                }

            });

        },
        {
            threshold: 0.25
        }
    );


letterObserver.observe(
    letterSection
);

}

/* =================================
FINAL CINEMATIC ENDING
================================= */

const storyEnding =
document.querySelector(".story-ending");

if (storyEnding) {

const endingObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    storyEnding.classList.add(
                        "show"
                    );

                    endingObserver.unobserve(
                        storyEnding
                    );

                }

            });

        },
        {
            threshold: 0.25
        }
    );


endingObserver.observe(
    storyEnding
);

}

/* =================================
MOBILE MENU
================================= */

const menuButton =
document.querySelector(".menu-btn");

const navigation =
document.querySelector(".navbar nav");

if (menuButton && navigation) {

menuButton.addEventListener(
    "click",
    () => {

        navigation.classList.toggle(
            "mobile-active"
        );

    }
);


/* Close menu after clicking link */

navigation.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove(
            "mobile-active"
        );

    });

});

}

/* =================================
PAGE LOAD
================================= */

window.addEventListener("load", () => {

document.body.classList.add("loaded");

});