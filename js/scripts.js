$(document).ready(function () {
  $("#mycarousel").carousel({ interval: 500 });
  $("#carouselbutton").click(function () {
    if ($("#carouselbutton").children("span").hasClass("fa-pause")) {
      $("#mycarousel").carousel("pause");
      $("#carouselbutton").children("span").removeClass("fa-pause");
      $("#carouselbutton").children("span").addClass("fa-play");
    } else if ($("#carouselbutton").children("span").hasClass("fa-play")) {
      $("#mycarousel").carousel("cycle");
      $("#carouselbutton").children("span").removeClass("fa-play");
      $("#carouselbutton").children("span").addClass("fa-pause");
    }
  });

  $("#resbtn").click(function () {
    $("#resmod").modal("show");
  });
  $("#canbtn").click(function () {
    $("#resmod").modal("hide");
  });
});
