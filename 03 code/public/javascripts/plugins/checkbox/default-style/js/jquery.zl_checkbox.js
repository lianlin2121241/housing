// JavaScript Document
(function ($) {
    var defaults = {
        afterEvent: $.noop()    //$(this).find(":checkbox"):�����Ӧ��checkbox���� this�������Ӧ��ѡ������������
    };
    $.fn.zl_checkbox = function (options) {
        setOptions(options);
        var opts = getOptions();
        var checkbox_array = $(this);
        checkbox_array.each(function (index, ele) {
            var eleObj = $(ele),
                eleId=$(ele).attr("id"),//checkbox��ID
                forEle=eleObj.siblings("[for="+eleId+"]").addClass("chb_label"),
                //��checkbox�ϵ�class��style��ֲ������ΧԪ����
                wrapEle=$("<span class='zl_ck zl_ck_normal'></span>")
                    .addClass(eleObj.attr("class"))
                    .attr("style",eleObj.attr("style"));
            //Ϊ�ռ�ȥ��class��style���ԣ����������span��ǩ
            eleObj
                .removeAttr("class style")
                .add(forEle)
                .wrapAll(wrapEle);
            //����checkbox button��ѡ��״̬������checkbox�����ѡ����ʽ��
            if($(eleObj).is(":checked")){
                $(eleObj).closest(".zl_ck")
                    .removeClass("zl_ck_normal")
                    .addClass("zl_ck_down");
            }
            eleObj.bind("click", function () {
                methods.obj_click(eleObj);
                !!opts.afterEvent&&opts.afterEvent.call(this,$(this),$(this).closest(".zl_ck"));
            })

        })
        function updateState(){
            checkbox_array.each(function (index, ele) {
                methods.obj_click(eleObj);
            })
        }
        return checkbox_array;
    };
    var methods = {
        obj_click: function (eleObj) {
            var chbPanel=eleObj.closest(".zl_ck");
            if (eleObj.is(":checked")) {
                chbPanel.removeClass("zl_ck_normal");
                chbPanel.addClass("zl_ck_down");
            } else{
                chbPanel.removeClass("zl_ck_down");
                chbPanel.addClass("zl_ck_normal");
            }
        }

    }
    //�ϲ�����
    function setOptions(options) {
        defaults = $.extend({
            afterEvent: $.noop()
        }, options);
        return defaults;
    }

    //�õ���������
    function getOptions() {
        return defaults;
    }
})(jQuery);