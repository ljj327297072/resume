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
	getProject();
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
	$("#title").html("联系我");	
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
									"<li><span class='item'>"+data[i].category+"</span>:"+data[i].name+"</li>"+
									"<li><span class='item'>时间</span>："+data[i].time+"</li>"+
									"<li><span class='item'>level</span>："+data[i].level+"</li>";
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
				var msg="<ul>"+
								"<li><img src='"+data[i].image+"'></li>"+
								"<li><span class='item'>公司名称</span>："+data[i].name+"</li>"+
								"<li><span class='item'>企业类型</span>："+data[i].category+"</li>"+
								"<li><span class='item'>企业链接</span>："+data[i].url+"</li>"+
								"<li><span class='item'>企业规模</span>："+data[i].category+"人</li>"+
								"<li><span class='item'>职位</span>："+data[i].reportto+"</li>"+
								"<li><span class='item'>项目</span>："+data[i].projects+"</li></ul>";
				$("#contents").append(msg);
			}
		}
	});
}

/**
 * 获取项目列表
 */
function getProject(){
	$.ajax({
		type:"post",
		url:"./api/project",
		success:function(data){
			for(var i=0;i<data.length;i++)
			{
				var msg="<ul>"+
								"<li><span class='item'>项目类型</span>："+data[i].category+"</li>"+
								"<li><span class='item'>项目链接</span>："+data[i].url+"</li>"+
								"<li class='itemImg'><img src='"+data[i].image+"'></li>";
				$("#contents").append(msg);
			}
		}
	});
}


/*
 * 获取我的
 */

function getMy(){
	var msg="<div><span class='item'>电话</span>：15563457803</div>"+
					"<div><span class='item'>邮箱</span>：ljj327297072@163.com</div>"+
					"<div><span class='item'>请扫描下方二维码添加微信</span></div>"+
					"<div><img src='images/QrCode.jpg'></div>";
		$("#contents").append(msg);
					
}

/**
 * 页面需要的js结束
 */




/**
 * 用于微信webapp开始
 */
//$.post("http://ljj327297072.applinzi.com/weixin/getsign.php",{
//      url:window.location.href
//  },function(data){
//      pos = data.indexOf("}");
//      dataStr = data.substring(0,pos+1);
//      objData = JSON.parse(dataStr);
//      console.log(objData);
//       wx.config({
//		    debug: true,
//		    appId: objData.appId,
//		    timestamp: objData.timestamp,
//		    nonceStr: objData.nonceStr,
//		    signature: objData.signature,
//		    jsApiList: [
//		      // 所有要调用的 API 都要加到这个列表中
//		      'getLocation','chooseImage'
//		    ]
//		  });
//})
/**
 * 点击相机按钮，调用系统相机
 */
//$("#btLeft").tap(function(){
//	console.log("相机");
//	wx.chooseImage({
//  count: 1, // 默认9
//  sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
//  sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
//  success: function (res) {
//      var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
//  }
//});
//});

/**
 *   点击定位按钮，获取当前定位
 */
//$("#btRight").tap(function(){
//	console.log("定位");
//	wx.getLocation({
//  type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
//  success: function (res) {
//      var latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
//      var longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
//      var speed = res.speed; // 速度，以米/每秒计
//      var accuracy = res.accuracy; // 位置精度
//      alert(latitude);
//      alert(longitude);
//  }
//});
//	
//});

/**
 * 用于微信webapp结束
 */

/**
 * 用于混合式开发App开始
 */
// 扩展API加载完毕后调用onPlusReady回调函数 
//document.addEventListener( "plusready", onPlusReady, false );
//// 扩展API加载完毕，现在可以正常调用扩展API 
//function onPlusReady() {
//	console.log("plusready");
//}
//// 拍照
//function captureImage(){
//	var cmr = plus.camera.getCamera();
//	var res = cmr.supportedImageResolutions[0];
//	var fmt = cmr.supportedImageFormats[0];
//	console.log("Resolution: "+res+", Format: "+fmt);
//	cmr.captureImage( function( path ){
//			alert( "Capture image success: " + path );  
//		},
//		function( error ) {
//			alert( "Capture image failed: " + error.message );
//		},
//		{resolution:res,format:fmt}
//	);
//}
//$("#btLeft").tap(function(){
//	captureImage();
//});
//$("#btRight").tap(function(){
//	captureImage();
//});























