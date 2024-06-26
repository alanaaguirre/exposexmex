document.addEventListener("DOMContentLoaded", function() {
    const scroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });

    // Animaciones con GSAP para elementos individuales
    gsap.from(".logo img", {
        duration: 1.5,
        scale: 0.5,
        opacity: 0,
        ease: "back.out(1.7)",
        delay: 0.5
    });

    gsap.from(".display-4", {
        duration: 1.5,
        y: -50,
        opacity: 0,
        ease: "power4.out",
        delay: 1
    });

    // gsap.from(".lead", {
    //     duration: 1.5,
    //     y: -50,
    //     opacity: 0,
    //     ease: "power4.out",
    //     delay: 1.2
    // });

    gsap.from(".btn", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 1.4
    });

    // Animación del fondo con GSAP
    gsap.from(".hero", {
        duration: 2,
        backgroundPosition: "100% 50%",
        ease: "power1.inOut",
        repeat: -1, // Repetir la animación
        yoyo: true // Hacer que la animación se revierta
    });

    // Actualizar Locomotive Scroll después de las animaciones de entrada
    gsap.delayedCall(2, () => {
        scroll.update();
    });
});
