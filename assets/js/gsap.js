

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({

  // ✅ Desktop: screen width > 700px
  "(min-width: 701px)": function () {


    gsap.to('.element', {
      y: '-100vh',
      scrollTrigger: {
        trigger: '.element',
        pin: true,
        scrub: true,
      },
    });
    


    // SEA
    gsap.to(".hero-section-sea", {
      y: -250,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('#sea-text-content', { y: -60 }, {
      y: -750,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#sea-tree-image', { y: -10 }, {
      y: -1100,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // CITY
    gsap.to(".hero-section-city", {
      y: -650,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('.hero-section-city-content', { y: 200 }, {
      y: -400,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#hero-section-city-img', { y: 300 }, {
      y: -600,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });


    

    
    
    // MOUNTAIN
    gsap.to(".hero-section-moun", {
      y: -950,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('.hero-section-moun-content', { y: 260 }, {
      y: -300,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#hero-section-moun-img', { y: 600 }, {
      y: -300,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });


     // MOUNTAIN
     gsap.to(".hero-section-safari", {
      y: -1250,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    
  

    gsap.fromTo('.hero-section-safari-content', { y: 360 }, {
      y: -200,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#hero-section-safari-img', { y: 2500 }, {
      y: -600,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });


    
       // MOUNTAIN
       gsap.to(".hero-section-footer", {
        y: -1400,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });


  },


  

  // ✅ Mobile: screen width <= 700px
  "(max-width: 700px)": function () {

    // SEA
    gsap.to(".hero-section-sea", {
      y: -120,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('#sea-text-content', { y: -30 }, {
      y: -350,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#sea-tree-image', { y: -5 }, {
      y: -550,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // CITY
    gsap.to(".hero-section-city", {
      y: -300,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('.hero-section-city-content', { y: 200 }, {
      y: -500,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#hero-section-city-img', { y: 150 }, {
      y: -300,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // MOUNTAIN
    gsap.to(".hero-section-moun", {
      y: -500,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('.hero-section-moun-content', { y: 700 }, {
      y: -500,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#hero-section-moun-img', { y: 400 }, {
      y: -300,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    // SAFARI
    gsap.to(".hero-section-safari", {
      y: -600,
      ease: "power1.out",
      scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    gsap.fromTo('.hero-section-safari-content', { y: 2000 }, {
      y: -500,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

    gsap.fromTo('#hero-section-safari-img', { y: 1200 }, {
      y: -300,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
      },
    });

  }

});
