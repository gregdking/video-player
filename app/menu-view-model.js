define(function (require) {
    'use strict';

    function MenuViewModel(parent) {
        this.parent = parent;
    }

    MenuViewModel.prototype.title = function title() {
        return this.parent.title();
    };

    MenuViewModel.prototype.add = function add() {
        console.log('add');
    };

    MenuViewModel.prototype.fullScreen = function fullScreen() {
        console.log('fullScreen');
    };

    MenuViewModel.prototype.play = function play() {
        console.log('play');
    };

    MenuViewModel.prototype.stop = function stop() {
        console.log('stop');
    };

    MenuViewModel.prototype.restart = function restart() {
        console.log('restart');
    };

    MenuViewModel.prototype.next = function next() {
        console.log('next');
    };

    MenuViewModel.prototype.previous = function previous() {
        console.log('previous');
    };

    MenuViewModel.prototype.volumeUp = function volumeUp() {
        console.log('volumeUp');
    };

    MenuViewModel.prototype.volumeDown = function volumeDown() {
        console.log('volumeDown');
    };

    MenuViewModel.prototype.mute = function mute() {
        console.log('mute');
    };

    MenuViewModel.prototype.help = function help() {
        console.log('help');
    };

    MenuViewModel.prototype.about = function about() {
        console.log('about');
    };

    return MenuViewModel;
})