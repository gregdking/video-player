define(function (require) {
    "use strict";

    var m = require('mithril'),
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
                        vm.videos().map(videoListItem.bind(null, vm))
                    ]),
                    videoPlayer([
                        h.video(vm.selectedVideo().src, VIDEO_WIDTH, VIDEO_HEIGHT)
                    ])
                ])
            ])
        ]);
    }

    function videoList(children) {
        return b.divListGroup({ class: 'col-lg-4' }, children);
    }

    function videoListItem(vm, video) {
        var caption = video.name,
            isSelected = vm.isSelected(video),
            onclick = vm.selectedVideo.bind(vm, video);
        return b.aListGroupItem('#', caption, isSelected, onclick);
    }

    function videoPlayer(children) {
        return m('.col-lg-8.well.text-center', children);
    }

    return view;
});