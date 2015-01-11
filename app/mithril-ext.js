define(function (require) {
    "use strict";

    var _ = require('lodash');

    function iif(predicate, truthy, falsy) {
        predicate = value(predicate);
        if (predicate) {
            return truthy();
        } else if (falsy) {
            return falsy();
        }
    }

    function exists(object, truthy, falsy) {
        object = value(object);
        if (object) {
            return truthy(object);
        } else if (falsy) {
            return falsy();
        }
    }

    function map(collection, callback, empty) {
        collection = value(collection);
        if (_.size(collection)) {
            return _.map(collection, callback);
        } else if (empty) {
            return empty();
        }
    }

    function value(property) {
        return _.isFunction(property) ? property() : property;
    }

    return {
        iif: iif,
        exists: exists,
        map: map,
        value: value
    };
});