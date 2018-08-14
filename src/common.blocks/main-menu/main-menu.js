/* eslint-disable */
(function() {
  var buttonToggle = document.querySelector('.button-toggle');
  var mainNav = document.querySelector('.main-nav');

  buttonToggle.addEventListener('click', function(evt) {
    evt.preventDefault();

    if (mainNav.classList.contains('main-nav_closed')) {
      mainNav.classList.remove('main-nav_closed');
      mainNav.classList.add('main-nav_opened');
    } else {
      mainNav.classList.remove('main-nav_opened');
      mainNav.classList.add('main-nav_closed');
    }
  });
})();
