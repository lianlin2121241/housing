/**
 * Created by Administrator on 16-6-23.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(["jquery","underscore"], factory);
	} else if (typeof module === 'object' && module.exports) {
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($,_) {
	'use strict';
	function initFrameWorkHeight(){
		var wh=$(window).height(),
			menuLogoH=$(".menu-logo").outerHeight(true)

		var $menuEle=$(".menu"),
			$content=$(".main-content"),
			$menuCon=$(".menu-con");

		$menuEle.add($content).height(wh);
		$menuCon.height(wh-menuLogoH);
	}

	return {
		initFrameWorkHeight:initFrameWorkHeight
	}
})