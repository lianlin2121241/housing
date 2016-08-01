/**
 * Created by Administrator on 16-6-23.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(["jquery","underscore","initFrameWork","plugins_select"], factory);
	} else if (typeof module === 'object' && module.exports) {
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($,_,initFrameWork,select) {
	'use strict';
	function init(){
		initFrameWork.initFrameWorkHeight();
		$(".combox").zl_select({
			w:158,
			h:30
		})
	}
	return {
		init:init
	}
})