var ViewModel = (function () {
    "use strict";

    function ViewModel (){
        this.applicationTitle = m.prop('Video Player');
        this.videos = m.prop([
            { name: 'Incredibles', src: 'movies/Incredibles (2004).mp4' },
            { name: 'Ratatouille', src: 'movies/Ratatouille (2007).mp4' },
            { name: 'Toy Story', src: 'movies/Toy Story (1995).mp4' }
        ]);
        this.selectedVideo = m.prop(this.videos()[0]);
    }

    ViewModel.prototype.isSelected = function isSelected(video) {
       return video === this.selectedVideo();
    };

    ViewModel.prototype.select = function select(video) {
        this.selectedVideo(video);
    };

    return ViewModel;
}());

function Controller() {
    this.vm = new ViewModel();
}

function view(controller) {
    var vm = controller.vm;
    return m('.panel.panel-default', [
        m('.panel-heading', vm.applicationTitle()),
        m('.panel-body.container', [
            m('.row', [
                m('.video-list.col-lg-4', [
                    m('.list-group', [
                        vm.videos().map(function (video) {
                            return m('a.list-group-item', {
                                href: '#',
                                class: vm.isSelected(video) ? 'active' : '',
                                onclick: vm.selectedVideo.bind(vm, video)
                            }, video.name)
                        })
                    ])
                ]),
                m('.video-player.col-lg-8.well.text-center', [
                    m('video[width=648][height=480][controls]', { src: vm.selectedVideo().src })
                ])
            ])
        ])
    ]);
}

m.module(document.querySelector('.root'), {
    controller: Controller,
    view: view
});
