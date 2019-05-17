$('.open-pop-up').click(() => {
    $('.pop-up').fadeIn(300);
});

$('.close-pop-up').click(() => {
    $('.pop-up').fadeOut(300);
});
//点击外边关闭弹窗
$(window).click((e)=>{
    // console.log(e.target);
    if(e.target == $('.pop-up')[0]){
        $('.pop-up').fadeOut(500);
    }
});

$('.pop-up-title li').each(i => {
    if (i >= 4) return;
    $('.pop-up-title li').eq(i).click(() => {
        $('.pop-up-title li').eq(i).addClass("font-size-big");
        $('.pop-up-title li').eq(i).siblings().removeClass("font-size-big");


        $('.pop-up-chuang>div').eq(i).removeClass('hidden');
        $('.pop-up-chuang>div').eq(i).siblings('div').addClass('hidden');
    });

});

let result = "https://www.baidu.com/s?wd=";//默认百度
// console.log($('.navbar ul li select').val());
$('.navbar ul li select').change(() => {
    site();
});

function site() {
    let value = $('.navbar ul li select').val();
    if (value == "baidu") {
        result = "https://www.baidu.com/s?wd=";
    } else if (value == "google") {
        result = "https://www.google.com/search?q=";
    } else if (value == "bing") {
        result = "https://www.bing.com/search?q=";
    } else if (value == "mijisou") {
        result = "https://mijisou.com/?q=";
    }
}
$('.navbar ul li button').click(()=>{
    result +=$('.navbar ul li input').val();
    $(".open").attr("href",result);
    $("#open").click();
    //window.open(result);
    site();
});

$('.more-site').click(()=>{
    $('.container').addClass('leftmouse-home');
    $('.content-two').addClass('leftmouse');
});
$('div.return>div').click(()=>{
    $('.container').removeClass('leftmouse-home');
    $('.content-two').removeClass('leftmouse');
});