/* eslint-disable func-names */
/* eslint-disable no-undef */

// Initialising ScrollMagic controller
const controller = new ScrollMagic.Controller();

const pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '#intro',
  triggerHook: 0,
  duration: '30%',
})
  .setPin('#intro', { pushFollowers: false })
  .addIndicators({
    name: 'pin',
    colorTrigger: '#000',
  })
  .addTo(controller);

const pinIntroScene2 = new ScrollMagic.Scene({
  triggerElement: '#project01',
  triggerHook: 0.4,
})
  .setPin('#intro', { pushFollowers: false })
  .addIndicators({
    name: 'pin two',
    colorTrigger: '#000',
  })
  .addTo(controller);

const project = document.querySelectorAll('.project');
project.forEach(function(elem) {
  // Build Scene
  const ourScene = new ScrollMagic.Scene({
    triggerElement: elem.children[0],
    triggerHook: 0.8,
  });
  ourScene
    .setClassToggle(elem, 'fade-in')
    .addIndicators({
      name: 'fade scene',
      colorTrigger: '#000',
      colorStart: '#0000aa',
      colorEnd: 'orange',
    })
    .addTo(controller);
});

//* Add .reverse(false) to prevent class toggling off.
