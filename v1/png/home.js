$(function () {
  //navlist1
  $('#navList1').on('click', '.nav-btn', function(event) {
    if($(this).hasClass('btn-active')){
      $('#expandZone1 #closeBtn').click();
      return false;
    }
    var curIndex = $(this).index()
      , mlValue = '-' + curIndex * 100 + '%';
    if( $('#expandZone1').hasClass('active') ){
      $('#expandZone1 .download').animate({marginLeft: mlValue});
    }
    else{
      $('#expandZone1 .download').css({marginLeft: mlValue});
    }
    var device = $(this).data('device');
    $(this).addClass('btn-active').siblings().removeClass('btn-active');
    $(device).addClass('item-active').siblings().removeClass('item-active');
    $('#expandZone1').animate({height: '90px'}).addClass('active');
    return false;
  });

  $('#expandZone1 #closeBtn').on('click', function() {
    $('#expandZone1').animate({height: '0px'}, function () {
      $(this).removeClass('active');
      $('#navList1 .btn-active').removeClass('btn-active');
    });
    return false;
  });
});





$(function () {
  //navlist
  $('#navList').on('click', '.nav-btn', function(event) {
    if($(this).hasClass('btn-active')){
      $('#expandZone #closeBtn').click();
      return false;
    }
    var curIndex = $(this).index()
      , mlValue = '-' + curIndex * 100 + '%';
    if( $('#expandZone').hasClass('active') ){
      $('#expandZone .download').animate({marginLeft: mlValue});
    }
    else{
      $('#expandZone .download').css({marginLeft: mlValue});
    }
    var device = $(this).data('device');
    $(this).addClass('btn-active').siblings().removeClass('btn-active');
    $(device).addClass('item-active').siblings().removeClass('item-active');
    $('#expandZone').animate({height: '180px'}).addClass('active');
    return false;
  });

  $('#expandZone #closeBtn').on('click', function() {
    $('#expandZone').animate({height: '0px'}, function () {
      $(this).removeClass('active');
      $('#navList .btn-active').removeClass('btn-active');
    });
    return false;
  });
  

});



jQuery(document).ready(function(){
jQuery("#w-loading div").animate({width:"100%"},600,function(){
setTimeout(function(){jQuery("#w-loading div").fadeOut(500);
});
});
});

var bigfa_scroll = {
    drawCircle: function(id, percentage, color) {
        var width = jQuery(id).width();
        var height = jQuery(id).height();
        var radius = parseInt(width / 2.20);
        var position = width;
        var positionBy2 = position / 2;
        var bg = jQuery(id)[0];
        id = id.split("#");
        var ctx = bg.getContext("2d");
        var imd = null;
        var circ = Math.PI * 2;
        var quart = Math.PI / 2;
        ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineCap = "square";
        ctx.closePath();
        ctx.fill();
        ctx.lineWidth = 3;
        imd = ctx.getImageData(0, 0, position, position);
        var draw = function(current, ctxPass) {
            ctxPass.putImageData(imd, 0, 0);
            ctxPass.beginPath();
            ctxPass.arc(positionBy2, positionBy2, radius, -(quart), ((circ) * current) - quart, false);
            ctxPass.stroke();
        }
        draw(percentage / 100, ctx);
    },
    backToTop: function($this) {
        $this.click(function() {
            jQuery("body,html").animate({
                scrollTop: 0
            },
            500);
            return false;
        });
    },
    scrollHook: function($this, color) {
        color = color ? color: "#dd5862";
        $this.scroll(function() {
            var docHeight = (jQuery(document).height() - jQuery(window).height()),
            $windowObj = $this,
            $per = jQuery(".per"),
            percentage = 0;
            defaultScroll = $windowObj.scrollTop();
            percentage = parseInt((defaultScroll / docHeight) * 100);
            var backToTop = jQuery("#backtoTop");
            if (backToTop.length > 0) {
                if ($windowObj.scrollTop() > 200) {
                    backToTop.addClass("button--show");
                } else {
                    backToTop.removeClass("button--show");
                }
                $per.attr("data-percent", percentage);
                bigfa_scroll.drawCircle("#backtoTopCanvas", percentage, color);
            }

        });
    }
}

jQuery(document).ready(function() {
    jQuery("body").append('<div id="backtoTop" data-action="gototop"><canvas id="backtoTopCanvas" width="48" height="48"></canvas><div class="per"></div></div>');
    var T = bigfa_scroll;
    T.backToTop(jQuery("#backtoTop"));
    T.scrollHook(jQuery(window), "#dd5862");
	
});



$(document).ready(function(){	


  $("#software").click(function(){
    $(".yesmylord").toggle(800);
	$("#complains").delay(600).toggle(800);
  });
//alert('温馨提示：5月10是母亲节 O(∩_∩)O' + '\n\n' + '提前祝各位外贸宝妈们节日快乐！' + '\n\n' + '再忙也要记得给母亲打个电话哦，送去问候和祝福吧！');
  //$("#terry img").delay(1800).animate({width:283, height:152}, { duration:'1200', easing:'linear'});
   // $('#terry img').delay(8600).slideUp(600);
  //$('#terry img').delay(3600).animate({'opacity':'0'}, 2000);
  //$(".mqj_banner").delay(4000).slideDown(1200);
  //$(".mqj_banner").delay(6400).slideUp(1200);
 // $(".mqj_banner2").delay(14000).slideDown(1200);
  //$(".mqj_banner2").delay(14800).slideUp(1000);
  
});


