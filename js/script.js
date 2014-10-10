var swap_image = function(image, original, replacement) {
  $(image).hover(function() {
    $(this).attr("src", replacement)
  },
  function() {
    $(this).attr("src", original)
  }
)};

$(document).ready(function() {
  swap_image("img.title-img","images/profile_pic.jpg","images/ninja.jpg");
});
