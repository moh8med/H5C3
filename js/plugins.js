// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// ======================================================

/**
 * HTML5 Forms Placeholder Fallback for <= IE9
 */
(function($) {

if(!Modernizr.input.placeholder) {
    $("[placeholder]").focus(function() {
      var input = $(this);
      if (input.val() == input.attr("placeholder")) {
        input.val("");
        input.removeClass("placeholder");
      }
    }).blur(function() {
      var input = $(this);
      if (input.val() == "" || input.val() == input.attr("placeholder")) {
        input.addClass("placeholder");
        input.val(input.attr("placeholder"));
      }
    }).blur();
    $("[placeholder]").parents("form").submit(function() {
      $(this).find("[placeholder]").each(function() {
        var input = $(this);
        if (input.val() == input.attr("placeholder")) {
          input.val("");
        }
      })
    });
}

})(jQuery);

// ======================================================

/**
 * Place any jQuery/helper plugins in here.
 * 
 * Recommended jQuery plugins for your web application:
 * 
 * easing, mousewheel, alertify, tipsy,
 * slimScroll, fancyBox, prettyPhoto, imagesLoaded, masonry
 */
