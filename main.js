/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-var */
/* eslint-disable func-names */
$(document).ready(function() {
  $('.main').on('click', function() {
    let magLine = $(this).find('.magnifier line');
    var mainInput = $(this).find('input');

    if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      magLine.attr('x2', 33.1);
      mainInput.blur();
      mainInput.val('');
    } else {
      $(this).addClass('open');
      magLine.attr('x2', 300);
      mainInput.focus();
    }
  });
});
