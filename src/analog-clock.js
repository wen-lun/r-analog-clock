import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Clock from 'concise-clock'

export default class AnalogClock extends Component {
    componentDidMount() {
        let options = {};
        let { time } = this.props;
        if (time) {
            options = {
                onload: clock => clock.show(time)
            }
        }
        options = { ...options, ...this.props };
        this.clock = new Clock(this.refs.clock, options);
        if (!time) this.run();//没有传入time，就运行时钟
    }
    componentDidUpdate() {
        //props值有变化，就更新下时钟的属性
        this.clock && this.clock.setOptions(this.props);
    }
    run() {
        this.clock && this.clock.run();
    }
    stop() {
        this.clock && this.clock.stop();
    }
    render() {
        return <canvas ref="clock" />
    }
}

AnalogClock.propTypes = {
    size: PropTypes.number,
    time: function (props, propName) {
        if (props[propName] == undefined) return;
        if ("string" != typeof props[propName] && !(props[propName] instanceof Date)) {
            return new Error("time是一个日期对象或一个满足格式hh:mm:ss的字符串");
        }
    },
    padding: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    borderImage: PropTypes.string,
    backgroundColor: PropTypes.string,
    backgroundImage: PropTypes.string,
    backgroundMode: PropTypes.string,
    backgroundAlpha: PropTypes.number,
    scaleType: PropTypes.string,
    scaleColor: PropTypes.string,
    hourColor: PropTypes.string,
    secondHandColor: PropTypes.string,
    minuteHandColor: PropTypes.string,
    hourHandColor: PropTypes.string,
    showShadow: PropTypes.bool,

}