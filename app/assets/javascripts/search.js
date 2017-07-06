jQuery(document).ready(function() {
  $('.search-box1').on('keyup', function() {
      var key_name = $(this).val();
      $.ajax({
        url: '/searches',
        type: 'get',
        dataType: 'json',
        data: {title: key_name},
      })
      .done(function(data) {
        $('.user-table').html(data.search_result);
        $('#search').modal('show');
      })
      return false;
  })
})
