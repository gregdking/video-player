define(function (require) {
    "use strict";

    var m = require('mithril'),
        h = require('html-tags');

    function panel(children) {
        return m('.panel.panel-default', children);
    }

    function panelHeading(caption) {
        return m('.panel-heading', h.propertyValue(caption));
    }

    function panelBody(children) {
        return m('.panel-body.container', children);
    }

    function layoutRow(children) {
        return m('.row', children);
    }

    function divListGroup(children) {
        return m('.list-group', children);
    }

    function aListGroupItem(href, caption, isActive, onclick) {
        isActive = isActive || false;
        var anchor = m('a.list-group-item', {
            href: h.propertyValue(href),
            class: h.propertyValue(isActive) ? 'active' : ''
        }, h.propertyValue(caption));

        if (onclick) {
            anchor.attrs.onclick = onclick;
        }

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