/**
 * jQuery populateForm
 * @copyright 2015, aliciatang <alicia.x.tang@gmail.com>
 * @link https://github.com/alicia/jquery-populate-form
 * @license BSD
 * @version 0.0.0
 */
(function(root, factory) {

  // AMD
  if (typeof define === "function" && define.amd) {
    define(["exports", "jquery"], function(exports, $) {
      return factory(exports, $);
    });
  }

  // CommonJS
  else if (typeof exports !== "undefined") {
    var $ = require("jquery");
    factory(exports, $);
  }

  // Browser
  else {
    factory(root, (root.jQuery || root.Zepto || root.ender || root.$));
  }

}(this, function(exports, $) {

  function FormPopulator(helper, $form) {

    function populate(data) {
      helper.each(data, function(key, value){
        var field = helper('[name='+key+']', $form);
        switch(field.attr('type')) {
          default:
            field.val(value);
        }
      });
    }

    function populateJSON(data) {
    }

    this.populate = populate;
    this.populateJSON = populateJSON;
  }

  FormPopulator.patterns = patterns;

  FormPopulator.populateObject = function populateObject(data) {
    if (this.length > 1) {
      return new Error("jquery-populate-form can only populate one form at a time");
    }
    return new FormPopulator($, this).
      populate(data);
  };

  FormPopulator.populateJSON = function populateJSON(data) {
    if (this.length > 1) {
      return new Error("jquery-populate-form can only populate one form at a time");
    }
    return new FormPopulator($, this).
      populateJSON();
  };

  if (typeof $.fn !== "undefined") {
    $.fn.populateObject = FormPopulator.populateObject;
    $.fn.populateJSON   = FormPopulator.populateJSON;
  }

  exports.FormPopulator = FormPopulator;

  return FormPopulator;
}));
