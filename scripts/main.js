gsap.to('.element', {
  duration: 3,
  backgroundColor: '#00f',
  opacity: 1,
  delay: 0.5,
  stagger: () => Math.random() * 1,
  ease: 'ease',
});
