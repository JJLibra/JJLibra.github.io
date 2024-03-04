// 这是答辩，不要看(。﹏。*)
window.onload = function () {
    var ua = window.navigator.userAgent;
    var isIE = /MSIE|Trident/.test(ua);
    var isChrome = /Chrome/.test(ua) && /Google Inc/.test(navigator.vendor);
    var isEdge = /Edg/.test(ua);
    var isFirefox = /Firefox/.test(ua);
    var isOpera = /OPR/.test(ua);

    if (isIE) {
        location.href = "http://blog.xiowo.net/UpdateBrowser";
    }

    if (
        (isIE || isChrome || isEdge || isFirefox || isOpera) &&
        ((isIE) || (isChrome && /Chrome\/(\d+)/.exec(ua)[1] < 85) ||
            (isEdge && /Edg\/(\d+)/.exec(ua)[1] < 90) ||
            (isFirefox && /Firefox\/(\d+)/.exec(ua)[1] < 90) ||
            (isOpera && /OPR\/(\d+)/.exec(ua)[1] < 80))
    ) {
        var browserInfo = "";
        if (isIE) {
            browserInfo = "Internet Explorer";
        } else if (isChrome) {
            browserInfo = "Chrome";
        } else if (isEdge) {
            browserInfo = "Microsoft Edge";
        } else if (isFirefox) {
            browserInfo = "Mozilla Firefox";
        } else if (isOpera) {
            browserInfo = "Opera";
        }

        var version = "";
        if (isIE) {
            version = /(MSIE|rv:)(\d+(.\d+)?)/.exec(ua)[2];
        } else if (isChrome) {
            version = /Chrome\/(\d+)/.exec(ua)[1];
        } else if (isEdge) {
            version = /Edg\/(\d+)/.exec(ua)[1];
        } else if (isFirefox) {
            version = /Firefox\/(\d+)/.exec(ua)[1];
        } else if (isOpera) {
            version = /OPR\/(\d+)/.exec(ua)[1];
        }

        var warningMessage = document.createElement("div");
        warningMessage.className = "warning-message";
        warningMessage.innerHTML = "您的浏览器 " + browserInfo + " 内核版本 " + version + " 过低，可能存在兼容性问题。请升级您的浏览器或使用其他浏览器访问。";
        document.body.appendChild(warningMessage);
    }
};