define(function (require) {
    "use strict";

    var m = require('mithril'),
        h = require('html-tags');

    function panel(attrs, children) {
        return m('.panel.panel-default', attrs, children);
    }

    function panelHeading(attrs, children) {
        return m('.panel-heading', attrs, children);
    }

    function panelBody(attrs, children) {
        return m('.panel-body.container', attrs, children);
    }

    function layoutRow(attrs, children) {
        return m('.row', attrs, children);
    }

    function divListGroup(attrs, children) {
        return m('.list-group', attrs, children);
    }

    function aListGroupItem(href, caption, isActive, onclick) {
        var anchor = m('a.list-group-item', {
            href: h.propertyValue(href),
            class: h.propertyValue(isActive || false) ? 'active' : '',
            onclick: onclick
        }, h.propertyValue(caption));

        return anchor;
    }

    return {
        panel: panel,
        panelHeading: panelHeading,
        panelBody: panelBody,
        layoutRow: layoutRow,
        divListGroup: divListGroup,
        aListGroupItem: aListGroupItem
    }
});