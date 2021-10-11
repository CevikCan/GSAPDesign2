gsap.registerPlugin(ScrollTrigger);

gsap.to(".bg-image .bg-parallax",{
    duration : 2,
    opacity : 0.25,
    left : "45%",
    transform : "translateX(0)",
    transform : "scale(1.3)",
    top : "200px",
    scrollTrigger : {
        trigger : ".info",       
        start : "top 600px",
        end : "bottom",
        toggleActions : "play none none reverse",
        scrub : 1
        // markers : true,
        // scrub : 3
        
    }
})