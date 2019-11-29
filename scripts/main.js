gsap.to('.element', {
  duration: 3,
  backgroundColor: '#00f',
  opacity: 1,
  delay: 2,
  stagger: () => Math.random(),
  ease: 'ease',
});
