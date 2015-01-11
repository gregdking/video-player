define(function (require) {
    "use strict";

    var m = require('mithril'),
        mx = require('mithril-ext'),
        h = require('html-tags'),
        b = require('bootstrap-tags');

    var VIDEO_WIDTH = 640,
        VIDEO_HEIGHT = 480;

    function view(vm) {
        return b.panel([
            b.panelHeading(vm.title()),
            b.panelBody([
                b.layoutRow([
                    videoList([
                        mx.map(vm.videos, videoListItem.bind(null, vm), noVideosInDatabase)
                    ]),
                    videoPlayer([
                        mx.exists(vm.selectedVideo, video, noVideoSelected)
                    ])
                ])
            ])
        ]);
    }

    function videoList(children) {
        return b.divListGroup({ class: 'col-lg-4' }, children);
    }

    function videoListItem(vm, video) {
        var isSelected = vm.isSelected(video),
            onclick = vm.selectedVideo.bind(vm, video);
        return b.aListGroupItem('#', video.name, isSelected, onclick);
    }

    function videoPlayer(children) {
        return m('.col-lg-8.well.text-center', children);
    }

    function video(selectedVideo) {
        return h.video(selectedVideo.src, VIDEO_WIDTH, VIDEO_HEIGHT);
    }

    function noVideosInDatabase() {
        return m('.list-group-item.text-center', 'No Videos in Database');
    }

    function noVideoSelected() {
        return m('div', 'No Video Selected');
    }

    return view;
});