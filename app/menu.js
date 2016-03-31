define(function (require) {
    'use strict';

    var b = require('bootstrap-tags'),
        h = require('html-tags'),
        m = require('mithril');

    function view(vm) {
        return menuBar([
            menuBarHeader(vm.title()),
            menus([
                menu('File', [
                    menuItem('Add to Library...', vm.add.bind(vm))
                ]),
                menu('Edit', []),
                menu('View', [
                    menuItem('Full Screen', vm.fullScreen.bind(vm))
                ]),
                menu('Playback', [
                    menuItem('Play', vm.play.bind(vm)),
                    menuItem('Stop', vm.stop.bind(vm)),
                    menuItem('Restart', vm.restart.bind(vm)),
                    menuDivider(),
                    menuItem('Next', vm.next.bind(vm)),
                    menuItem('Previous', vm.previous.bind(vm)),
                    menuDivider(),
                    menuItem('Volume Up', vm.volumeUp.bind(vm)),
                    menuItem('Volume Down', vm.volumeDown.bind(vm)),
                    menuItem('Mute', vm.mute.bind(vm))
                ]),
                menu('Help', [
                    menuItem(vm.title() + ' Help', vm.help.bind(vm)),
                    menuItem('About ' + vm.title(), vm.about.bind(vm))
                ])
            ])
        ]);
    }

    function menuBar(children) {
        return m('nav.navbar.navbar-default', [
            m('.container-fluid', children)
        ]);
    }

    function menuBarHeader(caption) {
        return m('.navbar-header', [
            m('span.navbar-brand', caption)
        ]);
    }

    function menus(children) {
        return m('.collapse.navbar-collapse', [
            m('ul.nav.navbar-nav', children)
        ]);
    }

    function menu(caption, children) {
        return m('li.dropdown', [
            m('a.dropdown-toggle', { href: '#', 'data-toggle': 'dropdown', role: 'button' }, caption),
            m('ul.dropdown-menu', { role: 'menu' }, children)
        ])
    }

    function menuItem(caption, action) {
        action = action || function () {
            console.log(caption + ' clicked');
        };
        return h.li([ h.a({ href: '#', onclick: action }, caption) ]);
    }

    function menuDivider() {
        return m('li.divider');
    }

    return view;
});