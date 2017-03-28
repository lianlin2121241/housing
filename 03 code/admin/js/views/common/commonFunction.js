/**
 * Created by Administrator on 16-6-23.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(["jquery"], factory);
	} else if (typeof module === 'object' && module.exports) {
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($) {
	'use strict';
	function showPop(pop){
		var $shade=$("#shade");
		$shade.show();
		if (pop.hasClass('hidden')) {
			pop.removeClass('hidden');
			requestAnimationFrame(function(){
				pop.addClass('visible');
			});
		}
	}

	function hidePop(pop){
		var $shade=$("#shade");
		$shade.hide();
		pop.removeClass("visible").addClass("hidden");
	}

	return {
		showPop:showPop,
		hidePop:hidePop
	}
})