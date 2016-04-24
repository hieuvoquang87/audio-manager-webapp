/**
 * Created by hieuvo on 4/16/16.
 */
import React, {Component, PropTypes} from 'react';
import Slider from 'material-ui/lib/slider';

export default class ProgressBar extends Component {
    static propTypes = {};

    constructor(props) {
        super(props);
    }

    handleSeekTrack(e) {
        const xPos = (e.pageX - e.currentTarget.getBoundingClientRect().left) / e.currentTarget.offsetWidth;
        this.setState({value: xPos * 100});
        //emit event SEEK_TRACK_END
        this.props.onPlayPosChange(xPos * this.props.duration);
    }

    secondsToMinutesAndSeconds(seconds) {
        var minutes = Math.floor(seconds / 60);
        var seconds = (seconds % 60).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    render() {
        let value = this.props.duration ? this.props.currentTime / this.props.duration : 0;
        let currentTime = this.secondsToMinutesAndSeconds(this.props.currentTime);
        let duration = this.secondsToMinutesAndSeconds(this.props.duration);
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }
        /*
         * */
        return (
            <div className="seek-bar">
                <div className="audio-time">{currentTime} / {duration}</div>
                <div className="sb-soundplayer-progress-container"
                     onClick={this.handleSeekTrack.bind(this)}>
                    <div className="sb-soundplayer-progress-inner" style={{width: (value*100) + '%'}}>
                        <span className="progress-node"></span>
                    </div>
                </div>
            </div>);
    }
}