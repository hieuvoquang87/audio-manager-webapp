/**
 * Created by hieuvo on 4/16/16.
 */
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PlayButton from './PlayButton';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import ProgressBar from './ProgressBar';

import {styles} from './styles.scss';

@connect(
    state => state.library
)
export default class AudioPlayerContainer extends Component {
    static propType = {};

    constructor(props) {
        super(props);
        let audioElement = new Audio('');
        //audioElement.oncanplay = this.onAudioLoaded.bind(this);
        audioElement.ontimeupdate = this.onTimeUpdate.bind(this);
        audioElement.onended = this.onEnded.bind(this);
        this.state = {
            audioSource: audioElement,
            currentTime: 0,
            duration: 0,
            isEnded: false
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.selectedMediaItem) {
            this.state.audioSource.src = nextProps.selectedMediaItem.url;
            this.state.audioSource.load();
            this.state.audioSource.play();
        }
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

    onEnded() {

    }

    onPlayPosChange(newPlayPos) {
        this.state.audioSource.currentTime = newPlayPos;
        this.state.audioSource.play();
    }

    render() {
        return (
            <div className={`${styles} ${this.state.audioSource.currentSrc? "" : "hidden"}` + ' col-lg-12'}>
                <div className="control-group">
                    <PrevButton />
                    <PlayButton onPlayClick={this.onPlayClick.bind(this)}
                                onPauseClick={this.onPauseClick.bind(this)}
                                isPaused={this.state.audioSource ? (this.state.audioSource.paused) : true}/>
                    <NextButton />
                    <span className="audio-info">
                        <h4>{this.props.selectedMediaItem ? this.props.selectedMediaItem.name : "No Audio Selected"}</h4>
                    </span>
                </div>
                <ProgressBar
                    currentTime={this.state.audioSource.currentTime}
                    duration={this.state.audioSource.duration ? this.state.audioSource.duration : 0}
                    onPlayPosChange={this.onPlayPosChange.bind(this)}
                />
            </div>
        );
    }
}
