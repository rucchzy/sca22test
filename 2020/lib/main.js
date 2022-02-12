'use strict';

document.addEventListener('DOMContentLoaded', function () {

  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach(function (el) {
      el.addEventListener('click', function () {

        // Get the target from the "data-target" attribute
        var target = el.dataset.target;
        var $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // Get all "navbar-burger" elements
  var $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item'), 0);

  // Check if there are any navbar items
  if ($navbarItems.length > 0) {
    // Add a click event on each of them
    $navbarItems.forEach(function (el) {
      el.addEventListener('click', function () {
        var $target = el.closest('.navbar-menu');
        $target.classList.remove('is-active');
        $navbarBurgers.forEach(function (burg) {
          burg.classList.remove('is-active');
        });
      });
    });
  }

  var $tabs = Array.prototype.slice.call(document.querySelectorAll('.tabs'), 0);
  $tabs.forEach(function (el) {
    var buttonsBox = el;
    var contentsBox = document.getElementById(el.dataset.contents);
    buttonsBox.querySelectorAll('li').forEach(function (button) {
      return button.addEventListener('click', function () {
        buttonsBox.querySelectorAll('li').forEach(function (button2) {
          return button2.classList.remove('is-active');
        });
        contentsBox.querySelectorAll('.tab').forEach(function (tab) {
          return tab.style.display = 'none';
        });
        button.classList.add('is-active');
        document.getElementById(button.dataset.target).style.display = 'block';
      });
    });
    buttonsBox.querySelector('.is-active').click();
  });
});