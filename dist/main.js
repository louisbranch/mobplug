;(function() {
  // fix menu when passed
  $(".masthead").visibility({
    once: false,
    onBottomPassed: function() {
      $(".fixed.menu").transition("fade in");
    },
    onBottomPassedReverse: function() {
      $(".fixed.menu").transition("fade out");
    }
  });

  // create sidebar and attach to menu open
  $(".ui.sidebar").sidebar("attach events", ".toc.item");

  // toggle active menu
  var $links = $(".menu a");
  $(".menu").on("click", function(e) {
    var target = $(e.target).attr("href");
    $links.each(function(i, el) {
      var $el = $(el);
      if ($el.attr("href") === target) {
        $el.addClass("active");
      } else {
        $el.removeClass("active");
      }
    });
  });

  // submit form
  $("form").on("submit", function() {
    this.reset();
    $(this).addClass("success");
    return false;
  });
}());
