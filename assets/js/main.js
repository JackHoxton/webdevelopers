$(document).ready(() => {

  $('.header-navbar__button').on('click', function () {
    $(this).toggleClass('header-navbar__button--active');
    $('.header-navbar__list')
      .stop(true, true)
      .slideToggle(500);
  });

});
