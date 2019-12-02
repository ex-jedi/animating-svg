/* eslint-disable func-names */
/* eslint-disable no-undef */

// Initialising ScrollMagic controller
const controller = new ScrollMagic.Controller();

const ourScene = new ScrollMagic.Scene({
  triggerElement: '#project01 img',
  triggerHook: 0.8,
  reverse: false,
});
ourScene
  .setClassToggle('#project01', 'fade-in')
  .addIndicators({
    name: 'fade scene',
    colorTrigger: '#000',
    colorStart: '#0000aa',
    colorEnd: 'orange',
  }) //! Needs Plugin
  .addTo(controller);

//* Add .reverse(false) to prevent class toggling off.
