jQuery(document).ready(function() {
 $('body').on('submit', '.new_comment', function(event) {
   event.preventDefault();
   var comment = $(this);
    var params_comment = $(this).serialize();
    $.ajax({
      url: $(this).attr('action'),
      type: 'post',
      dataType: 'json',
      data: params_comment,
    })
    .done(function(response) {
      if (response.status == 'success') {
        comment.closest('.feed-post').find('#comments').append(response.html);
        comment.closest('.feed-post').find('.comment-field').val('');
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    return false;
 });

  $('body').on('click', '.deletes_comment', function(event) {
     event.preventDefault();
     var remove_comment = $(this);
     $.ajax({
       url: remove_comment.attr('href'),
       type: remove_comment.attr('data-method'),
       dataType: 'json',
       data: {},
     })
     .done(function() {
      remove_comment.closest('.each-comment').slideUp('fast');
     })
     .fail(function() {
     })
     .always(function() {
       console.log("complete");
     });
     return false;
   });

  $('body').on('click', '.edit-comments', function(event) {
    event.preventDefault();
    var form_edit = $(this).parent().next();
    console.log(form_edit);
    form_edit.slideToggle();
    //return false;
  });

  $('body').on('submit', '.edit_comment', function(event) {
    event.preventDefault();
    var edit_post_comment = $(this);
    var params_edit = edit_post_comment.serialize();
    $.ajax({
      url: edit_post_comment.attr('action'),
      type: 'put',
      dataType: 'json',
      data: params_edit,
    })
    .done(function(response) {
      if (response.status == 'success') {
        toastr["success"]("Update comment successfully!")
        edit_post_comment.closest('.each-comment').find('.comment-content').text(response.content);
        edit_post_comment.hide('slow');
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    return false;
  });
});
