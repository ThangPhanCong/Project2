jQuery(document).ready(function($) {
  $('body').on('click', '.btn_login', function(event) {
    event.preventDefault();
    $('#login').modal('show');
  });

  $('body').on('click', '.btn_signup', function(event) {
    event.preventDefault();
    $('#signup').modal('show');
  });
});
