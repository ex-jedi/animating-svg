$(document).ready(function() {
  $('.main').on('click', function() {
    var magLine = $(this).find('.magnifier line'),
      mainInput = $(this).find('input');

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
