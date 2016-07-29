// JavaScript Document
// JavaScript Document
function contentWH(){
	var winH = document.documentElement.clientHeight;
	var winW = document.body.clientWidth;
	var headH = $(".head").outerHeight(true);
	var footerH = $(".footer").outerHeight(true);
	var menuW = $(".menu").outerWidth(true);
	$(".content").height(winH - headH);
	$(".menu").height(winH);
	$(".menu-con").height(winH - 61);
	var c_w = $(".content").outerWidth(true);
	if(c_w < 1366 || c_w == 1366){
		winW = 1366;
	}
	$(".page").width(winW - menuW);
	$(".page > div.iframe_container").width(winW - menuW);
	$(".page > div.iframe_container").height(winH - headH - footerH);
	setPopContentHeight();
}
function popWH(){
	var winH = window.top.document.documentElement.clientHeight;
	var winW = window.top.document.body.clientWidth;
	$(".popwh").css({"top":(winH-540)/2});
	$(".popwh2").css({"top":(winH-565)/2});
	$(".popwh3").css({"top":(winH-515)/2});
	$(".page_tc").css({"top":(winH-503)/2});
}
/**
 * 设置弹出层内容高度
 */
function setPopContentHeight(){
	if(!$(".pop:visible")||$(".pop:visible").length==0){
		return;
	}
	var wh=$(window).height();
	var panel=$(".pop:visible");
	var panelOffset=$(".pop:visible").offset();
	var panelTop=panelOffset.top;
	var panelContent=panel.find(".pop-con"),
		panelHeadH=panel.find(".pop-head").outerHeight(true),
		panelBottomH=panel.find(".pop-foot").outerHeight(true);
	//panelContent.css("maxHeight",wh-panelTop-panelHeadH-panelBottomH-90);
	panelContent.css("maxHeight",405);
}
$(document).ready(function() {
	//点击菜单
    $(".menu-con li").click(function(){
		$(".menu-con li").removeClass("hover");
		$(".menu-con li a").removeClass("hover");
		$(this).addClass("hover");
		$(this).children("a").addClass("hover");
		$(".menu-sel").remove();
		var div = $("<div class='menu-sel'></div>");
		$(div).appendTo(this);
		var txt = $(".menu-con ul li a.hover").text();	
		$(".head-left").text(txt);
	});
	//表格
	if($(".log-table-freeze").length==0) {
		$(".log-table .table-middle > table tr:even").addClass("bgcolorfafafa");
		$(".log-table .table-middle > table tr:odd").addClass("bgcolore3e3e3");
	}
	$(".table-middle tbody tr").hover(function(){
		$(this).addClass("bgcolorb6dadc");
	},function(){
		$(".log-table .table-middle tr").removeClass("bgcolorb6dadc");
	});
	$(".rank-right tbody tr").hover(function(){
		$(this).addClass("bgcolorb6dadc");
	},function(){
		$(".rank-right tr").removeClass("bgcolorb6dadc");
	});
	//弹出层点击关闭
	$(".pop .pop-head a:not(.modify-password .pop-head a)").click(function(){
		$(this).parent().parent().appendTo($(window.top.frames['mainFrame'].frames['tabFrame'].document.body)).hide();
		$(".zzc",window.top.document).hide();		
	});
	$(".pop1 .pop-head a:not(.modify-password .pop-head a)").click(function(){
		$(this).parent().parent().appendTo($(window.top.frames['mainFrame'].document.body)).hide();
		$(".zzc",window.top.document).hide();		
	});
	//弹出层取消按钮
	$(".pop .pop-qx:not(.modify-password .pop-qx)").click(function(){
		$(this).parent().parent().appendTo($(window.top.frames['mainFrame'].frames['tabFrame'].document.body)).hide();
		$(".zzc",window.top.document).hide();
	});
	$(".pop1 .pop-qx:not(.modify-password .pop-qx)").click(function(){
		$(this).parent().parent().appendTo($(window.top.frames['mainFrame'].document.body)).hide();
		$(".zzc",window.top.document).hide();
	});
	//强提示
	$(".strong-prompt .pop-head a:not(.modify-password .pop-head a)").click(function(){
		$(this).parent().parent().hide();
		$(".zzc",window.top.document).hide();		
	});
	$(".strong-prompt .pop-qd").click(function(){
		$(this).parent().parent().hide();
		$(".zzc",window.top.document).hide();		
	});
	//input获得焦点时
	$("body").on("focus","input:not(.product-name input):not(.num-box input):not(.finite input)",function(){
		$(this).addClass("focus").removeClass("error-style");
	});
	$("body").on("focus",".num-box input",function(){
		$(this).parent().addClass("focus").removeClass("error-style");
	});
	$("body").on("focus",".finite input",function(){
		$(this).parent().addClass("focus").removeClass("error-style");
	});
	$(".qxfp_tc_l_search input").focus(function(){
		$(this).parent().addClass("focus");
	});
	//input失去焦点时
	$("body").on("blur","input:not(.product-name input):not(.num-box input):not(.finite input)",function(){
		$(this).removeClass("focus");
	});
	$("body").on("blur",".num-box input",function(){
		$(this).parent().removeClass("focus");
	});
	$("body").on("blur",".finite input",function(){
		$(this).parent().removeClass("focus");
	});
	$(".qxfp_tc_l_search input").blur(function(){
		$(this).parent().removeClass("focus");
	});
	//forms
	$(".log .user-name input").blur(function(){
		var val = $(this).val().length;
		if(val){
			$(this).addClass("focus");
		}
		else{
			$(this).removeClass("focus");
		};	
	});
	//日历框
	$(".from input:not(.all_account .from input)").focus(function(){
		$(this).css("border","none");
		$(this).parent().addClass("focus");
		$(this).siblings("img").attr("src","images/date-sel.png");
		$(document).bind("click",function(e){
			var evt=e.target;
			if($(evt).closest(".from input").length == 0){
				var val = $(".from input").val().length;
				if(val){
					$(".from input").css("border","none");
					$(".from").addClass("focus");
					$(".from img").attr("src","images/date-sel.png");	
				}
				else {
					$(".from input").css("border","none");
					$(".from").removeClass("focus");
					$(".from img").attr("src","images/date.png");	
				};
			}
		});	
	});
	$(".to input:not(.all_account .to input)").focus(function(){
		$(this).css("border","none");
		$(this).parent().addClass("focus");
		$(this).siblings("img").attr("src","images/date-sel.png");
		$(document).bind("click",function(e){
			var evt=e.target;
			if($(evt).closest(".to input").length == 0){
				var val = $(".to input").val().length;
				if(val){
					$(".to input").css("border","none");
					$(".to").addClass("focus");
					$(".to img").attr("src","images/date-sel.png");	
				}
				else {
					$(".to input").css("border","none");
					$(".to").removeClass("focus");
					$(".to img").attr("src","images/date.png");	
				};
			}
		});	
	});
	$(".from input:not(.all_account .from input)").blur(function(){
		var val = $(this).val().length;
		if(val){
			$(this).css("border","none");
			$(this).parent().addClass("focus");
			$(this).siblings("img").attr("src","images/date-sel.png");	
		}
		else {
			$(this).css("border","none");
			$(this).parent().removeClass("focus");
			$(this).siblings("img").attr("src","images/date.png");	
		};
	});
	$(".to input:not(.all_account .to input)").blur(function(){
		var val = $(this).val().length;
		if(val){
			$(this).css("border","none");
			$(this).parent().addClass("focus");
			$(this).siblings("img").attr("src","images/date-sel.png");	
		}
		else {
			$(this).css("border","none");
			$(this).parent().removeClass("focus");
			$(this).siblings("img").attr("src","images/date.png");	
		};
	});
	//下单日历框
	$(".all_account .from input").focus(function(){
		$(this).css("border","none");
		$(this).parent().css("border","1px solid #0DB4BE");
		$(this).siblings("img").attr("src","images/date-sel.png");
	});
	$(".all_account.to input").focus(function(){
		$(this).css("border","none");
		$(this).parent().css("border","1px solid #0DB4BE");
		$(this).siblings("img").attr("src","images/date-sel.png");
		
	});
	$(".all_account.from input").blur(function(){
		var val = $(this).val().length;
		if(val){
			$(this).css("border","none");
			$(this).parent().css("border","1px solid #0DB4BE");
			$(this).siblings("img").attr("src","images/date-sel.png");	
		}
		else {
			$(this).css("border","none");
			$(this).parent().css("border","1px solid #aaa");
			$(this).siblings("img").attr("src","images/date.png");	
		};
	});
	$(".all_account.to input").blur(function(){
		var val = $(this).val().length;
		if(val){
			$(this).css("border","none");
			$(this).parent().css("border","1px solid #0DB4BE");
			$(this).siblings("img").attr("src","images/date-sel.png");	
		}
		else {
			$(this).css("border","none");
			$(this).parent().css("border","1px solid #aaa");
			$(this).siblings("img").attr("src","images/date.png");	
		};
	});
	//复选框
	$(".table-middle").on("click",".checkbox",function(){
		$(this).toggleClass("sel");
		if($(".table-middle .checkbox.sel:not(thead tr td)").length >= 1){
			$(".delete").addClass("delete-able");	
		}else{
			$(".delete").removeClass("delete-able");		
		};
		var length1 = $(".table-middle tbody .checkbox").length;
		var length2 = $(".table-middle tbody .checkbox.sel").length;
		if(length1 == length2){
			$(".table-middle thead .checkbox").addClass("selall");
		}
		else{
			$(".table-middle thead .checkbox").removeClass("selall").removeClass("sel");	
		};
	});
	//全选
	$(".table-middle").on("click","thead .checkbox",function(){
		if($(this).hasClass("selall")){
			$(this).removeClass("selall").removeClass("sel");
			$(".table-middle tbody .checkbox").removeClass("sel");
			$(".delete").removeClass("delete-able");
		}else{
			$(".delete").addClass("delete-able");	
			$(this).addClass("selall");
			$(".table-middle tbody .checkbox").addClass("sel");
			var length1 = $(".table-middle tbody .checkbox").length;
			var length2 = $(".table-middle tbody .checkbox.sel").length;
			if(length1 == length2){
				$(".table-middle thead .checkbox").addClass("selall");
			}
			else{
				$(".table-middle thead .checkbox").removeClass("selall");	
			};	
		};
	});
	//商品表格高度自适应 num为商品个数 (num <商品个数)
	for(num = 1;num < 10; num++){
		var pro = ('.'+'pro'+num);
		var tbodyHeight = $(pro).find(".middle-left table").outerHeight(true);
		$(".view-order").find(pro).find(".middle-left").css({"min-height":135,"background-color":"#e3e3e3"});
		$(pro).find(".middle-right").height(tbodyHeight);
		$(pro).find(".reduce").height(tbodyHeight);
		$(pro).find(".middle-right .h95").height(tbodyHeight-40);
		$(pro).find(".middle-left tr.h40 td:first").text(num);
		$(".product1").find(pro).find("span:first").text(num);
	};
	//tab切换
	$(".tab-con > div").click(function(){
		$(".tab-con > div").removeClass("sel");
		$(this).addClass("sel");	
	});
	//tabFrame高度
	var tabFrame = window.parent.document.getElementById('tabFrame');
	var height = $(".tab1-con").height();
    $(tabFrame).height(height);
    $(tabFrame).css("min-height",300);
    
	//添加产品描述字符控制
	$(".textarea").focus(function(){
		$(this).addClass("focus").siblings(".text-length-tip").show();
	});
	$(".textarea").blur(function(){
		$(this).removeClass("focus").siblings(".text-length-tip").css("display","none");
	});
	$(".textarea").keyup(function(){
		var len = $(this).val().replace(/[^x00-xff]/g, "xx").length;//每个中文占两个字符;	
		if( 400 >= len) {
			$(this).siblings(".text-length-tip").children("span").text(400-len);
			text = $(this).val();
		}
		else {
			$(this).val(text);
		};
	});
//判断操作的下拉箭头是否显示
overflowTwoPart();
overflowThreePart();
});
function overflowTwoPart(){
	$(".permission tr").each(function(index, element) {
		var $nameOver = $(element).find(".modular-name");
		var $userOver = $(element).find(".user-people");
		var nameOver = $nameOver[0];
		var userOver = $userOver[0];
		if( (!!nameOver||!!userOver)&&(isOverflow(nameOver) || isOverflow(userOver))){
			$(element).find(".permission-up").css("display","inline-block");
			$(element).find(".permission-up").click(function(){
				if($(element).find(".permission-up").hasClass("toggle")){
					$(".permission-up").removeClass("toggle");
					$(".permission tbody tr td").removeClass("toggle");
				}
				else {
					$(".permission-up").removeClass("toggle");
					$(".permission tbody tr td").removeClass("toggle");
					$(element).find(".permission-up").addClass("toggle");
					$(element).find(".permission-up").parents("tr").children("td").addClass("toggle");	
				};
			});
		}
		else {
			$(element).find(".permission-up").hide();	
		};
	});
};
function overflowThreePart(){
	$(".permission3 tr").each(function(index, element) {
		var $nameOver = $(element).find(".modular-name");
		var $userOver = $(element).find(".user-people");
		var $jobOver = $(element).find(".job-name");
		var nameOver = $nameOver[0];
		var userOver = $userOver[0];
		var jobOver = $jobOver[0];
		if( (!!nameOver || !!userOver || !!jobOver)&&(isOverflow(nameOver) || isOverflow(userOver) || isOverflow(jobOver))){
			$(element).find(".permission-up").css("display","inline-block");
			$(element).find(".permission-up").click(function(){
				if($(element).find(".permission-up").hasClass("toggle")){
					$(".permission-up").removeClass("toggle");
					$(".permission3 tbody tr td").removeClass("toggle");
				}
				else {
					$(".permission-up").removeClass("toggle");
					$(".permission3 tbody tr td").removeClass("toggle");
					$(element).find(".permission-up").addClass("toggle");
					$(element).find(".permission-up").parents("tr").children("td").addClass("toggle");	
				};
			});
		}
		else {
			$(element).find(".permission-up").hide();	
		};
	});
};
//判断文本是否溢出
function isOverflow(elem) {
	return elem.offsetWidth < elem.scrollWidth;
}
//分割线+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//价格千位逗号格式化
function outputMoney(number,decimal){
	number = number+"";
	number=number.replace(/\,/g, "");
	if(isNaN(number) || number==""){
		return "";
	}
    number=Math.round(number*100)/100;
    if(decimal){//true,保留两位小数        false,不保留小数
    	return outputDollars(Math.floor(number-0)+'')+outputCents(number-0);
    }else{
    	return outputDollars(Math.floor(number-0)+'');
    }
}
//格式化整数价格
function outputDollars(number){
    if(number.length<=3){
    	return (number==''?'0':number);
    }else{
    	var mod=number.length % 3;
        var output=(mod==0?'':(number.substring(0, mod)));
        for (i=0;i<Math.floor(number.length/3);i++){
            if((mod==0) && (i==0)){
            	output+=number.substring(mod+3*i, mod+3*i+3);
            }else{
            	output+=','+number.substring(mod+3*i, mod+3*i+3);
            }
        }
        return (output);
    }
}
//格式化小数价格(保留两位,四舍五入)
function outputCents(amount){
	amount=Math.round(((amount)-Math.floor(amount))*100);
    return (amount<10?'.0'+amount:'.'+amount);
}
//将千位格式化金额还原
function  returnMoney(s) {  
	s = s+"";
    return parseFloat(s.replace(/[^\d\.-]/g, ""));  
}  
//工作组下拉内容
function queryLeaderDep(userId){
	var option = "";
	$.ajax({
		type: "post",
		url: serverPath+"/salesman/queryLeaderDep.action",
		async : false,
		timeout : 30000 ,
		dataType:'json',
		data:{"param.userId":userId},
		beforeSend: function(XMLHttpRequest){},
		success: function(result, textStatus){
			if(result){
				var deps = result.depList;
				if(deps.length>0){
					for(var i=0;i<deps.length;i++){
						var depId = deps[i].depId;
						var depName = deps[i].depName;
						option+='<option value="'+depId+'">'+depName+'</option>';
					}
				}
			}
		}
	});
	return option;
}
//更新软件编码及单位使用状态
function updSoftwareCodeAndUnitState(){
	var url = serverPath+"/software/updSoftwareCodeAndUnitState.action";
	param = {};
	$.post(url,param,function(result){});	
}
//更新销售级别使用状态
function updateLevelStatus(){
	var url = serverPath+"/salesman/updateLevelStatus.action";
	param = {};
	$.post(url,param,function(result){});	
}
