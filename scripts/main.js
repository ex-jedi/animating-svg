const tl = gsap.timeline({ repeat: -1, repeatDelay: .5, defaults: { duration: 1.5, scale: 'random(.1 , 1.5)', borderRadius: 'random(0 , 50%)' }});

tl.to('.one', { x: 100, backgroundColor: '#00f' })
  .to('.two', { x: 200, backgroundColor: '#e6f518', ease: 'ease' }, '+=1')
  .to('.three', { x: 300, backgroundColor: '#f00', ease: 'back' }, '-=1.5')
  .to('.four', { x: 400, backgroundColor: '#00ffdd', ease: 'bounce' })
  .to('.five', { x: 500, backgroundColor: '#745cdf', ease: 'elastic' })
  .to('.six', { x: 600, backgroundColor: '#9b23b9', ease: 'ease' })
  .addLabel('togetherness', '-=1')
  .to('.seven', { x: 700, backgroundColor: '#534b55', ease: 'back' }, 'togetherness')
  .to('.eight', { x: 800, backgroundColor: '#b4bd34', ease: 'bounce' }, 'togetherness')
  .to('.element', {x: 0, scale: 1, borderRadius: '50%', backgroundColor: '#e6f518'});
