define(function (require) {
    "use strict";

    var m = require('mithril'),
        mx = require('mithril-ext');

    function video(src, width, height) {
        return  m('video[controls]', {
            width: mx.value(width),
            height: mx.value(height),
            src:  mx.value(src)
        });
    }

    return {
        video: video
    }
});