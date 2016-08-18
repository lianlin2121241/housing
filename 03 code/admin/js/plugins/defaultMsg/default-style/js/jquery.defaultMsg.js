// JavaScript Document
(function ($) {
    $.fn.formsStyle = function (options) {
		var defaults = {
            blurCallback: $.noop(),
			focusCallback: $.noop()
        };
		setOptions(options);
        this.each(function () {
			var obj = $(this);
			var h = obj.outerHeight();
			var w = obj.outerWidth();
			var p_obj = obj.parent();
			var texts = obj.attr("msg");
			var div_forms = $("<div class='div_forms'/>");
			div_forms.width(w);
			div_forms.height(h);
			
			div_forms.prependTo(p_obj);
			var div_text = $("<div class='div-text'/>");
			div_text.attr("msg",texts);
			div_text.text(texts);
			div_text.appendTo(div_forms);
			obj.appendTo(div_forms);
			var currentE = $(".div-text",p_obj);
			obj.bind("focus",function(e){
				var e = window.event||e;
				var eventTarget = e.srcElement||e.target;
				if(currentE.attr("msg") == currentE.text()){
					currentE.text("");
					$(eventTarget).val("");
					$(eventTarget).css('color','#222');
				}
				!!defaults.focusCallback&&defaults.focusCallback.call(obj,obj.val()); 
			});
			obj.bind("blur",function(e){
				var e = window.event||e;
				var eventTarget = e.srcElement||e.target;
				if(currentE.text() == "" && $(eventTarget).val() == ""){
					currentE.text(currentE.attr("msg"));
					currentE.css('color','#a0a0a0');
				} 
				!!defaults.blurCallback&&defaults.blurCallback.call(obj,obj.val()); 
				
			});

        }); 
		
		//合并参数
        function setOptions(options) {
            defaults = $.extend(defaults, options);
            return defaults;
        }

        //得到参数集合
        function getOptions() {
            return defaults;
        }
    }; 

})(jQuery);