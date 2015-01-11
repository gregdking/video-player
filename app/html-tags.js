define(function (require) {
    "use strict";

    var m = require('mithril'),
        _ = require('lodash');


    function video(src, width, height) {
        return  m('video[controls]', {
            width: propertyValue(width),
            height: propertyValue(height),
            src:  propertyValue(src)
        });
    }

    function propertyValue(property) {
        return _.isFunction(property) ? property() : property;
    }

    return {
        video: video,
        propertyValue: propertyValue
    }
});