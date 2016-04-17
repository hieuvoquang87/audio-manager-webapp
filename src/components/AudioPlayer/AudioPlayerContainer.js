/**
 * Created by hieuvo on 4/16/16.
 */
import React, {Component, PropTypes} from 'react';

import PlayButton from './PlayButton';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import ProgressBar from './ProgressBar';

import {styles} from './styles.scss';

export default class AudioPlayerContainer extends Component {
    static propType = {};

    constructor(props) {
        super(props);
        this.state = {
            audioSource: null,
            currentTime: 0,
            duration: 0,
            isEnded: false
        }
    }
    onAudioLoaded(event) {
        this.setState({
            audioSource: event.currentTarget,
            duration: event.currentTarget.duration,
            isEnded: event.currentTarget.ended
        });
    }

    onPlayClick() {
        this.state.audioSource.play();
    }

    onPauseClick() {
        this.state.audioSource.pause();
    }

    onTimeUpdate() {
        this.setState({currentTime: this.state.audioSource.currentTime});
    }
    onEnded () {

    }
    onPlayPosChange (newPlayPos) {
        this.state.audioSource.currentTime = newPlayPos;
        this.state.audioSource.play();
    }
    render() {
        return (
            <div className="container">
                <div className={`${styles}` + ' col-lg-6'}>
                    <div className="control-group">
                        <PrevButton />
                        <PlayButton onPlayClick={this.onPlayClick.bind(this)}
                                    onPauseClick={this.onPauseClick.bind(this)}
                                    isPaused={this.state.audioSource ? this.state.audioSource.paused : true}/>
                        <NextButton />
                        <span className="audio-info"></span>
                    </div>
                    <ProgressBar
                        currentTime={this.state.currentTime}
                        duration={this.state.duration}
                        onPlayPosChange={this.onPlayPosChange.bind(this)}
                    />
                    <audio onCanPlay={this.onAudioLoaded.bind(this)}
                           onTimeUpdate={this.onTimeUpdate.bind(this)}
                           onEnded={this.onEnded.bind(this)}
                           src="http://mp3.zing.vn/download/song/Nho-Ve-Em-Jimmii-Nguyen/knxmyknaSgLaNzpykFxtbHZm"
                           type="audio/mpeg">
                    </audio>
                </div>
            </div>
        );
    }
}
