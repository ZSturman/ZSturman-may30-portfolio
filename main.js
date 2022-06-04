gsap.registerPlugin(ScrollTrigger);

gsap.from(".home", {
    scrollTrigger: {
        trigger: ".home",
        toggleClass: {targets: ".scroll-circle-home", className: "selected"},
        start: "top 50%",
        end: "bottom 50%",
        /* markers: true */
    },
});
gsap.from(".projects", {
    scrollTrigger: {
        trigger: ".projects",
        toggleClass: {targets: ".scroll-circle-projects", className: "selected"},
        start: "top 50%",
        end: "bottom 50%",
        /* markers: true */
    },
});
gsap.from(".skills", {
    scrollTrigger: {
        trigger: ".skills",
        toggleClass: {targets: ".scroll-circle-skills", className: "selected"},
        start: "top 50%",
        end: "bottom 50%",
       /*  markers: true */
    },
});
gsap.from(".contact", {
    scrollTrigger: {
        trigger: ".contact",
        toggleClass: {targets: ".scroll-circle-contact", className: "selected"},
        start: "top 50%",
        end: "bottom 50%",
        /* markers: true */
    },
});







