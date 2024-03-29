/* globals $ window document */

export function correctHeight() {
  const pageWrapper = $('#page-wrapper');
  const navbarHeight = $('nav.navbar-default').height();
  const wrapperHeight = pageWrapper.height();

  if (navbarHeight > wrapperHeight) {
    pageWrapper.css('min-height', navbarHeight + 'px');
  }

  if (navbarHeight < wrapperHeight) {
    if (navbarHeight < $(window).height()) {
      pageWrapper.css('min-height', $(window).height() + 'px');
    } else {
      pageWrapper.css('min-height', navbarHeight + 'px');
    }
  }

  if ($('body').hasClass('fixed-nav')) {
    if (navbarHeight > wrapperHeight) {
      pageWrapper.css('min-height', navbarHeight + 'px');
    } else {
      pageWrapper.css('min-height', $(window).height() - 60 + 'px');
    }
  }
}

export function detectBody() {
  if ($(document).width() < 769) {
    $('body').addClass('body-small');
  } else {
    $('body').removeClass('body-small');
  }
}

export function smoothlyMenu() {
  if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
        // Hide menu in order to smoothly turn on when maximize menu
    $('#side-menu').hide();
        // For smoothly turn on menu
    setTimeout(
            () => {
              $('#side-menu').fadeIn(400);
            }, 200);
  } else if ($('body').hasClass('fixed-sidebar')) {
    $('#side-menu').hide();
    setTimeout(
            () => {
              $('#side-menu').fadeIn(400);
            }, 100);
  } else {
        // Remove all inline style from jquery fadeIn function to reset menu state
    $('#side-menu').removeAttr('style');
  }
}
