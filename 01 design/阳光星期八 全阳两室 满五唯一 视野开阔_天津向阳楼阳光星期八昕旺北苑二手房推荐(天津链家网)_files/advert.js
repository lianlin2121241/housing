$(function(){var e='<div class="advert">#{box}<div>',a='<div class="entry"><a href="#{url}"><img src="#{image_url_path}"></a></div>',o='<div class="entry"><img src="#{image_url_path}"></div>',l='<div class="huodongBox animated" style="display:none;"><div class="huodong-wrap"><img src="#{ext_pop_img_url_path}"><img src="#{ext_pop_close_img_url_path}" class="advertClose"></div></div>',t=ljConf.pageConfig.ajaxroot+"ad/ren",_=$("body"),d="";$.ajax({url:t,dataType:"jsonp",data:{cityId:ljConf.city_id,channel:window.location.href}}).done(function(t){var t=t.data;if(t&&""!=t){var i=$.replaceTpl(a,{url:t.url,image_url_path:t.img_url_path}),r=$.replaceTpl(o,{image_url_path:t.img_url_path}),p=$.replaceTpl(l,{ext_pop_img_url_path:t.ext.ext_pop_img_url_path,ext_pop_close_img_url_path:t.ext.ext_pop_close_img_url_path&&t.ext.ext_pop_close_img_url_path||path[0]+"/img/erwei-close.png"});if(t.ext.ext_mode&&1==t.ext.ext_mode){d+=r+p;var n=$.replaceTpl(e,{box:d})}else if(t.ext.ext_mode&&0==t.ext.ext_mode){d+=i;var n=$.replaceTpl(e,{box:d})}_.append(n)}}),$("body").delegate(".entry","click",function(e){var a=$(this);0==a.find("a").length&&($(".overlay_bg").fadeIn(300),$(".huodongBox").addClass("bounceIn").fadeIn(),$("body").css({overflow:"hidden"}))}),$("body").delegate(".advertClose","click",function(e){$(".huodongBox").removeClass("bounceIn"),$(".huodongBox").fadeOut(),$(".overlay_bg").fadeOut(),$("body").css({overflow:""})})});