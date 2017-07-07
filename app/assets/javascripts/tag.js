$(document).ready(function() {
  $('body').on('keyup', '#post_all_tags', function(event) {
    event.preventDefault();
    var input_tag = $('#post_all_tags').val();
    for (var i = 0; i < input_tag.length; i++) {
      if( input_tag[i]== ','){
        $('.badge').text(input_tag);

        }
    }
  });

});
