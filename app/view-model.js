define(function (require) {
    "use strict";

    var m = require('mithril'),
        Video = require('video'),
        MenuViewModel = require('menu-view-model');

    function ViewModel (){
        this.menuVM = new MenuViewModel(this);
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