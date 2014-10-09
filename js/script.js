$(document).ready(function() {
  $('img.title-logo').hover(
    function(){
      $(this).attr('src','images/ninja.jpg')
    },
    function(){
      $(this).attr('src','//placepuppy.it/100/100')
    }
)
});
