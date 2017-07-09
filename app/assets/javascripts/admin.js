$(document).ready(function() {
  $('body').on('click', '.new-post-admin', function(event) {
      event.preventDefault();
      $('#newpost_admin').modal('show');
    });

     $('body').on('click', '.new-user-admin', function(event) {
      event.preventDefault();
      $('#signup_admin').modal('show');
    });

     $('body').on('click', '.show-post-admin', function(event) {
      event.preventDefault();
      $('#show_post').modal('show');
    });

       $('body').on('click', '.show-user-admin', function(event) {
          event.preventDefault();
          $('#show_user').modal('show');
    });

   $('body').on('click', '.post-ajax', function(event) {
      event.preventDefault();
      $.ajax({
        url: '/admin/posts',
        type: 'get',
        dataType: 'html',
        data: {},
      })
      .done(function(response) {
        response=$(response).find('div.card');
        $('.ren_post').html(response);
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

    });

   $('body').on('click', '.user-ajax', function(event) {
      event.preventDefault();
      $.ajax({
        url: '/admin/users',
        type: 'get',
        dataType: 'html',
        data: {},
      })
      .done(function(response) {
        response=$(response).find('div.all-admin-user');
        $('.ren_post').html(response);
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

    });

      $('body').on('click', '.new-post-ajax', function(event) {
      event.preventDefault();
      $.ajax({
        url: '/admin/posts/new',
        type: 'get',
        dataType: 'html',
        data: {},
      })
      .done(function(response) {
        response=$(response).find('div.new-post-admin-ajax');
        $('.ren_post').html(response);
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

    });

      $('body').on('click', '.new-user-ajax', function(event) {
      event.preventDefault();
      $.ajax({
        url: '/admin/users/new',
        type: 'get',
        dataType: 'html',
        data: {},
      })
      .done(function(response) {
        response=$(response).find('div.new-user-admin-ajax');
        $('.ren_post').html(response);
        console.log("success");
      })
      .fail(function() {
        console.log("error");
      })
      .always(function() {
        console.log("complete");
      });

    });

       $('body').on('submit', '.admin-new-user', function(event)
         {
          event.preventDefault();
          var admin_new = $(this).attr('action');
          var params_admin_new = $(this).serialize();
          $.ajax({
            url: admin_new,
            method: 'post',
            dataType: 'json',
            data: params_admin_new,
          })
            .done(function(response) {
              if (response.status == 'success') {
                 sweetAlert('Signup successfully!');
                  location.href = '/admin';
              }
            })
            .fail(function() {
              sweetAlert('Signup successfully!');
              setTimeout(function(){

              },800);
      });
    });
      $('body').on('click', '.new_post', function(event)
         {
            event.preventDefault();
            var admin_new_post = $('.new_post').attr('action');
            var params_admin_new_post = $('.new_post').serialize();
            $.ajax({
              url: admin_new_post,
              method: 'post',
              dataType: 'json',
              data: params_admin_new_post,
            })
              .done(function(response) {
                if (response.status == 'success') {
                    $(this).closest('body').find(".feed-post-admin").prepend(response.html);
                    location.href ='/admin/posts';
                }
              })
              .fail(function() {
                sweetAlert('Signup successfully!');
                setTimeout(function(){
                  location.href = '/admin'
                },800);
      });
            });

       $('body').on('click','.admin-delete-user',function(event){
          event.preventDefault();
          var ok = $(this);
            $.ajax({
            type: ok.attr('data-method'),
            url: ok.attr('href'),
            data: {},
            dataType: 'json',
            success: function (response) {
                ok.closest('.li-user-admin').fadeOut('slow');
            },
            error: function (xhr, ajaxOptions, thrownError) {
              ok.closest('.li-user-admin').fadeOut('slow');
            },
            complete: function () {
            }
          });
            return false;
    });

});
