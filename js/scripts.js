$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#purrr").click(function() {
    $("ul#dog").prepend("<li>Grrr!</li>");
    $("ul#cat").prepend("<li>Prrr!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#stop").click(function() {
    $("ul#dog").prepend("<li>Hey, stop screaming!</li>");
    $("ul#cat").prepend("<li>Screetch!</li>");
    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
