$(document).ready(function() {
  $("button#stop").after('<button class="btn btn-inverse" id="show-image">Call the Authorities</button>');
  $("button#show-image").click(function() {
    $("img.disappear").fadeToggle(200);
  });

  /*$("button#show-image").click(function() {
    $("div.row").before("<img src=\"img/dog2.jpg\" class=\"img-thumbnail\">").toggle();
    $("div.row").before("<img src=\"img/cat2.jpeg\" class=\"img-thumbnail\">").toggle();
  });*/

  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
    // $("ul#cat").children("li").first().click(function() {
    //   $(this).remove();
    // });
    // $("ul#dog").children("li").first().click(function() {
    //   $(this).remove();
    // });
    $("ul#cat").on("click", "li", function() {
      $(this).remove();
    });
    $("ul#dog").on("click", "li", function() {
      $(this).remove();
    });
  });

  $("button#purrr").click(function() {
    $("ul#dog").prepend("<li>Grrr!</li>");
    $("ul#cat").prepend("<li>Prrr!</li>");
    // $("ul#cat").children("li").first().click(function() {
    //   $(this).remove();
    // });
    // $("ul#dog").children("li").first().click(function() {
    //   $(this).remove();
    // });
    $("ul#cat").on("click", "li", function() {
      $(this).remove();
    });
    $("ul#dog").on("click", "li", function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#dog").prepend("<li>Hey, stop screaming!</li>");
    $("ul#cat").prepend("<li>Screetch!</li>");
    // $("ul#cat").children("li").first().click(function() {
    //   $(this).remove();
    // });
    // $("ul#dog").children("li").first().click(function() {
    //   $(this).remove();
    // });
    $("ul#cat").on("click", "li", function() {
      $(this).remove();
    });
    $("ul#dog").on("click", "li", function() {
      $(this).remove();
    });
  });
});
