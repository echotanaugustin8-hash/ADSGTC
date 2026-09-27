/* =========================================================
   AUGUSTIN DIGITAL STUDIO
   Main JavaScript
   ========================================================= */


/* =========================
   MOBILE MENU
   ========================= */

const menuButton = document.getElementById("menuButton");
const navbar = document.querySelector(".navbar");

if (menuButton && navbar) {

    menuButton.addEventListener("click", () => {

        navbar.classList.toggle("active");

        if (navbar.classList.contains("active")) {
            menuButton.textContent = "✕";
        } else {
            menuButton.textContent = "☰";
        }

    });

}


/* =========================
   CLOSE MOBILE MENU
   AFTER CLICKING A LINK
   ========================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

        if (menuButton) {
            menuButton.textContent = "☰";
        }

    });

});


/* =========================
   SCROLL REVEAL
   ========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .portfolio-card, .process-step, .about-content, .about-visual, .contact-info, .contact-form"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    revealObserver.observe(element);

});


/* =========================
   CONTACT FORM
   ========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const service =
            document.getElementById("service").value;

        const message =
            document.getElementById("message").value.trim();


        /* Check required fields */

        if (!name || !email || !service || !message) {

            formMessage.textContent =
                "Please complete all required fields.";

            formMessage.style.color = "#d93025";

            return;
        }


        /* Simple email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            formMessage.textContent =
                "Please enter a valid email address.";

            formMessage.style.color = "#d93025";

            return;
        }


        /* Success message */

        formMessage.textContent =
            "Thank you! Your project request has been prepared successfully.";

        formMessage.style.color = "#14804a";


        /*
        IMPORTANT:

        At this stage the form does NOT send
        an email to you.

        Later we will connect it to a real
        email service or backend.
        */


        contactForm.reset();

    });

}


/* =========================
   CURRENT YEAR
   ========================= */

const yearElements =
    document.querySelectorAll(".current-year");

const currentYear =
    new Date().getFullYear();

yearElements.forEach(element => {

    element.textContent = currentYear;

});


/* =========================
   ACTIVE NAVIGATION
   ========================= */

const sections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navigationLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (href === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* =========================
   HEADER SHADOW ON SCROLL
   ========================= */

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 20) {

        header.style.boxShadow =
            "0 8px 30px rgba(17, 24, 39, 0.06)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================
   SMOOTH PROJECT CTA
   ========================= */

const projectButtons =
    document.querySelectorAll(
        'a[href="#contact"]'
    );

projectButtons.forEach(button => {

    button.addEventListener("click", () => {

        const contactSection =
            document.getElementById("contact");

        if (contactSection) {

            contactSection.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


/* =========================
   CONSOLE MESSAGE
   ========================= */

console.log(
    "Augustin Digital Studio — Website loaded successfully."
);