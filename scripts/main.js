gsap.to('.element', {
  duration: 1,
  opacity: 1,
  delay: 1,
  stagger: () => Math.random() * 1,
  ease: 'ease',
});
