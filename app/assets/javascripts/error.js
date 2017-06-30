$(document).ready(function($) {
  $('body').on('click', '#btn-signin', function(event) {
    event.preventDefault();
    var ok = $('#new_user').attr('action');
    var params = $('#new_user').serialize();
    $.ajax({
      url: ok,
      method: 'post',
      dataType: 'json',
      data: params,
    })
      .done(function(response) {
        if (response.status == 'error') {
          sweetAlert('Invalid password or email!');
        }
      })
      .fail(function() {
        location.href = '/';
      });
  });
  $('body').on('click', '#sub-signup', function(event) {
    event.preventDefault();
    var tet = $('#f-signup').attr('action');
    var params1 = $('#f-signup').serialize();
    $.ajax({
      url: tet,
      method: 'post',
      dataType: 'json',
      data: params1,
    })
      .done(function(response) {
        if (response.status == 'error1') {
          sweetAlert('Please complete all information!');
        }
      })
      .fail(function() {
        sweetAlert('Signup successfully! You can login!');
        setTimeout(function(){
          $('#signup').modal('hide');
          $('#login').modal('show');
        },800);
      });
  });
});
