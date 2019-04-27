function addfavor(url, title) {

var ua = navigator.userAgent.toLowerCase();
if (ua.indexOf("msie 8") > -1) {
external.AddToFavoritesBar(url, title, ''); //IE8
} else {
try {
window.external.addFavorite(url, title);
} catch (e) {
try {
window.sidebar.addPanel(title, url, ''); //firefox
} catch (e) {
alert("请按下键盘 Ctrl+D 收藏本站");
}
}
}
return false;
}
