$(document).ready(() => {

  $('.header__navbar__button').on('click', function () {
    $(this).toggleClass('header__navbar__button--active');
    $('.header__navbar__list')
      .stop(true, true)
      .slideToggle(500);
  });

});
