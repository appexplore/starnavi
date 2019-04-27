var pageId = "hao123-indexnu",
            siteInitData = [{ "id": 1, "name": "\u767e\u5ea6", "url": "http:\/\/www.baidu.com", "sort": 1, "status": 1, "icon": "7656.png" }, { "id": 2, "name": "\u65b0\u6d6a", "url": "http:\/\/www.sina.com.cn", "sort": 2, "status": 1, "icon": "9898.png" }, { "id": 3, "name": "\u817e\u8baf", "url": "http:\/\/www.qq.com", "sort": 3, "status": 1, "icon": "7082.png" }, { "id": 4, "name": "\u641c\u72d0", "url": "http:\/\/www.sohu.com", "sort": 4, "status": 1, "icon": "9935.png" }, { "id": 5, "name": "\u7f51\u6613", "url": "http:\/\/www.163.com", "sort": 5, "status": 1, "icon": "7183.png" }, { "id": 6, "name": "\u8c37\u6b4c", "url": "http:\/\/www.google.com.hk", "sort": 6, "status": 1, "icon": "8510.png" }, { "id": 7, "name": "\u51e4\u51f0\u7f51", "url": "http:\/\/www.ifeng.com", "sort": 7, "status": 1, "icon": "8838.png" }, { "id": 8, "name": "\u65b0\u6d6a\u5fae\u535a", "url": "http:\/\/weibo.com", "sort": 8, "status": 1, "icon": "7100.png" }, { "id": 9, "name": "QQ\u7a7a\u95f4", "url": "http:\/\/qzone.qq.com", "sort": 9, "status": 1, "icon": "7083.png" }, { "id": 10, "name": "\u6dd8\u5b9d\u7f51", "url": "http:\/\/www.taobao.com", "sort": 10, "status": 1, "icon": "10062.png" }, { "id": 11, "name": "4399\u6e38\u620f", "url": "http:\/\/www.4399.com", "sort": 11, "status": 1, "icon": "187.png" }, { "id": 12, "name": "\u4f18\u9177\u7f51", "url": "http:\/\/www.youku.com", "sort": 12, "status": 1, "icon": "10605.png"}],
        isLanding = 0,
        username = null,
        gotourl = "http%3A%2F%2Fwww.hao123.com%2F",
        left = $('.layout-content-slider'),
        right = $('.layout-content-ct'),
        normalLeftHeight = left.height(),
        arrBaiduAds = [],
        antic = (function (_) { var A = ((self !== top) || (!!window.opener)) ? 1 : 0, _ref = encodeURIComponent(_.referrer);               return { embed: A, ref: _ref} })(document),
        UA2Config = { id: "hao123-index", action: "http://www.hao123.com/images/", rate: 100 };
        (function (log, cookie) { var lat = cookie.localcookie('cookie', 'LAT'); cookie.localcookie('cookie', 'LAT', +new Date);          if (!log) return; log.conf = { data: { level: 1, page: "index"} }; log.send({ type: "access", embed: antic.embed, ref: antic.ref, pageId: pageId }); cookie.localcookie('wait', function (ok) { log.send({ type: "flash", embed: antic.embed, ref: antic.ref, pageId: pageId, lastAccess: lat || 0 }); }) })($.hao123.log, $.hao123.localcookie.getInstance());
        $("#search").search().bind('searchmouseselect', function (event, data) { $.hao123.log.send(data); }).bind('searchbtnclick', function (event, data) { $.hao123.log.send(data); }).bind('searchwordkeydown', function (event, data) { $.hao123.log.send(data); });
        (function () { var t; if (Math.random() < 0.01) { t = +new Date; $.hao123.log.heartbeat({ type: "heartbeat", sessionid: t, staytime: function () { return (+new Date) - t; } }, function (i) { var a = Math.pow(i - 1, 2), b = Math.pow(i, 2); return (a + ((b - a) * Math.random())) * 1000; }); } })();
        hao.header();
        hao.userbar();
        $.hao123.starbar();
        hao.hotspot();
        ajust();
        $.hao123.siteLog($('#site'));
        $('#site').site().site('init', { isLanding: isLanding, userName: username, data: siteInitData }).bind('sitebackclick', function () { ajust(); });
        function ajust() { if (right.height() < normalLeftHeight) { left.height(normalLeftHeight); } else { if ($.hao123.browser.ie && $.hao123.browser.ie < 8) { left.height(right.get(0).offsetHeight + 1); } else { left.height(right.get(0).offsetHeight - 2); } } }
        $.getScript("http://a.baidu.com/ecom?di=214&tm=baidufsbanner", function () { if (arrBaiduAds && arrBaiduAds["214"]) { $("#ads214").html(arrBaiduAds["214"]); } });
        hao.guide();