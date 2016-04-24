/**
 * Created by hieuvo on 4/17/16.
 */
/**
 * Created by hieuvo on 4/16/16.
 */
import React, {Component, PropTypes} from 'react';
import { Slider } from 'rebass';

import { zstyles } from './zing-styles.scss';

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
        let duration = duration = this.secondsToMinutesAndSeconds(this.props.duration);
        if (value < 0) {
            value = 0;
        }
        if (value > 100) {
            value = 100;
        }
        /*
         * */
        return (
            <div className={`${zstyles}`}>
                <div className="zm-process-bar jp-progress">
                    <div className="zm-loaded jp-seek-bar" style={{width: '100%'}}>
                        <div className="zm-buffer jp-play-bar" style={{width: '15.5661%'}}><span className="zm-node"></span></div>
                    </div>
                </div>
            </div>);
    }
}