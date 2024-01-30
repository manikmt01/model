$(window).on('load', function () {
  $('#preloader').fadeOut('slow');
});
$(document).ready(function () {
  $('.nav-item').click(function () {
    // reset active class
    $('.nav-item').removeClass('active');
    // add active class to selected
    $(this).addClass('active');
    // return needed to make function work
    return false;
  });

  $(function () {
    // create an empty variable
    var selectedClass = '';
    // call function when item is clicked
    $('.nav-item').click(function () {
      // assigns class to selected item
      selectedClass = $(this).attr('data-rel');
      // fades out all portfolio items
      $('.portfolio li').fadeOut(300);
      // fades in selected category
      $('.portfolio li.' + selectedClass)
        .delay(300)
        .fadeIn(300);
    });
  });
}); // document ready

// mousemove
$(document).ready(function () {
  $('body').on('mousemove', function (n) {
    a.css({ left: n.clientX + 'px' });
    a.css({ top: n.clientY + 'px' });
    b.css({ left: n.clientX + 'px' });
    b.css({ top: n.clientY + 'px' });
    c.css({ left: n.clientX + 'px' });
    c.css({ top: n.clientY + 'px' });
  });

  var a = $('#cursor'),
    b = $('#cursor2'),
    c = $('#cursor3');

  function n(t) {
    b.addClass('hover');
    c.addClass('hover');
  }

  function s(t) {
    b.removeClass('hover');
    c.removeClass('hover');
  }

  s();

  $('.hover-target').on('mouseover', n);
  $('.hover-target').on('mouseout', s);
});
