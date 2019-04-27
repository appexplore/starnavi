jQuery(document).ready(function($) {
$("html,body").click(function(e){
var n=Math.round(Math.random()*100);//随机数
var $i=$("<b/>").text("+"+n);//添加到页面的元素
var x=e.pageX,y=e.pageY;//鼠标点击的位置
$i.css({
"z-index":99999,
"top":y-20,
"left":x,
"position":"absolute",
"color":"#FF3300"
});
//小和博客 - www.txiaohe.cn
$("body").append($i);
$i.animate(
{"top":y-180,"opacity":0},
1500,
function(){$i.remove();}
);
e.stopPropagation();
});
});