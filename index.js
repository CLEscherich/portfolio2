$(document).ready(() => {
  $("a").on("click", function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("body,html").animate(
        {
          scrollTop: $(hash).offset().top
        },
        1200,
        () => {
          window.location.hash = hash;
        }
      );
    }
  });
});

const width = $(window).width();

window.onscroll = function() {
  if (width >= 900) {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      $("#middle").css("background-size", "150% auto");
    } else {
      $("#middle").css("background-size", "100% auto");
    }
  }
};

setTimeout(() => {
  $("#loading").addClass("animated fadeOut");
  setTimeout(() => {
    $("#loading").removeClass("animated fadeOut");
    $("#loading").css("display", "none");
  }, 800);
}, 1450);
