// Infinity scroll
var box = 2;
$(window).scroll(function() {
  if ($(window).scrollTop() === $(document).height() - $(window).height()) {
    console.log(++box);
    $("#container").append("<div class='box one'>box" + box + "</h1></div>");
    $("#container").append("<div class='box two'>box" + box + "</h1></div>");
    $("#container").append("<div class='box three'>box" + box + "</h1></div>");
    $("#container").append("<div class='box two'>box" + box + "</h1></div>");
    $("#container").append("<div class='box five'>box" + box + "</h1></div>");
    $("#container").append("<div class='box one'>box" + box + "</h1></div>");
    $("#container").append("<div class='box two'>box" + box + "</h1></div>");
    $("#container").append("<div class='box six'>box" + box + "</h1></div>");
  }
  // } else{
  //   $(window).unbind("#container");
  // }
});

//Click event for register modal
$(document).ready(function() {
  $("#register").on("click", function() {
    $(".bg-modal").css("display", "block");
  });
  $(".close").click(function() {
    $(".bg-modal").css("display", "none");
  });
});
//Click event for login modal
$(document).ready(function() {
  $("#login").on("click", function() {
    $(".modal").css("display", "block");
  });
  $(".close").click(function() {
    $(".modal").css("display", "none");
  });
});


$("#uploadButton").on("click", function () {
  event.preventDefault();
  ("#uploadModal").trigger('focus')
});

$(".jumbotron").on(hover, function () {
  $("#updateButton").show();
  member.username.show();
  member.bio.show();
  member.species.show();
  member.breed.show();
}, 
function () {
  member.username.hide();
  member.bio.hide();
  member.species.hide();
  member.breed.hide();
});

// ====================================================
// Front end logic for uploading pictures on dashboard.ejs
var image = $("#image").val().trim();

// $("#submit-photo").on("click", function {
//  image.append("this");
// });