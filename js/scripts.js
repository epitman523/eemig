'use strict'
$('.js-menuBtn').on('click', function () {
    $('#myNav').addClass('show').removeClass('hide');
});
$('.closebtn').on('click', function () {
    $('#myNav').addClass('hide').removeClass('show');
});