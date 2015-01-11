define(function (require) {
    "use strict";

    var m = require('mithril'),
        Video = require('video');

    function ViewModel (){
        this.title = m.prop('Video Player');
        this.videos = m.prop([
            new Video('Incredibles', 'movies/Incredibles (2004).mp4'),
            new Video('Ratatouille', 'movies/Ratatouille (2007).mp4'),
            new Video('Toy Story', 'movies/Toy Story (1995).mp4')
        ]);
        //this.videos([]);
        this.selectedVideo = m.prop(null);
    }

    ViewModel.prototype.isSelected = function isSelected(video) {
        return video === this.selectedVideo();
    };

    return ViewModel;
});