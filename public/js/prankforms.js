$(document).ready(function() {
  console.log("Hello Pranksters!");

    $("#btn-click").click(function(e) {
    $(".name").empty().append($("input.name").val());
    $(".product").empty().append($("input.product").val());
    $(".quantity").empty().append($("input.quantity").val());
    $(".date").empty().append($("input.date").val());

});

});

