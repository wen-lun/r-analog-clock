'use strict';

exports.__esModule = true;
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _conciseClock = require('concise-clock');

var _conciseClock2 = _interopRequireDefault(_conciseClock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AnalogClock = function (_Component) {
    _inherits(AnalogClock, _Component);

    function AnalogClock() {
        _classCallCheck(this, AnalogClock);

        return _possibleConstructorReturn(this, _Component.apply(this, arguments));
    }

    AnalogClock.prototype.componentDidMount = function componentDidMount() {
        var options = {};
        var time = this.props.time;

        if (time) {
            options = {
                onload: function onload(clock) {
                    return clock.show(time);
                }
            };
        }
        options = _extends({}, options, this.props);
        this.clock = new _conciseClock2.default(this.refs.clock, options);
        if (!time) this.run(); //没有传入time，就运行时钟
    };

    AnalogClock.prototype.componentDidUpdate = function componentDidUpdate() {
        //props值有变化，就更新下时钟的属性
        this.clock && this.clock.setOptions(this.props);
    };

    AnalogClock.prototype.run = function run() {
        this.clock && this.clock.run();
    };

    AnalogClock.prototype.stop = function stop() {
        this.clock && this.clock.stop();
    };

    AnalogClock.prototype.render = function render() {
        return _react2.default.createElement('canvas', { ref: 'clock' });
    };

    return AnalogClock;
}(_react.Component);

exports.default = AnalogClock;


AnalogClock.propTypes = process.env.NODE_ENV !== "production" ? {
    size: _propTypes2.default.number,
    time: function time(props, propName) {
        if (props[propName] == undefined) return;
        if ("string" != typeof props[propName] && !(props[propName] instanceof Date)) {
            return new Error("time是一个日期对象或一个满足格式hh:mm:ss的字符串");
        }
    },
    padding: _propTypes2.default.number,
    borderWidth: _propTypes2.default.number,
    borderColor: _propTypes2.default.string,
    borderImage: _propTypes2.default.string,
    backgroundColor: _propTypes2.default.string,
    backgroundImage: _propTypes2.default.string,
    backgroundMode: _propTypes2.default.string,
    backgroundAlpha: _propTypes2.default.number,
    scaleType: _propTypes2.default.string,
    scaleColor: _propTypes2.default.string,
    hourColor: _propTypes2.default.string,
    secondHandColor: _propTypes2.default.string,
    minuteHandColor: _propTypes2.default.string,
    hourHandColor: _propTypes2.default.string,
    showShadow: _propTypes2.default.bool

} : {};
module.exports = exports['default'];