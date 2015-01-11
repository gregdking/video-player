define(function (require) {
    "use strict";

    var m = require('mithril');

    function ViewModel (){
        this.title = m.prop('Video Player');
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

    return ViewModel;
});