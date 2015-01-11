define(function (require) {
    "use strict";

    var m = require('mithril');

    function Video(name, src) {
        this.name = m.prop(name);
        this.src = m.prop(src);
    }

    return Video;
});