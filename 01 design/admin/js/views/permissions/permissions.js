/**
 * Created by Administrator on 16-6-23.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(["jquery","underscore","initFrameWork","plugins_checkbox"], factory);
	} else if (typeof module === 'object' && module.exports) {
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($,_,initFrameWork) {
	'use strict';
	function init(){
		initFrameWork.initFrameWorkHeight();
		$(".checkbox").zl_checkbox()
	}
	return {
		init:init
	}
})