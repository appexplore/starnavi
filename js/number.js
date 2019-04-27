jQuery(document).ready(function($) {
$("html,body").click(function(e){
var n=Math.round(Math.random()*100);
var $i=$("<b/>").text("+"+n);
var x=e.pageX,y=e.pageY;
$i.css({
"z-index":99999,
"top":y-20,
"left":x,
"position":"absolute",
"color":"#FF3300"
});
$("body").append($i);
$i.animate(
{"top":y-180,"opacity":0},
1500,
function(){$i.remove();}
);
e.stopPropagation();
});
});