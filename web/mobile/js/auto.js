; (function (win, doc) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
    var init = function () {
        var windowWidth = docEl.clientWidth;
        if (!windowWidth) return;
        // windowWidth = windowWidth < 320 ? 320 : windowWidth;
        docEl.style.fontSize = windowWidth / 7.5 + 'px'
    }
    if (!doc.addEventListener) return
    win.addEventListener(resizeEvt, init, false)
    doc.addEventListener('DOMContentLoaded', init, false)
})(window, document)

