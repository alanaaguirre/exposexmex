document.addEventListener("DOMContentLoaded", function() {
    // Inicialización de SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        speedAsDuration: true
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

    gsap.from(".btn", {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: "power4.out",
        delay: 1.4
    });

    // Configuración de ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Animaciones para las tarjetas de talento (por filas)
    document.querySelectorAll('.row').forEach(row => {
        gsap.from(row.children, {
            scrollTrigger: {
                trigger: row,
                start: 'top 80%',
                end: 'top 50%',
                toggleActions: 'play none none none', // Reproducir una vez y no ocultar de nuevo
            },
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out',
            stagger: 0.2 // Añade un retraso entre cada elemento en la fila
        });
    });

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});
