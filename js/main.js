/* eslint-disable func-names */
/* eslint-disable no-undef */

// Initialising ScrollMagic controller
const controller = new ScrollMagic.Controller();

const project = document.querySelectorAll('.project');
console.log(project);

project.forEach(function(elem) {
  // Build
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
