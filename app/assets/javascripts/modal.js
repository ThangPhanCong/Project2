jQuery(document).ready(function($) {
  $('body').on('click', '.btn_login', function(event) {
    event.preventDefault();
    $('#login').modal('show');
  });

  $('body').on('click', '.btn_signup', function(event) {
    event.preventDefault();
    $('#signup').modal('show');
  });

  $('body').on('click', '#status', function(event) {
    event.preventDefault();
    $('#newpost').modal('show');
  });

   $('body').on('click', '.edit-post', function(event) {
    event.preventDefault();
    $('#' + 'modal-edit-post-' + $(this).attr('id')).modal('show');
  });

  $('body').on('submit', '.edit-ajax', function(event) {
    event.preventDefault();
    var self = $(this);
    var params = $(this).serialize();
    $.ajax({
      url: self.attr('action'),
      type: 'put',
      dataType: 'json',
      data: params,
    })
    .done(function(response) {
      if (response.status == "success") {
        self.closest('.feed-post').find('.post-title').text(response.title);
        self.closest('.feed-post').find('.post-content').text(response.content);
        $(":submit").removeAttr("disabled");
      }
    })
    .fail(function() {
      sweetAlert('Title is error!')
    })
    .always(function() {
      console.log("complete");
    });
    return false;
  });

  $('body').on('submit', '.edit_user', function(event) {
    event.preventDefault();
    var self = $(this);
    var formData = new FormData();
    console.log($('.edit_user #user_avatar'));
    formData.append('user[avatar]', $('.edit_user #user_avatar')[0].files[0]);
    formData.append('user[name]', $('.edit_user #user_name').val());
    formData.append('user[email]', $('.edit_user #user_email').val());

    $.ajax({
      url: self.attr('action'),
      data: formData,
      cache: false,
      contentType: false,
      processData: false,
      type: 'PUT'
    })
    .done(function(response) {
      if (response.status == 'success') {
        sweetAlert("Update successfully!");
        $('#edituser').modal('hide');
      }
    })
    .fail(function() {
      sweetAlert("Update successfully!");
      $('#edituser').modal('hide');
    })
    .always(function() {
      console.log("complete");
    });

  });
});
