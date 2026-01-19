gsap.set(".slide-1", { opacity: 1 });
gsap.set(".slide-2", { opacity: 1 });
gsap.set(".slide-3", { opacity: 0 });

gsap.set(".logo--main", {
  opacity: 0,
  y: 10,
});

gsap.set(".logo--final", {
  opacity: 0,
  y: 10,
});
gsap.set(".title", { opacity: 0, y: 20 });
gsap.set(".btn", { opacity: 0, scale: 0.95 });

gsap.set(".photo", {
  xPercent: 120,
  objectPosition: "0% 100%",
});

gsap.set(".photo-gradient", {
  opacity: 0,
});

const tl = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

tl.to(".logo--main", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
});

tl.to(
  ".title",
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
  },
  "-=0.3",
);

tl.to(
  ".btn",
  {
    opacity: 1,
    scale: 1,
    duration: 0.6,
    ease: "power2.out",
  },
  "-=0.4",
);

tl.to({}, { duration: 1.2 });

tl.to(".photo", {
  xPercent: 0,
  duration: 1.2,
  ease: "power3.out",
});

tl.to(
  ".photo-gradient",
  {
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
  },
  "<",
);

tl.to(
  ".logo--main",
  {
    opacity: 0,
    y: -5,
    duration: 0.4,
    ease: "power2.in",
  },
  "<",
);

tl.to(
  [".title", ".btn"],
  {
    opacity: 0,
    y: -10,
    filter: "blur(4px)",
    duration: 0.6,
    ease: "power2.in",
  },
  "-=1",
);

tl.to(".photo", {
  duration: 0.8,
  ease: "power2.out",
});

tl.to(".photo", {
  duration: 2,
  ease: "sine.inOut",
  objectPosition: "0% 12%",
});

tl.to({}, { duration: 0.8 });

tl.to(".photo", {
  xPercent: -120,
  scale: 1.05,
  duration: 0.8,
  ease: "power2.in",
  opacity: 0,
});

tl.to(
  ".slide-3",
  {
    opacity: 1,
    ease: "power2.out",
  },
  "-=1.1",
);

tl.to(
  ".logo--final",
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: "power2.out",
  },
  "<",
);

tl.from(".secondLogo", {
  opacity: 0,
  y: 10,
  duration: 0.6,
  ease: "power2.out",
});

tl.from(".disclaimer", {
  opacity: 0,
  y: 5,
  duration: 0.6,
  ease: "power2.out",
});

tl.to({}, { duration: 1.2 });

tl.to([".logo--final", ".secondLogo", ".disclaimer"], {
  opacity: 0,
  y: -10,
  duration: 0.8,
  ease: "power2.in",
});

tl.to(
  ".slide-3",
  {
    opacity: 0,
    duration: 0.4,
    ease: "power2.in",
  },
  "-=0.4",
);

tl.set(".slide-3", { opacity: 0 });
tl.set(".photo", { xPercent: 120 });
