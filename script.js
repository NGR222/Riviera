
gsap.set(".slide-1", { autoAlpha: 1 });
gsap.set(".slide-2", { autoAlpha: 0 }); // используем autoAlpha = opacity + visibility
gsap.set(".slide-3", { autoAlpha: 0 });

gsap.set(".logo--main", { y: 20, autoAlpha: 0 });
gsap.set(".title", { y: 20, autoAlpha: 0 });
gsap.set(".btn", { scale: 0.95, autoAlpha: 0 });

gsap.set(".photo", { autoAlpha: 0, objectPosition: "50% 100%" });
gsap.set(".photo-gradient", { autoAlpha: 0 });

gsap.set(".logo--final", { y: 20, autoAlpha: 0 });
gsap.set(".secondLogo", { y: 10, autoAlpha: 0 });
gsap.set(".disclaimer", { y: 10, autoAlpha: 0 });


const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.3 });


// ======================
// SLIDE 1 — плавный вход
// ======================

tl.to([".logo--main", ".title", ".btn"], {
  y: 0,
  autoAlpha: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power1.out"
});

tl.to({}, { duration: 1.6 }); 


// ======================
// SLIDE 1 → SLIDE 2 — мягкий кроссфейд
// ======================

tl.to(".slide-2", {
  autoAlpha: 1,
  duration: 0.8,
  ease: "power1.inOut"
}, "-=1.2"); 

tl.to(".slide-1", {
  autoAlpha: 0,
  duration: 1.2,
  ease: "power2.in"
}, "-=1.2");

// ======================
// SLIDE 2 — анимация фото
// ======================

tl.set(".photo", {
  autoAlpha: 0
});

tl.to(".photo", {
  autoAlpha: 1,
  duration: 1.2,
  ease: "power2.in"
}, "-=0.2");


tl.to(".photo-gradient", {
  autoAlpha: 1,
  duration: 1.4,
  ease: "power2.out"
}, "<");

tl.to(".photo", {
  objectPosition: "50% 15%",
  duration: 3,
  ease: "sine.inOut"
}, "-=1");

tl.to({}, { duration: 1})

tl.to(".photo", {
  objectPosition: "50% 100%",
  duration: 3,
  ease: "sine.inOut"
});

tl.to({}, { duration: 1.6 })


// ======================
// SLIDE 2 → SLIDE 3 — мягкий кроссфейд
// ======================

tl.to(".slide-3", {
  autoAlpha: 1,
  duration: 0.8,
  ease: "power1.inOut"
}, "-=1.8"); 

tl.to(".slide-2", {
  autoAlpha: 0,
  duration: 1.2,
  ease: "power2.in"
}, "-=1");


// ======================
// SLIDE 3 — плавный вход элементов
// ======================

tl.to([".logo--final", ".secondLogo", ".disclaimer", ".underline"], {
  y: 0,
  autoAlpha: 1,
  duration: 1,
  stagger: 0.1,
  ease: "power2.out"
});

tl.to({}, { duration: 1 });

 tl.to(
  [".logo--final", ".secondLogo", ".disclaimer", ".underline"],
  {
    opacity: 0,
    y: -8,
    duration: 0.8,
    ease: "sine.in",
  }
);

tl.to(".slide-3", {
  autoAlpha: 0,
  duration: 0.4,
  ease: "power2.in",
}, "<");
