(function($) {
  $.fn.pluginName = function(options) {
    var settings = $.extend(
      {
        name: "Marc Rusch"
      },
      options
    );
    console.log(this);
    return this.append("Hello", settings.name);
  };
})(jQuery);
