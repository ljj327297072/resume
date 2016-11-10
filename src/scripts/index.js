var Swiper = require('./components/swiper/swiper-3.3.1.min');
var swiperAnimate = require('./components/swiper/swiper.animate1.0.2.min');
var wx = require('weixin-js-sdk');
var swiper = new Swiper ('.swiper-container', {
	  onInit: function(swiper){ //Swiper2.x的初始化是onFirstInit
	    swiperAnimate.swiperAnimateCache(swiper); //隐藏动画元素 
	    swiperAnimate.swiperAnimate(swiper); //初始化完成开始动画
	  }, 
	  onSlideChangeEnd: function(swiper){ 
	    swiperAnimate.swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
	  } 
});
var $ = require('zepto-modules/zepto');
require('zepto-modules/event');
require('zepto-modules/ajax');
require('zepto-modules/touch');
module.exports = $;


/**
 * 页面需要的js开始
 */
getSkill();
$("#enter").tap(function(){
	$("#swiper").hide();
	$("#detail").show();
});

$("#skill").tap(function(){
	$("#bottomBtn li").removeClass("active");
	$(this).addClass("active");
	$("#title").html("技能");
	$("#contents").html("");
	getSkill();
});

$("#project").tap(function(){
	$("#bottomBtn li").removeClass("active");
	$(this).addClass("active");
	$("#title").html("项目");
	$("#contents").html("");
//	getSkill();
});

$("#work").tap(function(){
	$("#bottomBtn li").removeClass("active");
	$(this).addClass("active");
	$("#title").html("经历");
	$("#contents").html("");
	
	getWork();
});

$("#my").tap(function(){
	$("#bottomBtn li").removeClass("active");
	$(this).addClass("active");
	$("#title").html("我的");	
	$("#contents").html("");
	getMy();
});



/**
 * 获取技能列表
 */
function getSkill(){
	$.ajax({
			url:"./api/skill",
			type:"post",
			success:function(data){
				for(var i=0;i<data.length;i++)
				{
					var msg="<ul>"+
									"<li>"+data[i].category+":"+data[i].name+"</li>"+
									"<li>时间："+data[i].time+"</li>"+
									"<li>level:"+data[i].level+"</li>";
					$("#contents").append(msg);	
				}	
			}
	});
}

/**
 * 获取经历列表
 */
function getWork(){
	$.ajax({
		type:"post",
		url:"./api/work",
		success:function(data){
			for(var i=0;i<data.length;i++)
			{
//				var msg="<ul>"
			}
		}
	});
}
/*
 * 获取我的
 */

function getMy(){
	$("#contents").append("<img class='myImg' src='images/peeson.JPG' />");
	$("#contents").append("<div class='tip'>请扫描下方二维码添加微信</div>");
	$("#contents").append("<img class='QrCode' src='images/peeson.JPG' />");

}

/**
 * 点击相机按钮，调用系统相机
 */
$("#btLeft").tap(function(){
	alert(1);
});

/**
 *   点击定位按钮，获取当前定位
 */
$("#btRight").tap(function(){
	alert(2);
});




/**
 * 页面需要的js结束
 */



















