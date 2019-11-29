gsap.to('.element', {
  duration: 1,
  backgroundColor: '#00f',
  opacity: 0,
  stagger: () => Math.random(),
  ease: 'ease',
});
