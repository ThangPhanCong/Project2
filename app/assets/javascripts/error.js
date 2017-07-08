$(document).ready(function($) {
  $('body').on('click', '#btn-signin', function(event) {
    event.preventDefault();
    var url = $('#new_user').attr('action');
    var params = $('#new_user').serialize();
    $.ajax({
      url: url,
      method: 'post',
      dataType: 'json',
      data: params,
    })
      .done(function(response) {
        if (response.status == 'error') {
          sweetAlert(I18n.t('error.alert.invalid'));
        }
      })
      .fail(function() {
        location.href = '/';
      });
  });
  $('body').on('click', '#sub-signup', function(event) {
    event.preventDefault();
    var signup_url = $('#f-signup').attr('action');
    var params_signup = $('#f-signup').serialize();
    $.ajax({
      url: signup_url,
      method: 'post',
      dataType: 'json',
      data: params_signup,
    })
      .done(function(response) {
        if (response.status == 'error1') {
          sweetAlert(I18n.t('error.alert.please'));
        }
      })
      .fail(function() {
        sweetAlert(I18n.t('error.alert.success'));
        setTimeout(function(){
          $('#signup').modal('hide');
          $('#login').modal('show');
        }, 800);
      });
  });
});
