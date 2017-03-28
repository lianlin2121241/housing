/**
 * Created by Administrator on 16-6-23.
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(["jquery","underscore","initFrameWork","commonFunction","plugins_select","libs/jquery-ui/ui/core","libs/jquery-ui/ui/widget","libs/jquery-ui/ui/position","pagination"], factory);
	} else if (typeof module === 'object' && module.exports) {
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
})(function ($,_,initFrameWork,commonFunction) {
	'use strict';
	function init(){
		initFrameWork.initFrameWorkHeight();
		$(".combox").zl_select({
			w:158,
			h:30
		})
		$(".combox-form").zl_select({
			w:300,
			h:28
		})

		$(".pagination-content").pagination(50, {
			callback: page_callback,
			items_per_page: 1,
			current_page: 0,
			first_text: " ",
			prev_text: " ",
			next_text: " ",
			last_text: " ",
			jump_text: "GO",
			num_edge_entries: 3,
			ellipse_text: '...',
			num_display_entries: 5,
			isSum: false,
			isJump:false,
			link_to: 'javascript:void(0)'
		})

		//分页点击回调
		function page_callback(page_index, jq){
			return true;
		}

		$(".table-top")
			.on("click","#btnAdd",function(){
				var pop=$("#panelAdd");
				commonFunction.showPop(pop);
			})

		$("#panelAdd")
			.on("click",".close",function(){
				var pop=$("#panelAdd");
				commonFunction.hidePop(pop);
			})
	}
	function loadData(data){

	}
	function clearTable(){

	}
	function applyTable(list){

	}
	return {
		init:init
	}
})