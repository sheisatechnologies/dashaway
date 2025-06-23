gsap.registerPlugin(ScrollTrigger);

// Sea Background Parallax
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



gsap.fromTo('#sea-text-content',
  { y: -60 },            // 👈 START position (element will start 100px down)
  {
    y: -750,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);



gsap.fromTo('#sea-tree-image',
  { y: -10 },            // 👈 START position (element will start 100px down)
  {
    y: -1100,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);







// ------------------------------------------------------------



// City Background Parallax
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




gsap.fromTo('.hero-section-city-content',
  { y: 400 },            // 👈 START position (element will start 100px down)
  {
    y: -1050,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);



gsap.fromTo('#hero-section-city-img',
  { y: 300 },            // 👈 START position (element will start 100px down)
  {
    y: -600,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);



// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------


// Mountain Background Parallax
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



gsap.fromTo('.hero-section-moun-content',
  { y: 1400 },            // 👈 START position (element will start 100px down)
  {
    y: -1050,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);



gsap.fromTo('#hero-section-moun-img',
  { y: 800 },            // 👈 START position (element will start 100px down)
  {
    y: -600,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);







// Safari Background Parallax
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

gsap.fromTo('.hero-section-safari-content',
  { y: 4500 },            // 👈 START position (element will start 100px down)
  {
    y: -1050,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);



gsap.fromTo('#hero-section-safari-img',
  { y: 2500 },            // 👈 START position (element will start 100px down)
  {
    y: -600,
    ease: 'power1.out',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  }
);