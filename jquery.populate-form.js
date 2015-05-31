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
		function select(field, key, value) {
			if (!field.is('select')) return;

			helper('option', field).each(function() {
				if(this.value == value) {}
			});
		}

		function populate(data) {
			helper.each(data, function(key, value) {
				var field = helper('[name="'+key+'"]', $form);
				if (!field) {
					console.log('Skipping:' + key + ':' + value);
					return;
				}
				switch(field.attr('type')) {
				case 'radio':
					field.each(function(){
						if($(this).attr('value') == value) $(this).attr("checked", "checked");
						else $(this).removeAttr("checked");
					});
					break;
				case 'checkbox':
					value = $.isArray(value) ? value : [value];
					field.each(function(){
						if($.inArray($(this).attr('value'), value))
							$(this).attr("checked", "checked");
						else $(this).removeAttr("checked");
					});
				default:
					field.val(value);
				}
			});
		}

		function populateJSON(data) {
			populate(JSON.parse(data));
		}

		this.populate = populate;
		this.populateJSON = populateJSON;
	}

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
		populateJSON(data);
	};

	if (typeof $.fn !== "undefined") {
		$.fn.populateObject = FormPopulator.populateObject;
		$.fn.populateJSON   = FormPopulator.populateJSON;
	}

	exports.FormPopulator = FormPopulator;

	return FormPopulator;
}));
