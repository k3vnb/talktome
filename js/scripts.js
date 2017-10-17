$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").prepend("<li>Meow!</li>");
  });

  $("button#purrr").click(function() {
    $("ul#dog").prepend("<li>Grrr!</li>");
    $("ul#cat").prepend("<li>Prrr!</li>");
  });

  $("button#stop").click(function() {
    $("ul#dog").prepend("<li>Hey, stop screaming!</li>");
    $("ul#cat").prepend("<li>Screetch!</li>");
  });
});
