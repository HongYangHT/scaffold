define(['jquery'], function($) {
	var BaseModel = function(options) {
		options = options || {};
		for (var key in options) {
			if (options.hasOwnProperty(key) && ModelOptions.indexOf(key) !== -1) {
				this[key] = options[key];
			}
		}

		this.initialize(options);
	};

	var defaults = {
		type: 'GET',
		charset: 'utf8',
		async: false,
		cache: false,
		dataType: 'json',
		data: {
			't': (new Date()).getTime()
		},
		error: function(xhr, textStatus) {
			if (textStatus === 'timeout') {
				console.log('请求超时，请稍后再试');
			}
		}
	};

	$.extend(BaseModel.prototype, {
		initialize: function(options) {

		},
		// 获取配置文件
		get: function(options) {
			var _that = this;
			options = $.extend({},
				defaults, options);
			return $.ajax(options);
		},
		fetch: function(options) {
			var _that = this;
			options = $.extend({
				dataType: 'jsonp'
			}, options)
			options = $.extend({},
				defaults, options);
			return $.ajax(options);
		},
		post: function(options) {
			var _that = this;
			options = $.extend({
				type: 'POST',
				contentType: 'application/json'
			}, options)
			options = $.extend({},
				defaults, options);
			return $.ajax(options);
		}
	});

	return BaseModel;
});