function srcMarquee(){
this.ID = document.getElementById(arguments[0]);
if(!this.ID){this.ID = -1;return;}
this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.Correct = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
this.Step = 1;
this.Timer = 30;
this.DirectionArray = {"top":0 , "bottom":1 , "left":2 , "right":3};
if(typeof arguments[1] == "number")this.Direction = arguments[1];
if(typeof arguments[2] == "number")this.Step = arguments[2];
if(typeof arguments[3] == "number")this.Width = arguments[3];
if(typeof arguments[4] == "number")this.Height = arguments[4];
if(typeof arguments[5] == "number")this.Timer = arguments[5];
if(typeof arguments[6] == "number")this.DelayTime = arguments[6];
if(typeof arguments[7] == "number")this.WaitTime = arguments[7];
if(typeof arguments[8] == "number")this.ScrollStep = arguments[8]
this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
this.ID.noWrap = true;
this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
if(arguments.length >= 7)this.Start();
}
srcMarquee.prototype.Start = function(){
if(this.ID == -1)return;
if(this.WaitTime < 800)this.WaitTime = 800;
if(this.Timer < 20)this.Timer = 20;
if(this.Width == 0)this.Width = parseInt(this.ID.style.width);
if(this.Height == 0)this.Height = parseInt(this.ID.style.height);
if(typeof this.Direction == "string")this.Direction = this.DirectionArray[this.Direction.toString().toLowerCase()];
this.HalfWidth = Math.round(this.Width / 2);
this.BakStep = this.Step;
this.ID.style.width = this.Width;
this.ID.style.height = this.Height;
if(typeof this.ScrollStep != "number")this.ScrollStep = this.Direction > 1 ? this.Width : this.Height;
var msobj = this;
var timer = this.Timer;
var delaytime = this.DelayTime;
var waittime = this.WaitTime;
msobj.StartID = function(){msobj.Scroll()}
msobj.Continue = function(){
if(msobj.MouseOver == 1){
setTimeout(msobj.Continue,delaytime);
     }
     else{ clearInterval(msobj.TimerID);
msobj.CTL = msobj.Stop = 0;
msobj.TimerID = setInterval(msobj.StartID,timer);
     }
    }
msobj.Pause = function(){
msobj.Stop = 1;
clearInterval(msobj.TimerID);
setTimeout(msobj.Continue,delaytime);
    }
msobj.Begin = function(){
   msobj.ClientScroll = msobj.Direction > 1 ? msobj.ID.scrollWidth : msobj.ID.scrollHeight;
   if((msobj.Direction <= 1 && msobj.ClientScroll <msobj.Height) || (msobj.Direction > 1 && msobj.ClientScroll <msobj.Width))return;
   msobj.ID.innerHTML += msobj.ID.innerHTML;
   msobj.TimerID = setInterval(msobj.StartID,timer);
   if(msobj.ScrollStep < 0)return;
   msobj.ID.onmousemove = function(event){
       if(msobj.ScrollStep == 0 && msobj.Direction > 1){
var event = event || window.event;
if(window.event){
if(msobj.IsNotOpera){msobj.EventLeft = event.srcElement.id == msobj.ID.id ? event.offsetX - msobj.ID.scrollLeft : event.srcElement.offsetLeft - msobj.ID.scrollLeft + event.offsetX;}
else{msobj.ScrollStep = null;return;}
}
else{msobj.EventLeft = event.layerX - msobj.ID.scrollLeft;}
msobj.Direction = msobj.EventLeft > msobj.HalfWidth ? 3 : 2;
msobj.AbsCenter = Math.abs(msobj.HalfWidth - msobj.EventLeft);
msobj.Step = Math.round(msobj.AbsCenter * (msobj.BakStep*2) / msobj.HalfWidth);
}
}
msobj.ID.onmouseover = function(){
if(msobj.ScrollStep == 0)return;
msobj.MouseOver = 1;
clearInterval(msobj.TimerID);
}
msobj.ID.onmouseout = function(){
if(msobj.ScrollStep == 0){
if(msobj.Step == 0)msobj.Step = 1;
return;
}
msobj.MouseOver = 0;
if(msobj.Stop == 0){
clearInterval(msobj.TimerID);
msobj.TimerID = setInterval(msobj.StartID,timer);
}}}
setTimeout(msobj.Begin,waittime);
}
srcMarquee.prototype.Scroll = function(){
switch(this.Direction){
case 0:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollTop >= this.ClientScroll){this.ID.scrollTop -= this.ClientScroll;}
this.ID.scrollTop += this.Step;
}
break;
case 1:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollTop <= 0){this.ID.scrollTop += this.ClientScroll;}
this.ID.scrollTop -= this.Step;
}
break;
case 2:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollLeft >= this.ClientScroll){this.ID.scrollLeft -= this.ClientScroll;}
this.ID.scrollLeft += this.Step;
}
break;
case 3:
this.CTL += this.Step;
if(this.CTL >= this.ScrollStep && this.DelayTime > 0){
this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
this.Pause();
return;
}
else{
if(this.ID.scrollLeft <= 0){this.ID.scrollLeft += this.ClientScroll;}
this.ID.scrollLeft -= this.Step;
}
break;
}
}