﻿// JavaScript Document
(function ($) {
    $.fn.zl_select = function ( options ) {
		var defaults = {
			w: 200
			,h: 26
			,items_w: null
			,windowArea:"local"  //top;local
		};
		setOptions( options );
		var opts = getOptions();
		var objArray = $( this );
		var drop,items,selectEle,opts,container,cv,copt;
		objArray.each(function( index, ele){
			var obj = $( this );    
			//避免重复应用组件样式
			if($(".select-container",obj).length != 0){return true;}
			container = $("<a class='select-container' onclick='return false;' href='#' tabindex='-1' />");
			var content = $("<span />");
			var icon = $("<div />");
			content.appendTo(container);
			icon.appendTo(container);
			container.appendTo(obj);
			obj.width(getOptions().w);
			container.height(getOptions().h);
			container.css("line-height",getOptions().h + "px");
			var top = container.offset().top;
			var left = container.offset().left;
			var iw = container.innerWidth();
			var oh = container.outerHeight();
			var iconw = icon.outerWidth();
			//内容区宽度
			//10是container的内边距和边框宽度之和。
			content.width(getOptions().w - 10 - iconw);
			
			drop = $("<div class='select-drop' />");
			items = $("<ul class='items' />");
			items.appendTo(drop);
			drop.appendTo(obj);
			selectEle = $(">select",obj);
			if(selectEle.prop("disabled")){
				obj.addClass("disabled");
			}
			opts = selectEle.find("option");
			
			//初始化时，select元素的当前值。
			copt = selectEle.find("option:selected");
			cv = copt.attr("value");
			
			//当select元素触发change时，select组件自动变更值。
			$(obj).delegate(selectEle,"change",function(e){
				var cv = $(selectEle).val();
				if(!!cv){
					selectEle.closest(".zl_select").addClass("has-val");
				}else{
					selectEle.closest(".zl_select").removeClass("has-val");
				}
				$("li",items).each(function(i,ele){
					var v = $(ele).attr("v");
					if(cv == v){
						$(">span",container).text($(ele).text());
						$("li",items).removeClass("down");
						$(ele).addClass("down");
					}
				}) 
			})
			
			//分解select元素项，构建select组件结构。
			opts.each(function(i,d){
			   var o = $("<li />");
			   o.appendTo(items);
			   var txt = $(d).text();
			   var val = $(d).attr("value");
			   o.text(txt);
			   o.attr("v",val);
			   
			   if(cv == val){
				   //设置默认当前值
				   $(">span",container).text(txt);
				   $("li",items).removeClass("down");
				   o.addClass("down");
			   }
			   //select组件item项绑定事件。
			   methods._item_click(o,selectEle,container,txt,items,drop);
			   methods._item_hover(o);
			})
			
			//select组件内容框绑定事件。
			container.bind("click",function(){
				var $panel=$(this).closest(".zl_select");
				if($panel.hasClass("disabled")){
					return;
				}
				if(drop.is(":hidden")){
					$(".zl_select").removeClass("active");
					$panel.addClass("active");
					
					$(".select-drop").hide();
					drop.show();
					var top = container.offset().top;
					var left = container.offset().left;
					var iw = container.innerWidth();
					var w = container.width();
					var oh = container.outerHeight();
					var iconw = icon.outerWidth();
					drop.css({"top": oh, "left": 0, "width": getOptions().items_w ? getOptions().items_w : iw });
					//内容区宽度
					content.width(getOptions().w - 10 - iconw);
					//触发body,隐藏select组件下拉项。
					var documentArea=defaults.windowArea=="local"?document:window.top.document;
					$(documentArea).on("click.selectclick",function(e){
						//alert(1)
						var evt = e.target;
						//点击事件触发元素是select组件内容框时，不隐藏select组件下拉项。
						if($(evt).closest("a.select-container").length == 0){
							drop.hide();
							$panel.removeClass("active");
							$(documentArea).off("click.selectclick");
						}
					})
				}else{
					drop.hide();
					$panel.removeClass("active");
				}
				
			})
		})
		//当select下拉选项集合有改变时，组件下拉需要重新获取新的集合。
		objArray.reloadData = function(obj){
			var selectEle,opts,copt,cv;
			items.empty();
			selectEle = $(">select",obj);
			opts = selectEle.find("option");
			//初始化时，select元素的当前值。
			copt = selectEle.find("option:selected");
			cv = copt.attr("value");
			//分解select元素项，构建select组件结构。
			opts.each(function(i,d){
			   var o = $("<li />");
			   o.appendTo(items);
			   var txt = $(d).text();
			   var val = $(d).attr("value");
			   o.text(txt);
			   o.attr("v",val);
			   
			   if(cv == val){
				   //设置默认当前值
				   $(">span",container).text(txt);
				   $("li",items).removeClass("down");
				   o.addClass("down");
			   }
			   
			  //select组件item项绑定事件。
			   methods._item_click(o,selectEle,container,txt,items,drop);
			   methods._item_hover(o);
			})
		}
		objArray.changeDisState = function(obj){
			var selectEle = $(">select",obj);
			if(selectEle.prop("disabled")){
				selectEle.closest(".zl_select").addClass("disabled");
			}else{
				selectEle.closest(".zl_select").removeClass("disabled");
			}
		}

        //合并参数
        function setOptions(options) {
            defaults = $.extend(defaults, options);
            return defaults;
        }

        //得到参数集合
        function getOptions() {
            return defaults;
        }
		return objArray;
    };
	var methods = {
		_item_click:function(o,selectEle,container,txt,items,drop){
			o.bind("click",function(){
				var $panel=$(this).closest(".zl_select");
			   var v = o.attr("v");
			   selectEle.val(v);
			   $(">span",container).text(txt);
			   $("li",items).removeClass("down");
			   o.addClass("down");
			   drop.hide();
				$panel.removeClass("active");
			   //触发select的change事件
			   selectEle.trigger("change");
			}) 
			
		},
		_item_hover:function(o){
		   o.hover(function(){
				$(this).addClass("over");
			},
			function (){
				$(this).removeClass("over");
			})
		}
	}
})(jQuery);