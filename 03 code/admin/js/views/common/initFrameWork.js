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
			menuLogoH=$(".menu-logo").outerHeight(true),
			menuHead=$(".main-head").outerHeight(true)

		var $menuEle=$(".menu"),
			$content=$(".main-content"),
			$menuCon=$(".menu-con"),
			$mainPage=$(".main-page");

		$menuEle.add($content).height(wh);
		$menuCon.height(wh-menuLogoH);
		$mainPage.height(wh-menuHead);
	}

	return {
		initFrameWorkHeight:initFrameWorkHeight
	}
})