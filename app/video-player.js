'use strict';

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    return b;
};

var Timer = (function () {
    function Timer(props) {
        base.call(this, props);
        this.interval = null;
        this.state = {
            secondsElapsed: 0
        };
        this.tick = this.tick.bind(this);
    }
    var base = __extends(Timer, React.Component);

    var prototype = Timer.prototype;

    prototype.tick = function () {
        this.setState({
            secondsElapsed: this.state.secondsElapsed + 1
        });
    };

    prototype.componentDidMount = function() {
        this.interval = setInterval(this.tick, 1000);
    };

    prototype.componentWillUnmount = function() {
        clearInterval(this.interval);
    };

    prototype.render = function () {
        return React.createElement(
            "div",
            null,
            "Seconds Elapsed: ",
            this.state.secondsElapsed
        );
    };

    return Timer;
}());

var timer = React.createElement(Timer, null),
    root = document.querySelector('.root');

ReactDOM.render(timer, root);