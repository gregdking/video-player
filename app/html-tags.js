define(function (require) {
    "use strict";

    var m = require('mithril'),
        mx = require('mithril-ext');

    function a(attrs, children) {
        return m('a', attrs, children);
    }

    function li(attrs, children) {
        return m('li', attrs, children);
    }

    function video(src, width, height) {
        return  m('video[controls]', {
            width: mx.value(width),
            height: mx.value(height),
            src:  mx.value(src)
        });
    }

    return {
        a: a,
        li: li,
        video: video
    }
});