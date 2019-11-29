const tl = gsap.timeline({ repeat: -1, yoyo: true, repeatDelay: 1, defaults: { duration: 2, scale: 'random(.5 , 2)', borderRadius: 'random(0 , 50%)' }});

tl.to('.one', { x: 100, backgroundColor: '#00f' });
tl.to('.two', { x: 200, backgroundColor: '#e6f518', ease: 'ease' }, '+=1');
tl.to('.three', { x: 300, backgroundColor: '#f00', ease: 'back' }, '-=1.5');
tl.to('.four', { x: 400, backgroundColor: '#00ffdd', ease: 'bounce' });
tl.to('.five', { x: 500, backgroundColor: '#745cdf', ease: 'elastic' });
tl.to('.six', { x: 600, backgroundColor: '#9b23b9', ease: 'ease' });
tl.addLabel('togetherness');
tl.to('.seven', { x: 700, backgroundColor: '#534b55', ease: 'back' }, 'togetherness');
tl.to('.eight', { x: 800, backgroundColor: '#b4bd34', ease: 'bounce' }, 'togetherness');
