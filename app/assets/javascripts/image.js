jQuery(document).ready(function($) {
    var modal = document.getElementById('myModal');
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    $('body').on('click', '.post-content p img', function(event) {
      event.preventDefault();
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    });
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
      modal.style.display = "none";
    }
   $('body').on('click', '.close', function(event) {
      event.preventDefault();
      document.getElementById("myModal").style.display='none';
    });
  });
