define(function (require) {
    "use strict";

    var m = require('mithril'),
        h = require('html-tags'),
        b = require('bootstrap-tags');

    function view(vm) {
        return b.panel([
            b.panelHeading(vm.applicationTitle),
            b.panelBody([
                b.layoutRow([
                    videoList([
                        b.divListGroup([
                            vm.videos().map(videoListItem.bind(null, vm))
                        ])
                    ]),
                    videoPlayer([
                        h.video(640, 480, vm.nowPlaying().src)
                    ])
                ])
            ])
        ]);
    }

    function videoList(children) {
        return m('.video-list.col-lg-4', children);
    }

    function videoListItem(vm, video) {
        var caption = video.name,
            isSelected = vm.isSelected(video),
            onclick = vm.nowPlaying.bind(vm, video);
        return b.aListGroupItem('#', caption, isSelected, onclick);
    }

    function videoPlayer(children) {
        return m('.video-player.col-lg-8.well.text-center', children);
    }

    return view;
});