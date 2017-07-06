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

  $('body').on('submit', '.edit_post', function(event) {
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
        // $('.modal').hide();
        // $('.modal-backdrop').remove();
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
});
